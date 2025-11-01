import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";
import { Project } from "@/types";
import ProjectCard from "./ProjectCard";

async function getFeaturedProjects(): Promise<Project[]> {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("is_featured", true);

  if (error) {
    console.error("Error fetching featured projects:", error);
    return [];
  }

  return (data as Project[]) || [];
}

export default async function Portfolio() {
  const featuredProjects = await getFeaturedProjects();

  return (
    <section className="background-color-primary text-brand-dark py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-color-blue">
            Featured Portfolio
          </h2>
          <p className="text-lg text-color-primary">
            These featured projects represent the highest standards of my
            technical and creative capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              tools={project.tools_used}
              thumbnailUrl={project.thumbnail_url}
              githubLink={project.github_link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
