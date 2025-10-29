import Sidebar from "../components/Sidebar";
import ProjectList from "./ProjectList"; 
import { supabase } from "@/lib/supabaseClient"; 
import { Project } from "@/types"; 

// Data dummy untuk mengisi grid, sesuai gambar Anda
async function getProjects(): Promise<Project[]> {
  // Ganti 'projects' dengan nama tabel Anda di Supabase
  const { data, error } = await supabase.from("projects").select("*");

  if (error) {
    console.error("Error fetching projects:", error);
    return [];
  }

  // Supabase mungkin mengembalikan null jika tabel kosong
  return (data as Project[]) || [];
}

export default async function Projects() {
  // Panggil fungsi fetch data
  const projects = await getProjects();

  return (
    <div className="flex min-h-screen background-color-primary p-5 text-color-primary">
      {/* Sidebar Kiri */}
      <Sidebar />

      {/* Konten Utama (Main Content) */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Render komponen Client (ProjectList) 
          dan teruskan data 'projects' sebagai prop.
        */}
        <ProjectList projects={projects} />
      </main>
    </div>
  );
}