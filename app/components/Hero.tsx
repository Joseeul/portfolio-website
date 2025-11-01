// components/Hero.tsx
"use client"; // <-- Tambahkan ini

import Link from "next/link";
import { motion } from "framer-motion"; // <-- Impor motion

export default function Hero() {
  // Varian untuk container (parent) yang akan mengatur "stagger"
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Jeda 0.2 detik antar-elemen
      },
    },
  };

  // Varian untuk item (children)
  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // Mulai dari 20px ke bawah & transparan
    visible: { opacity: 1, y: 0 }, // Selesai di posisi 0 (normal) & terlihat
  };

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 background-color-primary">
      <div className="flex items-center justify-center min-h-[500px] md:min-h-[600px]">
        {/* Bungkus dengan 'motion.div' dan terapkan varian container
        */}
        <motion.div
          className="space-y-6 z-40 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Terapkan 'itemVariants' ke setiap elemen di dalamnya */}
          <motion.span
            className="text-lg font-medium text-color-primary"
            variants={itemVariants}
          >
            Mobile/Web Application Developer
          </motion.span>

          <motion.h1
            className="text-5xl md:text-6xl font-bold text-color-primary leading-tight"
            variants={itemVariants}
          >
            Hi There, I'm
            <span className="text-color-blue"> Jose 👋</span>
          </motion.h1>

          <motion.p
            className="text-lg text-color-primary max-w-md mx-auto"
            variants={itemVariants}
          >
            Hi there! I'm a mobile/web developer passionate about building
            intuitive digital journeys. Let’s create something amazing together!
          </motion.p>

          <motion.div
            className="flex justify-center space-x-4 pt-4"
            variants={itemVariants}
          >
            <Link
              href="/projects"
              className="background-color-blue text-white border border-custom-color px-8 py-3 rounded-md font-medium"
            >
              Explore my projects
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}