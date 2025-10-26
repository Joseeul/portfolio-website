import "server-only"; // Memastikan kode ini HANYA berjalan di server

// Tipe untuk respons GraphQL yang kita harapkan
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
  text: string; // Bisa jadi commit message or PR title
  url: string; // URL ke commit atau PR
}

interface GitHubEventRepo {
  name: string;
}

interface GitHubEventCommit {
  message: string;
  sha: string;
  url: string; // API URL
}

interface GitHubEventPullRequest {
  title: string;
  html_url: string; // Ini URL yang kita mau
  merged: boolean;
}

interface GitHubEventPayload {
  // Untuk PushEvent
  commits?: GitHubEventCommit[];
  // Untuk PullRequestEvent
  action?: "opened" | "closed";
  pull_request?: GitHubEventPullRequest;
}

interface GitHubEvent {
  id: string;
  type: "PushEvent" | "PullRequestEvent" | string; // Buat lebih luas
  repo: GitHubEventRepo;
  payload: GitHubEventPayload;
  created_at: string;
}

/**
 * Mengambil total kontribusi GitHub selama 1 tahun terakhir.
 * Menggunakan Next.js fetch dengan caching (revalidate).
 */
export async function getGithubContributions(): Promise<number | null> {
  const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
  const GITHUB_TOKEN = process.env.GITHUB_PAT;

  if (!GITHUB_TOKEN || !GITHUB_USERNAME) {
    console.error(
      "Variabel GITHUB_PAT atau GITHUB_USERNAME belum di-set di .env.local"
    );
    return null;
  }

  // Ini adalah "setup" GraphQL Anda.
  // Kita mendefinisikan query sebagai sebuah string.
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
    // Ini adalah "eksekusi" GraphQL.
    // Kita mengirim query sebagai body JSON ke endpoint GraphQL GitHub.
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `bearer ${GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }), // Kirim query di dalam { "query": "..." }
      // Caching: Ambil data baru paling cepat setiap 1 jam (3600 detik)
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

    // Ambil angkanya
    const total =
      data.data?.user.contributionsCollection.contributionCalendar
        .totalContributions;

    return typeof total === "number" ? total : null;
  } catch (error) {
    console.error("Gagal mengambil data kontribusi:", error);
    return null; // Kembalikan null jika ada error
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
        next: { revalidate: 600 }, // Cache 10 menit
      }
    );

    if (!response.ok) {
      throw new Error(
        `GitHub API error: ${response.status} ${response.statusText}`
      );
    }

    const events: GitHubEvent[] = await response.json();

    console.log(`[DEBUG] Total event mentah diterima: ${events.length}`);

    // Gunakan .reduce() untuk mem-filter, memetakan, dan membatasi (limit)
    // data dalam satu langkah
    const activityItems = events.reduce((acc: ActivityItem[], event) => {
      // Kita hanya ambil 5 aktivitas terbaru
      if (acc.length >= 20) {
        return acc;
      }

      // Tipe 1: PushEvent (Commit)
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
          text: lastCommit.message.split("\n")[0], // Pesan commit
          url: lastCommit.url
            .replace("api.github.com/repos", "github.com")
            .replace("/commits/", "/commit/"),
        });
      }

      // Tipe 2: PullRequestEvent (Dibuka)
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
          text: event.payload.pull_request.title, // Judul PR
          url: event.payload.pull_request.html_url, // URL PR
        });
      }

      // Tipe 3: PullRequestEvent (Di-merge)
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
          text: event.payload.pull_request.title, // Judul PR
          url: event.payload.pull_request.html_url, // URL PR
        });
      }

      return acc;
    }, []); // Mulai dengan array kosong

    return activityItems;
  } catch (error) {
    console.error("Gagal mengambil data aktivitas:", error);
    return null;
  }
}
