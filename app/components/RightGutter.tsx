import { WrenchScrewdriverIcon, ClockIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const SkillTag = ({ label }: { label: string }) => (
  <span className="bg-gray-100 text-xs font-medium px-3 py-1 rounded-full font-gabarito text-color-primary">
    {label}
  </span>
);

export default function RightGutter() {
  return (
    <aside className="w-80 flex-shrink-0 bg-white border rounded-lg border-custom-color border-[0.5px] p-6 hidden lg:block overflow-y-auto">
      {/* Skill Sets */}
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

        {/* Mobile App Development */}
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

        {/* Web Development */}
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

        {/* Backend Development */}
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

        {/* Frameworks & Libraries */}
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

      {/* Recent Activity */}
      {/* Recent Activity */}
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
          <li
            className="relative pl-8 
                 before:content-[''] before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:bg-gray-500 before:rounded-full
                 after:content-[''] after:absolute after:left-3.5 after:top-4 after:bottom-0 after:w-[1px] after:bg-gray-300
                 last:after:hidden"
          >
            <span className="block text-xs text-gray-500">at dd-mm-yyyy</span>
            {/* Pesan utama */}
            <p className="text-sm text-gray-800">
              <strong className="font-semibold">Joseeul</strong> has committed:
              [message] in [repo].
            </p>
          </li>

          {/* Item 2 */}
          <li
            className="relative pl-8 
                 before:content-[''] before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:bg-gray-500 before:rounded-full
                 after:content-[''] after:absolute after:left-3.5 after:top-4 after:bottom-0 after:w-[1px] after:bg-gray-300
                 last:after:hidden"
          >
            <span className="block text-xs text-gray-500">at dd-mm-yyyy</span>
            <p className="text-sm text-gray-800">
              <strong className="font-semibold">Joseeul</strong> has committed:
              [message] in [repo].
            </p>
          </li>

          {/* Item 3 */}
          <li
            className="relative pl-8 
                 before:content-[''] before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:bg-gray-500 before:rounded-full
                 after:content-[''] after:absolute after:left-3.5 after:top-4 after:bottom-0 after:w-[1px] after:bg-gray-300
                 last:after:hidden"
          >
            <span className="block text-xs text-gray-500">at dd-mm-yyyy</span>
            <p className="text-sm text-gray-800">
              <strong className="font-semibold">Joseeul</strong> has committed:
              [message] in [repo].
            </p>
          </li>

          {/* Item 4 */}
          <li
            className="relative pl-8 
                 before:content-[''] before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:bg-gray-500 before:rounded-full
                 after:content-[''] after:absolute after:left-3.5 after:top-4 after:bottom-0 after:w-[1px] after:bg-gray-300
                 last:after:hidden"
          >
            <span className="block text-xs text-gray-500">at dd-mm-yyyy</span>
            <p className="text-sm text-gray-800">
              <strong className="font-semibold">Joseeul</strong> has committed:
              [message] in [repo].
            </p>
          </li>

          {/* Item 5 */}
          <li
            className="relative pl-8 
                 before:content-[''] before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:bg-gray-500 before:rounded-full
                 after:content-[''] after:absolute after:left-3.5 after:top-4 after:bottom-0 after:w-[1px] after:bg-gray-300
                 last:after:hidden"
          >
            <span className="block text-xs text-gray-500">at dd-mm-yyyy</span>
            <p className="text-sm text-gray-800">
              <strong className="font-semibold">Joseeul</strong> has committed:
              [message] in [repo].
            </p>
          </li>

          {/* Item 6 */}
          <li
            className="relative pl-8 
                 before:content-[''] before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:bg-gray-500 before:rounded-full
                 after:content-[''] after:absolute after:left-3.5 after:top-4 after:bottom-0 after:w-[1px] after:bg-gray-300
                 last:after:hidden"
          >
            <span className="block text-xs text-gray-500">at dd-mm-yyyy</span>
            <p className="text-sm text-gray-800">
              <strong className="font-semibold">Joseeul</strong> has committed:
              [message] in [repo].
            </p>
          </li>

          {/* Item 7 */}
          <li
            className="relative pl-8 
                 before:content-[''] before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:bg-gray-500 before:rounded-full
                 after:content-[''] after:absolute after:left-3.5 after:top-4 after:bottom-0 after:w-[1px] after:bg-gray-300
                 last:after:hidden"
          >
            <span className="block text-xs text-gray-500">at dd-mm-yyyy</span>
            <p className="text-sm text-gray-800">
              <strong className="font-semibold">Joseeul</strong> has committed:
              [message] in [repo].
            </p>
          </li>
        </ul>
      </section>
    </aside>
  );
}
