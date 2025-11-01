"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  iconSrc: string;
}

type Props = {
  skill: Skill;
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

export default function SkillIcon({ skill }: Props) {
  return (
    <motion.div
      variants={iconVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex flex-col items-center justify-start text-center p-4"
    >
      <div className="relative w-16 h-16 md:w-20 md:h-20 mb-3">
        <Image
          src={skill.iconSrc}
          alt={`${skill.name} logo`}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 64px, 80px"
        />
      </div>
      <span className="text-sm md:text-base text-color-primary">
        {skill.name}
      </span>
    </motion.div>
  );
}
