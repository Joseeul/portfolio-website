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
    // Responsive: p-4 di mobile, p-8 di layar medium (md) ke atas
    <main className="flex-1 p-4 md:p-8 overflow-y-auto">
      {/* Header "Hello" */}
      <section className="text-center mb-12">
        <div>
          {/* Responsive: text-3xl di mobile, sm:text-4xl, md:text-5xl di desktop */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-color-primary mt-10 sm:mt-0">
            Hello there I'm <span className="text-color-blue">Jose 👋</span>
          </h1>
          {/* Responsive: text-lg di mobile, text-xl di desktop */}
          <p className="text-lg md:text-xl font-medium text-color-primary">
            Code. Design. Deploy. Repeat.
          </p>
          <Link href="/projects">
            <button className="mt-6 background-color-blue text-white py-3 px-6 rounded-lg font-medium hover:cursor-pointer">
              Explore my projects!
            </button>
          </Link>
        </div>
      </section>

      {/* Career Stats */}
      {/* ... */}
      <section className="mb-12 bg-white p-4 md:p-5 rounded-lg border-custom-color border-[0.5px]">
        {/* ... */}
        <h2 className="text-xl md:text-2xl font-medium mb-6 flex items-center gap-2 text-color-blue">
          <Image
            src="assets/icons/stats_icon.svg"
            alt="Career"
            width={24}
            height={24}
          />
          Career Stats
        </h2>
        
        {/* TIDAK ADA PERUBAHAN DI SINI:
          Tetap "xl:grid-cols-4" sesuai permintaan Anda sebelumnya.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-4 gap-6">
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
      {/* ... */}
      <section className="p-4 md:p-5 rounded-lg border-custom-color border-[0.5px] bg-white">
        {/* ... */}
        <h2 className="text-xl md:text-2xl mb-6 flex items-center gap-2 font-medium text-color-blue">
          <Image
            src="assets/icons/thumb_icon.svg"
            alt="Career"
            width={24}
            height={24}
          />
          Featured Projects
        </h2>
        
        {/* ==================================================
          PERUBAHAN DI SINI:
          Lama: "flex flex-col gap-4 md:flex-row ... lg:flex-col lg:overflow-x-hidden lg:pb-0"
          Baru: ... (lihat di bawah)
          ==================================================
        */}
        <div className="flex flex-col gap-4 md:flex-row md:gap-6 md:overflow-x-auto md:pb-4 lg:flex-col lg:overflow-x-hidden lg:pb-0 xl:flex-row xl:overflow-x-auto xl:pb-4">
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