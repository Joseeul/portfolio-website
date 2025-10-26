import Sidebar from "../components/Sidebar";
import GitHubActivityCalendar from "../components/GithubActivityCalendar";

export default function Statics() {
  return (
    <div className="flex min-h-screen p-5 background-color-primary">
      {/* Sidebar Kiri */}
      <Sidebar />

      <main className="flex-1 ml-5">
        <div className="bg-white p-5 rounded-lg border-custom-color border-[0.5px]">
          <h1 className="text-xl font-medium text-color-primary mb-6">
            Github Contribution
          </h1>

          <div className="flex justify-center">
            <GitHubActivityCalendar />
          </div>
        </div>
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=joseeul"
          alt="Top Languages"
          className="w-xs mt-5"
        />
      </main>
    </div>
  );
}
