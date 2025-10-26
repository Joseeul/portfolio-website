import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import RightGutter from "./components/RightGutter";

export default function Home() {
  return (
    <div className="flex min-h-screen background-color-primary p-5">
      {/* Sidebar Kiri */}
      <Sidebar />

      {/* Konten Utama (Tengah) */}
      <MainContent />

      {/* Gutter Kanan */}
      <RightGutter />
    </div>
  );
}
