import Sidebar from "../components/Sidebar";
import GitHubActivityCalendar from "../components/GithubActivityCalendar";
import { supabase } from "@/lib/supabaseClient";

async function getProjectStatistics() {
  const { count: allCount, error: allError } = await supabase
    .from("projects")
    .select("*", { count: "exact", head: true });

  const { count: mobileCount, error: mobileError } = await supabase
    .from("projects")
    .select("*", { count: "exact", head: true })
    .eq("project_type", "mobile");

  const { count: webCount, error: webError } = await supabase
    .from("projects")
    .select("*", { count: "exact", head: true })
    .eq("project_type", "web");

  if (allError || mobileError || webError) {
    console.error("Error fetching project stats:", {
      allError,
      mobileError,
      webError,
    });
  }

  return {
    all: allCount || 0,
    mobile: mobileCount || 0,
    web: webCount || 0,
  };
}

export default async function Statics() {
  const [stats] = await Promise.all([getProjectStatistics()]);

  const projectStats = [
    { label: "All Projects", value: stats.all },
    { label: "Mobile Projects", value: stats.mobile },
    { label: "Web Projects", value: stats.web },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen p-3 sm:p-5 background-color-primary">
      <Sidebar />

      <main className="flex-1 mt-5 md:mt-0 md:ml-5">
        <div className="bg-white p-5 rounded-lg border-custom-color border-[0.5px]">
          <h1 className="text-xl font-medium text-color-primary mb-6">
            Github Contribution
          </h1>

          <div className="flex justify-center overflow-x-auto">
            <GitHubActivityCalendar />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-start mt-5 gap-5">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=joseeul"
            alt="Top Languages"
            className="w-full lg:w-xs"
          />
          <div className="bg-white w-full lg:w-lg p-5 rounded-lg border-custom-color border-[0.5px] h-auto lg:h-76 overflow-y-auto">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              All Time Projects Statics
            </h2>
            <div className="space-y-4">
              {projectStats.map((stat) => (
                <div key={stat.label}>
                  <div className="flex justify-between items-center text-gray-700">
                    <span className="font-medium">{stat.label}</span>
                    <span className="font-bold text-lg">{stat.value}</span>
                  </div>
                  <hr className="mt-2 border-gray-100" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
