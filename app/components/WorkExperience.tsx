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
    company: "ANKER Indonesia",
    location: "Jakarta",
    date: "Jun 2022 - Dec 2022",
    title: "Graphic Designer",
    description:
      "At Anker Indonesia, I create social media visuals and e-commerce designs, alongside producing video content that drives engagement.",
    dotType: "solid",
  },
];

export default function WorkExperience() {
  return (
    <section className="background-color-primary text-brand-dark-blue py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20 text-color-blue">
          <h2 className="text-4xl md:text-5xl font-bold ">
            My Work <span className="text-brand-orange">Experience</span>
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
