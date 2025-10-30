// components/AboutMe.tsx
import React from 'react';

export default function AboutMe() {
  return (
    // Section utama dengan background gelap dan posisi relatif
    <section className="bg-gray-500 text-white py-24 sm:py-32 relative overflow-hidden">
      
      {/* Kontainer untuk konten agar tidak terlalu lebar dan punya z-index di atas lingkaran */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Judul */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          About Me
        </h2>

        {/* Paragraf Deskripsi */}
        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-20">
          I'm Sara Jones, a UI/UX designer dedicated to crafting intuitive and visually stunning digital
          experiences. With a passion for user-centric design, I transform ideas into functional and
          beautiful interfaces. Let's collaborate and shape the future of design together.
        </p>

        {/* Grid untuk Statistik */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Stat 1: Projects Done */}
          <div className="text-center">
            <span className="block text-6xl lg:text-7xl font-bold text-brand-light">
              502
            </span>
            <span className="block text-lg text-gray-400 mt-2">
              Projects Done
            </span>
          </div>

          {/* Stat 2: Years of Experience */}
          <div className="text-center">
            <span className="block text-6xl lg:text-7xl font-bold text-brand-light">
              10+
            </span>
            <span className="block text-lg text-gray-400 mt-2">
              Years of Experience
            </span>
          </div>

          {/* Stat 3: Clients Served */}
          <div className="text-center">
            <span className="block text-6xl lg:text-7xl font-bold text-brand-light">
              273+
            </span>
            <span className="block text-lg text-gray-400 mt-2">
              Clients Served
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