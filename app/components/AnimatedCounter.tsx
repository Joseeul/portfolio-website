// components/AnimatedCounter.tsx
"use client"; // <-- Ini adalah kuncinya!

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

type Props = {
  toValue: number;
  className?: string; // Untuk meneruskan className dari parent
};

export default function AnimatedCounter({ toValue, className }: Props) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  
  // 'once: true' berarti animasi hanya berjalan sekali saat terlihat
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    // Hanya jalankan animasi jika komponen terlihat
    if (isInView) {
      const controls = animate(count, toValue, {
        duration: 2, // Durasi animasi 2 detik
        ease: "easeOut", // Efek 'melambat' di akhir
      });
      
      // Cleanup function saat komponen unmount
      return () => controls.stop();
    }
  }, [isInView, toValue, count]);

  return (
    <motion.span
      ref={ref} // Kaitkan ref untuk dideteksi oleh useInView
      className={className}
    >
      {rounded}
    </motion.span>
  );
}