// components/Hero.tsx
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 background-color-primary">
      {/* Container diubah dari 'grid' menjadi 'flex' 
        untuk memusatkan satu-satunya kolom konten (teks) 
        Tambahkan min-h-[500px] atau tinggi spesifik jika Anda ingin
        area 'hero' ini lebih tinggi.
      */}
      <div className="flex items-center justify-center min-h-[500px] md:min-h-[600px]">
        {/* Kolom Teks: Ditambahkan 'text-center' */}
        <div className="space-y-6 z-40 text-center">
          <span className="text-lg font-medium text-color-primary">
            Mobile/Web Application Developer
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-color-primary leading-tight">
            Hi There, I'm 
            <span className="text-color-blue"> Jose 👋</span>
          </h1>
          <p className="text-lg text-color-primary max-w-md mx-auto">
            {/* Tambahkan mx-auto agar 'max-w-md' tetap center */}
            Hi there! I'm a mobile/web developer passionate about building
            intuitive digital journeys. Let’s create something amazing together!
          </p>
          {/* Tombol Aksi: Ditambahkan 'justify-center' */}
          <div className="flex justify-center space-x-4 pt-4">
            <Link
              href="/projects"
              className="background-color-blue text-white border border-custom-color px-8 py-3 rounded-md font-medium"
            >
              Explore my projects
            </Link>
          </div>
        </div>

        {/* Kolom Kanan (Gambar & Grafis) TELAH DIHAPUS */}
      </div>
    </section>
  );
}
