"use client";

// 1. Import Swiper untuk carousel
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// 2. Import ikon panah untuk navigasi
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

// 3. Import CSS untuk Swiper
import "swiper/css";
import "swiper/css/navigation";

// Data untuk skill, sesuai dengan gambar
const skillsData = [
  { name: "Mobile App Development", percentage: 90 },
  { name: "Web Development", percentage: 90 },
  { name: "Frontend", percentage: 80 },
  { name: "Backend", percentage: 70 },
];

/**
 * Komponen terpisah untuk membuat bilah kemajuan melingkar
 */
const SkillCircle = ({
  percentage,
  name,
}: {
  percentage: number;
  name: string;
}) => {
  // Pengaturan SVG
  const strokeWidth = 10;
  const radius = 52; // 52px radius + 5px (setengah stroke) = 57px
  const viewBox = 120; // Ukuran total viewBox 120x120
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative h-40 w-40">
        <svg className="h-full w-full" viewBox={`0 0 ${viewBox} ${viewBox}`}>
          {/* 1. Bagian <defs> dan <linearGradient> DIHAPUS dari sini */}

          {/* Lingkaran Latar Belakang (Track) */}
          <circle
            className="text-color-primary" // Warna track
            strokeWidth={strokeWidth}
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx={viewBox / 2}
            cy={viewBox / 2}
          />

          {/* Lingkaran Kemajuan (Progress) */}
          <circle
            // 2. Tambahkan className "text-white" untuk warna polos
            className="text-white"
            // 3. Ubah 'stroke' dari "url(#skillGradient)" menjadi "currentColor"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round" // Ujung bulat
            fill="transparent"
            r={radius}
            cx={viewBox / 2}
            cy={viewBox / 2}
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: offset,
              transform: "rotate(-90deg)",
              transformOrigin: "50% 50%",
              transition: "stroke-dashoffset 0.5s ease-out",
            }}
          />

          {/* Teks Persentase di Tengah (Tidak berubah) */}
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="text-3xl font-bold fill-white"
          >
            {percentage}%
          </text>
        </svg>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-white">{name}</h3>
    </div>
  );
};

/**
 * Komponen Utama (Menggantikan Services lama Anda)
 */
export default function Skills() {
  // Anda bisa tetap menamakannya Services jika mau
  return (
    // Latar belakang gelap sesuai gambar
    <section className="background-color-blue text-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Teks */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills</h2>
          <p className="text-lg text-white mb-16 md:mb-20">
            Skilled in mobile app development, web development, frontend
            development, and backend development.
          </p>
        </div>

        {/* Wrapper untuk Carousel + Tombol Navigasi */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1} // Tampilkan 1 di mobile
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            breakpoints={{
              // Tampilkan 2 di tablet
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              // Tampilkan 3 di desktop
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            className="pb-10!" // Beri ruang di bawah jika perlu pagination
          >
            {skillsData.map((skill) => (
              <SwiperSlide key={skill.name} className="flex justify-center">
                <SkillCircle percentage={skill.percentage} name={skill.name} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Tombol Navigasi Kustom */}
          <div className="swiper-button-prev-custom absolute top-1/2 left-0 md:-left-12 -translate-y-1/2 z-10 p-2 rounded-full cursor-pointer">
            <ChevronLeftIcon className="w-8 h-8 text-white hover:text-white transition" />
          </div>
          <div className="swiper-button-next-custom absolute top-1/2 right-0 md:-right-12 -translate-y-1/2 z-10 p-2 rounded-full cursor-pointer">
            <ChevronRightIcon className="w-8 h-8 text-white hover:text-white transition" />
          </div>
        </div>
      </div>
    </section>
  );
}
