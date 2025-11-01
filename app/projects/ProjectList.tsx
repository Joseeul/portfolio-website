"use client";

import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { Project } from "@/types";

type Tab = "all" | "mobile" | "web";

export default function ProjectList({ projects }: { projects: Project[] }) {
  const [activeTab, setActiveTab] = useState<Tab>("all");

  const baseButtonClass =
    "py-2 px-5 rounded-lg font-medium text-base hover:cursor-pointer";
  const activeButtonClass = "background-color-blue text-white";
  const inactiveButtonClass =
    "text-color-blue border-[0.5px] border-custom-color";

  const filteredProjects = projects.filter((project) => {
    if (activeTab === "all") return true;
    return project.project_type === activeTab;
  });

  return (
    <>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            tools={project.tools_used}
            thumbnailUrl={project.thumbnail_url}
            githubLink={project.github_link}
          />
        ))}
      </div>
    </>
  );
}
