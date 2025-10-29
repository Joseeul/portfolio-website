import Sidebar from "../components/Sidebar";
import GitHubActivityCalendar from "../components/GithubActivityCalendar";
import { supabase } from "@/lib/supabaseClient";

async function getProjectStatistics() {
  // Ganti 'projects' dengan nama tabel Anda

  // 1. Ambil Total Semua Project
  const { count: allCount, error: allError } = await supabase
    .from("projects")
    .select("*", { count: "exact", head: true });

  // 2. Ambil Total Project Mobile
  const { count: mobileCount, error: mobileError } = await supabase
    .from("projects")
    .select("*", { count: "exact", head: true })
    .eq("project_type", "mobile"); // Filter berdasarkan 'mobile'

  // 3. Ambil Total Project Web
  const { count: webCount, error: webError } = await supabase
    .from("projects")
    .select("*", { count: "exact", head: true })
    .eq("project_type", "web"); // Filter berdasarkan 'web'

  // (Optional) Penanganan error
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

async function getToolStatistics() {
  const toolsToCount = [
    "React Native",
    "Flutter",
    "Swift",
    "Android",
    "ReactJS",
    "HTML",
    "CSS",
    "JavaScript",
    "Appwrite",
    "Supabase",
    "Firebase",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Next.js",
    "React",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "Bootstrap",
  ];

  // Buat array berisi promise untuk setiap kueri 'count'
  const countPromises = toolsToCount.map((tool) => {
    return supabase
      .from("projects") // Ganti 'projects' dengan nama tabel Anda
      .select("*", { count: "exact", head: true })
      .contains("tools_used", [tool]); // .contains() untuk mencari item dalam array
  });

  // Jalankan semua kueri 'count' secara paralel
  const results = await Promise.all(countPromises);

  // Map hasil kueri ke format yang kita inginkan
  const toolStats = results.map((result, index) => {
    if (result.error) {
      console.error(
        `Error counting ${toolsToCount[index]}:`,
        result.error.message
      );
    }
    return {
      label: toolsToCount[index],
      value: result.count || 0,
    };
  });

  return toolStats;
}

export default async function Statics() {
  const [stats, toolStats] = await Promise.all([
    getProjectStatistics(),
    getToolStatistics(), // Panggil fungsi baru
  ]);

  const projectStats = [
    { label: "All Projects", value: stats.all },
    { label: "Mobile Projects", value: stats.mobile },
    { label: "Web Projects", value: stats.web },
  ];

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
        <div className="flex justify-between items-start mt-5">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=joseeul"
            alt="Top Languages"
            className="w-xs"
          />
          <div className="bg-white w-lg p-5 rounded-lg border-custom-color border-[0.5px] h-76">
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
          <div className="bg-white w-lg p-5 rounded-lg border-custom-color border-[0.5px] overflow-x-hidden h-76">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              All Time Tools Used Statics
            </h2>
            <div className="space-y-4">
              {toolStats.map((tool) => (
                <div key={tool.label}>
                  <div className="flex justify-between items-center text-gray-700">
                    <span className="font-medium">{tool.label}</span>
                    <span className="font-bold text-lg">{tool.value}</span>
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
