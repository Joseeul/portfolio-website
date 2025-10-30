// components/Skills.tsx
import React from "react";
import Image from "next/image";

// Tipe data untuk setiap skill
interface Skill {
  name: string;
  iconSrc: string;
}

// Data kategori skill
const skillCategories = [
  {
    title: "Web Development",
    skills: [
      { name: "Javascript", iconSrc: "/assets/icons/code_icon.svg" },
      { name: "Typescript", iconSrc: "/assets/icons/code_icon.svg" },
      { name: "Sass/Scss", iconSrc: "/assets/icons/code_icon.svg" },
      { name: "Tailwindcss", iconSrc: "/assets/icons/code_icon.svg" },
      { name: "Figma", iconSrc: "/assets/icons/code_icon.svg" },
    ],
  },
  {
    title: "Frameworks & Library",
    skills: [
      { name: "React", iconSrc: "/assets/icons/code_icon.svg" },
      { name: "Next.js", iconSrc: "/assets/icons/code_icon.svg" },
      { name: "Express.js", iconSrc: "/assets/icons/code_icon.svg" },
      { name: "Nest.js", iconSrc: "/assets/icons/code_icon.svg" },
      { name: "Storybook", iconSrc: "/assets/icons/code_icon.svg" },
      { name: "Cypress", iconSrc: "/assets/icons/code_icon.svg" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", iconSrc: "/assets/icons/code_icon.svg" },
      { name: "Socket.io", iconSrc: "/assets/icons/code_icon.svg" },
      { name: "PostgreSQL", iconSrc: "/assets/icons/code_icon.svg" },
      { name: "MongoDB", iconSrc: "/assets/icons/code_icon.svg" },
      { name: "Git", iconSrc: "/assets/icons/code_icon.svg" },
    ],
  },
  {
    title: "Mobile App Development",
    skills: [
      { name: "React (Native)", iconSrc: "/assets/icons/code_icon.svg" },
    ],
  },
];

// Komponen helper untuk merender setiap ikon
const SkillIcon: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="flex flex-col items-center justify-start text-center p-4">
    <div className="relative w-16 h-16 md:w-20 md:h-20 mb-3">
      <Image
        src={skill.iconSrc}
        alt={`${skill.name} logo`}
        fill
        className="object-contain" // 'object-contain' agar logo tidak gepeng
        sizes="(max-width: 768px) 64px, 80px"
      />
    </div>
    <span className="text-sm md:text-base text-gray-700">{skill.name}</span>
  </div>
);

// Komponen Utama
export default function Skills() {
  return (
    <section className="bg-white text-brand-dark py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <p className="text-xl md:text-2xl text-gray-600">
            The skills, tools and technologies I am really good at:
          </p>
        </div>

        <div className="space-y-16">
          {skillCategories.map((category) => (
            <div key={category.title}>
              {/* --- PERUBAHAN DI SINI --- */}
              {/* Menghapus 'md:text-left' agar selalu rata tengah */}
              <h3 className="text-2xl md:text-3xl font-semibold text-brand-dark mb-8 text-center">
                {category.title}
              </h3>

              {/* --- PERUBAHAN DI SINI --- */}
              {/* Mengganti 'grid' dengan 'flex flex-wrap justify-center' */}
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-8">
                {category.skills.map((skill) => (
                  <SkillIcon key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}