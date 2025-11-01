"use client";

// 1. Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// 2. Import ikon
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

// 3. Import CSS Swiper
import "swiper/css";
import "swiper/css/navigation";

// --- TAMBAHAN: Import hook dari Framer Motion ---
import {
  motion,
  useMotionValue,
  useTransform,
  useInView,
  animate,
} from "framer-motion";
import { useEffect, useRef } from "react";
// --- AKHIR TAMBAHAN ---

// Data (tidak berubah)
const skillsData = [
  { name: "Mobile App Development", percentage: 90 },
  { name: "Web Development", percentage: 90 },
  { name: "Frontend", percentage: 80 },
  { name: "Backend", percentage: 70 },
];

/**
 * Komponen SkillCircle (Sudah Dimodifikasi)
 */
const SkillCircle = ({
  percentage,
  name,
}: {
  percentage: number;
  name: string;
}) => {
  // Pengaturan SVG (tidak berubah)
  const strokeWidth = 10;
  const radius = 52;
  const viewBox = 120;
  const circumference = 2 * Math.PI * radius;

  // --- TAMBAHAN: Setup animasi ---
  // 1. Ref untuk mendeteksi 'in view'
  const ref = useRef(null);
  // 2. 'once: true' agar animasi hanya jalan sekali
  const isInView = useInView(ref, { once: true });

  // 3. 'motionValue' yang akan kita animasikan dari 0 ke 'percentage'
  const animatedPercentage = useMotionValue(0);

  // 4. Transformasi untuk 'strokeDashoffset' (untuk lingkaran)
  const animatedOffset = useTransform(animatedPercentage, (value) => {
    return circumference - (value / 100) * circumference;
  });

  // 5. Transformasi untuk Teks (dibulatkan)
  const roundedPercentage = useTransform(animatedPercentage, (value) => {
    return `${Math.round(value)}%`;
  });

  // 6. 'useEffect' untuk memicu animasi saat terlihat
  useEffect(() => {
    if (isInView) {
      animate(animatedPercentage, percentage, {
        duration: 1.5, // Durasi animasi 1.5 detik
        ease: "easeOut",
      });
    }
  }, [isInView, percentage, animatedPercentage]);
  // --- AKHIR TAMBAHAN ---

  return (
    // <-- Tambahkan 'ref' di sini
    <div className="flex flex-col items-center text-center" ref={ref}>
      <div className="relative h-40 w-40">
        <svg className="h-full w-full" viewBox={`0 0 ${viewBox} ${viewBox}`}>
          {/* Lingkaran Latar Belakang (tidak berubah) */}
          <circle
            className="text-color-primary"
            strokeWidth={strokeWidth}
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx={viewBox / 2}
            cy={viewBox / 2}
          />

          {/* <-- Ubah 'circle' menjadi 'motion.circle' */}
          <motion.circle
            className="text-white"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            fill="transparent"
            r={radius}
            cx={viewBox / 2}
            cy={viewBox / 2}
            style={{
              strokeDasharray: circumference,
              // <-- Gunakan 'animatedOffset' dari useTransform
              strokeDashoffset: animatedOffset,
              transform: "rotate(-90deg)",
              transformOrigin: "50% 50%",
              // <-- Hapus transisi CSS, Framer Motion yg atur
            }}
          />

          {/* <-- Ubah 'text' menjadi 'motion.text' */}
          <motion.text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="text-3xl font-bold fill-white"
          >
            {/* <-- Gunakan 'roundedPercentage' dari useTransform */}
            {roundedPercentage}
          </motion.text>
        </svg>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-white">{name}</h3>
    </div>
  );
};

/**
 * Komponen Utama (Tidak ada perubahan di sini)
 */
export default function Skills() {
  return (
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
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            className="pb-10!"
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