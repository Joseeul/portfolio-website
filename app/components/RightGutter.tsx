import RightGutterClient from "./RightGutterClient";
import { getRecentActivity, type ActivityItem } from "@/lib/github";

export default async function RightGutter() {
  const recentActivity = await getRecentActivity();
  const GITHUB_USERNAME = process.env.GITHUB_USERNAME || "YourUser";

  return (
    <RightGutterClient
      recentActivity={recentActivity}
      username={GITHUB_USERNAME}
    />
  );
}
