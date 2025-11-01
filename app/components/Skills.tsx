import React from "react";
import Image from "next/image";
import SkillIcon from "./SkillIcon";

interface Skill {
  name: string;
  iconSrc: string;
}

const skillCategories = [
  {
    title: "Mobile App Development",
    skills: [
      {
        name: "React Native",
        iconSrc: "assets/icons/iconSkills/react_native.svg",
      },
      {
        name: "Flutter",
        iconSrc: "assets/icons/iconSkills/flutter_logo.svg",
      },
      {
        name: "Swift",
        iconSrc: "assets/icons/iconSkills/swift_logo.svg",
      },
      {
        name: "Android",
        iconSrc: "assets/icons/iconSkills/android_logo.svg",
      },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "ReactJS", iconSrc: "assets/icons/iconSkills/react_logo.svg" },
      { name: "HTML", iconSrc: "assets/icons/iconSkills/html_logo.svg" },
      { name: "CSS", iconSrc: "assets/icons/iconSkills/css_logo.svg" },
      { name: "Javascript", iconSrc: "assets/icons/iconSkills/js_logo.svg" },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      {
        name: "Firebase",
        iconSrc: "assets/icons/iconSkills/firebase_logo.svg",
      },
      {
        name: "Supabase",
        iconSrc: "assets/icons/iconSkills/supabase_logo.svg",
      },
      { name: "Appwrite", iconSrc: "assets/icons/iconSkills/aw_logo.svg" },
      { name: "MongoDB", iconSrc: "assets/icons/iconSkills/mdb_logo.svg" },
      {
        name: "PostgreSQL",
        iconSrc: "assets/icons/iconSkills/postgre_logo.svg",
      },
      {
        name: "MySQL",
        iconSrc: "assets/icons/iconSkills/msql_logo.svg",
      },
    ],
  },
  {
    title: "Frameworks & Library",
    skills: [
      { name: "React", iconSrc: "assets/icons/iconSkills/react_logo.svg" },
      { name: "Next.js", iconSrc: "assets/icons/iconSkills/nextjs_logo.svg" },
      {
        name: "Express.js",
        iconSrc: "assets/icons/iconSkills/express_logo.svg",
      },
      { name: "Node.js", iconSrc: "assets/icons/iconSkills/njs_logo.svg" },
      {
        name: "Tailwind CSS",
        iconSrc: "assets/icons/iconSkills/tailwind_logo.svg",
      },
      {
        name: "Bootstrap",
        iconSrc: "assets/icons/iconSkills/bootstrap_logo.svg",
      },
    ],
  },
];

export default function Skills() {
  return (
    <section className="background-color-primary py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <p className="text-xl md:text-2xl text-color-primary">
            The skills, tools and technologies I am really good at:
          </p>
        </div>

        <div className="space-y-16">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-2xl md:text-3xl font-semibold text-color-blue mb-8 text-center">
                {category.title}
              </h3>

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
