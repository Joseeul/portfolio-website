import { getGithubContributions } from "@/lib/github"; 
import { supabase } from "@/lib/supabaseClient"

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

export default async function AboutMe() {
  const [totalContributions, totalProjectCount] = await Promise.all([
    getGithubContributions(),
    getProjectCount(),
  ]);

  return (
    // Section utama dengan background gelap dan posisi relatif
    <section className="background-color-blue text-white py-24 sm:py-32 relative overflow-hidden">
      {/* Kontainer untuk konten agar tidak terlalu lebar dan punya z-index di atas lingkaran */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          About Me
        </h2>

        {/* Paragraf Deskripsi */}
        <p className="text-lg text-white text-center max-w-3xl mx-auto mb-20">
          I am currently a fifth-semester student at Bina Nusantara University,
          majoring in Mobile Application & Technology. Beyond developing mobile
          apps, I also build websites and work across both frontend and backend
          development.
        </p>

        {/* Grid untuk Statistik */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Stat 1: Projects Done */}
          <div className="text-center">
            <span className="block text-6xl lg:text-7xl font-bold text-white">
              {totalProjectCount}
            </span>
            <span className="block text-lg text-white mt-2">Total Projects</span>
          </div>

          {/* Stat 2: Years of Experience */}
          <div className="text-center">
            <span className="block text-6xl lg:text-7xl font-bold text-white">
              3
            </span>
            <span className="block text-lg text-white mt-2">
              Years of Experience
            </span>
          </div>

          {/* Stat 3: Clients Served */}
          <div className="text-center">
            <span className="block text-6xl lg:text-7xl font-bold text-white">
              {totalContributions?.toString() || "0"}
            </span>
            <span className="block text-lg text-white mt-2">
              GitHub Contribution
            </span>
          </div>
        </div>
      </div>

      {/* Lingkaran Merah Dekoratif (di belakang konten) */}
      <div
        className="absolute w-80 h-80 md:w-96 md:h-96 bg-brand-red rounded-full left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2"
        aria-hidden="true"
      ></div>
    </section>
  );
}
