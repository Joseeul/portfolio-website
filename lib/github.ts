import "server-only";

interface GitHubGraphQLResponse {
  data?: {
    user: {
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number;
        };
      };
    };
  };
  errors?: Array<{ message: string }>;
}

export type ActivityType = "COMMIT" | "PR_OPEN" | "PR_MERGE";

export interface ActivityItem {
  id: string;
  repoName: string;
  date: string;
  type: ActivityType;
  text: string;
  url: string;
}

interface GitHubEventRepo {
  name: string;
}

interface GitHubEventCommit {
  message: string;
  sha: string;
  url: string;
}

interface GitHubEventPullRequest {
  title: string;
  html_url: string;
  merged: boolean;
}

interface GitHubEventPayload {
  commits?: GitHubEventCommit[];
  action?: "opened" | "closed";
  pull_request?: GitHubEventPullRequest;
}

interface GitHubEvent {
  id: string;
  type: "PushEvent" | "PullRequestEvent" | string;
  repo: GitHubEventRepo;
  payload: GitHubEventPayload;
  created_at: string;
}

export async function getGithubContributions(): Promise<number | null> {
  const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
  const GITHUB_TOKEN = process.env.GITHUB_PAT;

  if (!GITHUB_TOKEN || !GITHUB_USERNAME) {
    console.error(
      "Variabel GITHUB_PAT atau GITHUB_USERNAME belum di-set di .env.local"
    );
    return null;
  }

  const query = `
    query {
      user(login: "${GITHUB_USERNAME}") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
          }
        }
      }
    }
  `;

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `bearer ${GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(
        `GitHub API error: ${response.status} ${response.statusText}`
      );
    }

    const data: GitHubGraphQLResponse = await response.json();

    if (data.errors) {
      console.error("GraphQL Errors:", data.errors);
      throw new Error(data.errors.map((e) => e.message).join("\n"));
    }

    const total =
      data.data?.user.contributionsCollection.contributionCalendar
        .totalContributions;

    return typeof total === "number" ? total : null;
  } catch (error) {
    console.error("Gagal mengambil data kontribusi:", error);
    return null;
  }
}

export async function getRecentActivity(): Promise<ActivityItem[] | null> {
  const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
  const GITHUB_TOKEN = process.env.GITHUB_PAT;

  if (!GITHUB_TOKEN || !GITHUB_USERNAME) {
    console.error("Variabel GITHUB_PAT atau GITHUB_USERNAME belum di-set.");
    return null;
  }

  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/events?per_page=30`,
      {
        headers: {
          Authorization: `bearer ${GITHUB_TOKEN}`,
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 600 },
      }
    );

    if (!response.ok) {
      throw new Error(
        `GitHub API error: ${response.status} ${response.statusText}`
      );
    }

    const events: GitHubEvent[] = await response.json();

    console.log(`[DEBUG] Total event mentah diterima: ${events.length}`);

    const activityItems = events.reduce((acc: ActivityItem[], event) => {
      if (acc.length >= 20) {
        return acc;
      }

      if (
        event.type === "PushEvent" &&
        event.payload.commits &&
        event.payload.commits.length > 0
      ) {
        const lastCommit =
          event.payload.commits[event.payload.commits.length - 1];
        acc.push({
          id: event.id,
          date: event.created_at,
          repoName: event.repo.name,
          type: "COMMIT",
          text: lastCommit.message.split("\n")[0],
          url: lastCommit.url
            .replace("api.github.com/repos", "github.com")
            .replace("/commits/", "/commit/"),
        });
      }

      if (
        event.type === "PullRequestEvent" &&
        event.payload.action === "opened" &&
        event.payload.pull_request
      ) {
        acc.push({
          id: event.id,
          date: event.created_at,
          repoName: event.repo.name,
          type: "PR_OPEN",
          text: event.payload.pull_request.title,
          url: event.payload.pull_request.html_url,
        });
      }

      if (
        event.type === "PullRequestEvent" &&
        event.payload.action === "closed" &&
        event.payload.pull_request?.merged === true
      ) {
        acc.push({
          id: event.id,
          date: event.created_at,
          repoName: event.repo.name,
          type: "PR_MERGE",
          text: event.payload.pull_request.title,
          url: event.payload.pull_request.html_url,
        });
      }

      return acc;
    }, []);

    return activityItems;
  } catch (error) {
    console.error("Gagal mengambil data aktivitas:", error);
    return null;
  }
}
