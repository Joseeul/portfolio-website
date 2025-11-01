"use client";

import { motion } from "framer-motion";
import React from "react";

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

type Props = {
  item: ExperienceItem;
  isLast: boolean;
};

export default function AnimatedTimelineItem({ item, isLast }: Props) {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] md:gap-x-12 gap-x-6 items-start">
      <motion.div
        className="text-right pt-1"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h3 className="text-xl md:text-2xl font-bold text-color-primary">
          {item.company}, {item.location}
        </h3>
        <p className="text-gray-500 mt-1">{item.date}</p>
      </motion.div>

      <div className="flex flex-col items-center h-full">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }}
        >
          <TimelineDot type={item.dotType} />
        </motion.div>

        {!isLast && (
          <motion.div
            className="w-px grow min-h-40 border-l-2 border-dashed border-gray-300 -mt-1 -mb-1"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "linear" }}
            style={{ transformOrigin: "top" }}
          ></motion.div>
        )}
      </div>

      <motion.div
        className="text-left pt-1"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
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
