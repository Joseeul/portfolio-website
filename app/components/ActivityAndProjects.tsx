// components/WorkExperience.tsx
import React from "react";
import AnimatedTimelineItem from "./AnimatedTimelineItem";

interface ExperienceItem {
  company: string;
  location: string;
  date: string;
  title: string;
  description: string | null;
  dotType: "outline" | "solid";
}

const experienceData: ExperienceItem[] = [
  {
    company: "Bina Nusantara University",
    location: "Jakarta",
    date: "Sep 2024 - Jul 2025",
    title: "Freshmen Partner",
    description:
      "I support new students throughout their first two semesters, helping them adapt to campus life and academic responsibilities.",
    dotType: "solid",
  },
  {
    company: "Bina Nusantara University",
    location: "Jakarta",
    date: "Jul 2024 - Sep 2024",
    title: "Freshmen Leader",
    description:
      "I assist new students in familiarizing themselves with the campus environment and understanding the academic programs offered.",
    dotType: "solid",
  },
  {
    company: "Bina Nusantara University",
    location: "Jakarta",
    date: "Feb 2023 - Feb 2024",
    title: "Activist at Keluarga Mahasiswa Katolik (KMK)",
    description:
      "I contribute as a logistics volunteer, assisting with equipment and operational needs.",
    dotType: "solid",
  },
];

export default function ActivityAndProjects() {
  return (
    // Section dengan background putih
    <section className="background-color-primary text-brand-dark-blue py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul Section */}
        <div className="text-center mb-16 md:mb-20 text-color-blue">
          <h2 className="text-4xl md:text-5xl font-bold ">
            My Activities and{" "}
            <span className="text-brand-orange">Projects</span>
          </h2>
        </div>

        {/* Kontainer Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative space-y-0">
            {experienceData.map((item, index) => (
              <AnimatedTimelineItem
                key={item.title}
                item={item}
                isLast={index === experienceData.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
