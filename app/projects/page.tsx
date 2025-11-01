import Sidebar from "../components/Sidebar";
import ProjectList from "./ProjectList";
import { supabase } from "@/lib/supabaseClient";
import { Project } from "@/types";

async function getProjects(): Promise<Project[]> {
  const { data, error } = await supabase.from("projects").select("*");

  if (error) {
    console.error("Error fetching projects:", error);
    return [];
  }

  return (data as Project[]) || [];
}

export default async function Projects() {
  const projects = await getProjects();

  return (
    <div className="flex min-h-screen background-color-primary p-5 text-color-primary">
      <Sidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        <ProjectList projects={projects} />
      </main>
    </div>
  );
}
