// components/AnimatedTimelineItem.tsx
"use client"; // <-- Tandai sebagai Client Component

import { motion } from "framer-motion";
import React from "react";

// Salin interface dan komponen TimelineDot dari file asli Anda
interface ExperienceItem {
  company: string;
  location: string;
  date: string;
  title: string;
  description: string | null;
  dotType: "outline" | "solid";
}

const TimelineDot: React.FC<{ type: "outline" | "solid" }> = ({ type }) => {
  return (
    <div className="w-6 h-6 rounded-full border-2 border-brand-dark bg-white shrink-0 z-10"></div>
  );
};

// --- Props untuk komponen baru ini ---
type Props = {
  item: ExperienceItem;
  isLast: boolean; // Kita perlu tahu apakah ini item terakhir
};

export default function AnimatedTimelineItem({ item, isLast }: Props) {
  return (
    // Kita tidak perlu membungkus container grid dengan motion.
    // Kita akan menganimasikan bagian dalamnya secara individual.
    <div className="grid grid-cols-[1fr_auto_1fr] md:gap-x-12 gap-x-6 items-start">
      
      {/* Kolom Kiri: Slide from left + fade in */}
      <motion.div
        className="text-right pt-1"
        initial={{ opacity: 0, x: -30 }} // Mulai dari transparan & 30px ke kiri
        whileInView={{ opacity: 1, x: 0 }} // Selesai terlihat & di posisi normal
        viewport={{ once: true, amount: 0.5 }} // Animasi sekali saat 50% terlihat
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h3 className="text-xl md:text-2xl font-bold text-color-primary">
          {item.company}, {item.location}
        </h3>
        <p className="text-gray-500 mt-1">{item.date}</p>
      </motion.div>

      {/* Kolom Tengah: Dot pop, Line draw */}
      <div className="flex flex-col items-center h-full">
        {/* Dot: Pop in */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }} // Delay sedikit
        >
          <TimelineDot type={item.dotType} />
        </motion.div>

        {/* Line: Draw down (animating scaleY) */}
        {!isLast && (
          <motion.div
            className="w-px grow min-h-40 border-l-2 border-dashed border-gray-300 -mt-1 -mb-1"
            initial={{ scaleY: 0 }} // Mulai dari skala 0 (tak terlihat)
            whileInView={{ scaleY: 1 }} // Selesai di skala 1 (ukuran penuh)
            viewport={{ once: true }} // Mulai animasi segera saat terlihat
            transition={{ duration: 0.4, ease: "linear" }}
            style={{ transformOrigin: "top" }} // PENTING: Tumbuh dari atas
          ></motion.div>
        )}
      </div>

      {/* Kolom Kanan: Slide from right + fade in */}
      <motion.div
        className="text-left pt-1"
        initial={{ opacity: 0, x: 30 }} // Mulai dari transparan & 30px ke kanan
        whileInView={{ opacity: 1, x: 0 }} // Selesai terlihat & di posisi normal
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h3 className="text-xl md:text-2xl font-bold text-color-primary">
          {item.title}
        </h3>
        {item.description && (
          <p className="text-gray-600 mt-2">{item.description}</p>
        )}
      </motion.div>
    </div>
  );
}