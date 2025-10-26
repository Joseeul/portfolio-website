"use client";
import GitHubCalendar from "react-github-calendar";

export default function GitHubActivityCalendar() {
  const username = "joseeul";

  return (
    <div>
      <GitHubCalendar username={username} colorScheme="light"/>
    </div>
  );
}
