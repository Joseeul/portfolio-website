import Sidebar from "../components/Sidebar";
import CertificateCard from "../components/CertificateCard";

// Buat data dummy untuk mengisi grid (12 item seperti di gambar)
const certificates = Array(12).fill({ title: "Title" });

export default function Certificate() {
  return (
    <div className="flex min-h-screen background-color-primary p-5">
      {/* Sidebar Kiri */}
      <Sidebar />

      {/* Konten Utama (Grid Sertifikat) */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Loop data untuk membuat kartu */}
          {certificates.map((cert, index) => (
            <CertificateCard key={index} title={cert.title} />
          ))}
        </div>
      </main>
    </div>
  );
}
