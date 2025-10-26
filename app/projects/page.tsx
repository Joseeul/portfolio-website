"use client";
import ProjectCard from "../components/ProjectCard";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

// Data dummy untuk mengisi grid, sesuai gambar Anda
const projectsData = [
  { title: "Picverse", tools: ["Figma", "HTML", "CSS", "JavaScript"] },
  { title: "EV Route Planner", tools: ["Figma"] },
  { title: "LOLgic", tools: ["Figma", "SQLite", "Android Studio"] },
  { title: "Shadow Space", tools: ["Figma", "Flutter", "Firebase"] },
  { title: "Picverse", tools: ["Figma", "HTML", "CSS", "JavaScript"] },
  { title: "Picverse", tools: ["Figma", "HTML", "CSS", "JavaScript"] },
  { title: "Picverse", tools: ["Figma", "HTML", "CSS", "JavaScript"] },
  { title: "Picverse", tools: ["Figma", "HTML", "CSS", "JavaScript"] },
  { title: "Picverse", tools: ["Figma", "HTML", "CSS", "JavaScript"] },
  { title: "Picverse", tools: ["Figma", "HTML", "CSS", "JavaScript"] },
  { title: "Picverse", tools: ["Figma", "HTML", "CSS", "JavaScript"] },
  { title: "Picverse", tools: ["Figma", "HTML", "CSS", "JavaScript"] },
];

type Tab = "all" | "mobile" | "web";

export default function Projects() {
  const [activeTab, setActiveTab] = useState<Tab>("all");
  const baseButtonClass =
    "py-2 px-5 rounded-lg font-medium text-base hover:cursor-pointer";
  const activeButtonClass = "background-color-blue text-white";
  const inactiveButtonClass =
    "text-color-blue border-[0.5px] border-custom-color";

  return (
    <div className="flex min-h-screen background-color-primary p-5 text-color-primary">
      {/* Sidebar Kiri */}
      <Sidebar />

      {/* Konten Utama (Main Content) */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Tab Filter */}
        <div className="flex gap-4 mb-8">
          <button
            className={`${baseButtonClass} ${
              activeTab === "all" ? activeButtonClass : inactiveButtonClass
            }`}
            onClick={() => setActiveTab("all")}
          >
            All Projects
          </button>

          <button
            className={`${baseButtonClass} ${
              activeTab === "mobile" ? activeButtonClass : inactiveButtonClass
            }`}
            onClick={() => setActiveTab("mobile")}
          >
            Mobile Projects
          </button>

          <button
            className={`${baseButtonClass} ${
              activeTab === "web" ? activeButtonClass : inactiveButtonClass
            }`}
            onClick={() => setActiveTab("web")}
          >
            Web Projects
          </button>
        </div>

        {/* Grid Proyek */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              tools={project.tools}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
