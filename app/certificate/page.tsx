import { supabase } from "@/lib/supabaseClient";
import type { Certificate } from "@/types";
import Sidebar from "../components/Sidebar";
import CertificateCard from "../components/CertificateCard";

async function getCertificates() {
  // Ambil semua kolom, urutkan berdasarkan kapan dibuat
  const { data, error } = await supabase
    .from("certificates")
    .select("*") 
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Error fetching certificates:", error);
    return [];
  }

  return data as Certificate[];
}

export default async function Certificate() {
  const certificates = await getCertificates();

  return (
    <div className="flex min-h-screen background-color-primary p-5">
      {/* Sidebar Kiri */}
      <Sidebar />

      {/* Konten Utama (Grid Sertifikat) */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Loop data untuk membuat kartu */}
          {certificates.map((cert) => (
            <CertificateCard key={cert.id} certificate={cert} />
          ))}
        </div>
      </main>
    </div>
  );
}
