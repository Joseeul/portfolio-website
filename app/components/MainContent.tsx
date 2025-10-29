import StatCard from "./StatCard";
import ProjectCard from "./ProjectCard";
import Image from "next/image";
import Link from "next/link";
import { getGithubContributions } from "@/lib/github";
import { supabase } from "@/lib/supabaseClient";
import { Project } from "@/types";

async function getFeaturedProjects(): Promise<Project[]> {
  // Ganti 'projects' dengan nama tabel Anda
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

async function getProjectCount(): Promise<number> {
  const { count, error } = await supabase
    .from("projects")
    .select("*", { count: "exact", head: true });

  if (error) {
    console.error("Error fetching project count:", error);
    return 0;
  }

  return count || 0;
}

export default async function MainContent() {
  const [totalContributions, featuredProjects, totalProjectCount] =
    await Promise.all([
      getGithubContributions(),
      getFeaturedProjects(),
      getProjectCount(),
    ]);

  return (
    <main className="flex-1 p-8 overflow-y-auto">
      {/* Header "Hello" */}
      <section className="text-center mb-12">
        <div>
          <h1 className="text-5xl font-bold mb-2 text-color-primary">
            Hello 👋 I'm <span className="text-color-blue">Jose</span>
          </h1>
          <p className="text-xl font-medium text-color-primary">
            I'm a mobile application developer.
          </p>
          <Link href="/projects">
            <button className="mt-6 background-color-blue text-white py-3 px-6 rounded-lg font-medium hover:cursor-pointer">
              Explore my projects!
            </button>
          </Link>
        </div>
      </section>

      {/* Career Stats */}
      <section className="mb-12 bg-white p-5 rounded-lg border-custom-color border-[0.5px]">
        <h2 className="text-2xl font-medium mb-6 flex items-center gap-2 text-color-blue">
          <Image
            src="assets/icons/stats_icon.svg"
            alt="Career"
            width={24}
            height={24}
          />
          Career Stats
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            icon="assets/icons/star_icon.svg"
            title="Coding Exp"
            value="3 Year"
            subLabel="Coding Experience"
          />
          <StatCard
            icon="assets/icons/graduation_cap_icon.svg"
            title="Working Exp"
            value="1 Year"
            subLabel="Working Experience"
          />
          <StatCard
            icon="assets/icons/folder_icon.svg"
            title="Projects"
            value={totalProjectCount.toString()}
            subLabel="Total Projects"
          />
          <StatCard
            icon="assets/icons/clock_icon.svg"
            title="Contribution"
            value={totalContributions?.toString() || "0"}
            subLabel="On GitHub last year"
          />
        </div>
      </section>

      {/* Featured Projects */}
      <section className="p-5 rounded-lg border-custom-color border-[0.5px] bg-white overflow-x-hidden">
        <h2 className="text-2xl mb-6 flex items-center gap-2 font-medium text-color-blue">
          <Image
            src="assets/icons/thumb_icon.svg"
            alt="Career"
            width={24}
            height={24}
          />
          Featured Projects
        </h2>
        {/* Kontainer dengan horizontal scroll */}
        <div className="flex gap-6 pb-4 -mx-8 px-8 overflow-x-auto">
          {/* Loop data dari Supabase, bukan dummy data lagi */}
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
      </section>
    </main>
  );
}
