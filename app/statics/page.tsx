import Sidebar from "../components/Sidebar";
import GitHubActivityCalendar from "../components/GithubActivityCalendar";
import {
  PhotoIcon, // Placeholder untuk Figma
  CpuChipIcon, // Placeholder untuk Android Studio
  CodeBracketIcon, // Placeholder untuk Flutter
} from "@heroicons/react/24/outline";

const projectStats = [
  { label: "Mobile Project", value: 10 },
  { label: "Web Project", value: 6 },
];

const toolStats = [
  // Catatan: Ganti 'icon' dengan <img> atau SVG kustom untuk logo aslinya
  {
    icon: <PhotoIcon className="w-6 h-6 text-pink-500" />,
    label: "Figma",
    value: 8,
  },
  {
    icon: <CodeBracketIcon className="w-6 h-6 text-blue-400" />,
    label: "Flutter",
    value: 8,
  },
  {
    icon: <CpuChipIcon className="w-6 h-6 text-green-500" />,
    label: "Android Studio",
    value: 8,
  },
];

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
        <div className="flex justify-between mt-5">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=joseeul"
            alt="Top Languages"
            className="w-xs"
          />
          <div className="bg-white w-lg p-5 rounded-lg border-custom-color border-[0.5px]">
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
          <div className="bg-white w-lg p-5 rounded-lg border-custom-color border-[0.5px]">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              All Time Tools Used Statics
            </h2>
            <div className="space-y-4">
              {toolStats.map((tool) => (
                <div key={tool.label}>
                  <div className="flex justify-between items-center text-gray-700">
                    <div className="flex items-center gap-3">
                      {tool.icon}
                      <span className="font-medium">{tool.label}</span>
                    </div>
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
