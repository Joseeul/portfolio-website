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
    date: "Aug 2023 - present",
    title: "Mobile Application & Technology",
    description:
      "I am currently a fifth-semester student at Bina Nusantara University, majoring in Mobile Application & Technology. Beyond developing mobile apps, I also build websites and work across both frontend and backend development.",
    dotType: "solid",
  },
  {
    company: "SMK Santa Maria",
    location: "Jakarta",
    date: "Jul 2020 - Apr 2023",
    title: "Multimedia",
    description:
      "I create visual communication designs, including posters, animations, and short films. In addition, I’m also learning programming languages to expand my creative and technical capabilities.",
    dotType: "outline",
  },
];

export default function EducationHistory() {
  return (
    <section className="text-brand-dark-blue py-24 sm:py-32 background-color-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20 text-color-blue">
          <h2 className="text-4xl md:text-5xl font-bold">
            My Education <span className="text-brand-orange">History</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative space-y-0">
            {experienceData.map((item, index) => (
              <AnimatedTimelineItem
                key={item.company}
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
