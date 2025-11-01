"use client";

import { useState } from "react";
import Image from "next/image";
import { type ActivityItem } from "@/lib/github";

const SkillTag = ({ label }: { label: string }) => (
  <span className="bg-gray-100 text-xs font-medium px-3 py-1 rounded-full font-gabarito text-color-primary">
    {label}
  </span>
);

function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

const ActivityText = ({
  activity,
  username,
}: {
  activity: ActivityItem;
  username: string;
}) => {
  const repoLink = (
    <a
      href={`https://github.com/${activity.repoName}`}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-color-blue hover:underline"
    >
      {activity.repoName}
    </a>
  );

  switch (activity.type) {
    case "COMMIT":
      return (
        <>
          <strong className="font-semibold">{username}</strong> has committed: "
          {activity.text}" in {repoLink}.
        </>
      );
    case "PR_OPEN":
      return (
        <>
          <strong className="font-semibold">{username}</strong> opened a pull
          request: "{activity.text}" in {repoLink}.
        </>
      );
    case "PR_MERGE":
      return (
        <>
          <strong className="font-semibold">{username}</strong> merged a pull
          request: "{activity.text}" in {repoLink}.
        </>
      );
    default:
      return null;
  }
};

interface RightGutterClientProps {
  recentActivity: ActivityItem[] | null;
  username: string;
}

export default function RightGutterClient({
  recentActivity,
  username,
}: RightGutterClientProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuContent = (
    <div className="border-custom-color">
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 font-gabarito text-color-blue">
          <Image
            src="assets/icons/triangle_icon.svg"
            alt="Career"
            width={24}
            height={24}
          />
          Skill Sets
        </h2>

        <div className="mb-4">
          <h3 className="text-sm font-semibold text-color-primary mb-3">
            Mobile App Development
          </h3>
          <div className="flex flex-wrap gap-2">
            {["React Native", "Flutter", "Swift (IOS)", "Android"].map(
              (skill) => (
                <SkillTag key={skill} label={skill} />
              )
            )}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-sm font-semibold text-color-primary mb-3">
            Web Development
          </h3>
          <div className="flex flex-wrap gap-2">
            {["ReactJS", "HTML", "CSS", "JavaScript"].map((skill) => (
              <SkillTag key={skill} label={skill} />
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-sm font-semibold text-color-primary mb-3">
            Backend Development
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Firebase",
              "Supabase",
              "Appwrite Database",
              "MongoDB",
              "PostgreSQL",
              "MySQL",
            ].map((skill) => (
              <SkillTag key={skill} label={skill} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-color-primary mb-3">
            Frameworks & Libraries
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Next.js",
              "React",
              "Node.js",
              "Express.js",
              "Tailwind CSS",
              "Bootstrap",
            ].map((skill) => (
              <SkillTag key={skill} label={skill} />
            ))}
          </div>
        </div>
      </section>

      <hr className="my-6 border-gray-200" />

      <section>
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-color-blue">
          <Image
            src="assets/icons/clock_2_icon.svg"
            alt="Career"
            width={24}
            height={24}
          />
          Recent Activity
        </h2>

        <ul className="space-y-6 max-h-80 overflow-y-auto">
          {recentActivity && recentActivity.length > 0 ? (
            recentActivity.map((activity) => (
              <li
                key={activity.id}
                className="relative pl-8 
                 before:content-[''] before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:bg-gray-500 before:rounded-full
                 after:content-[''] after:absolute after:left-3.5 after:top-4 after:bottom-0 after:w-px after:bg-gray-300
                 last:after:hidden"
              >
                <span className="block text-xs text-gray-500">
                  at {formatDate(activity.date)}
                </span>
                <p className="text-sm text-gray-800">
                  <ActivityText activity={activity} username={username} />
                </p>
              </li>
            ))
          ) : (
            <li className="relative pl-8">
              <span className="block text-sm text-gray-500">
                No activity found.
              </span>
            </li>
          )}
        </ul>
      </section>
    </div>
  );

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-5 right-5 z-50 p-2 bg-white rounded-full shadow-lg text-color-primary"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="lg:hidden fixed inset-0 bg-black/30 z-30"
          aria-hidden="true"
        />
      )}

      <aside
        className={`
          
          fixed top-0 right-0 h-full w-80 bg-white p-6 overflow-y-auto z-40
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}

          
          lg:translate-x-0 lg:static lg:h-auto lg:w-80 lg:shrink-0
           lg:rounded-lg lg:border-custom-color lg:border-[0.5px] lg:p-6 lg:block lg:overflow-y-auto border-custom-color
        `}
      >
        {menuContent}
      </aside>
    </>
  );
}
