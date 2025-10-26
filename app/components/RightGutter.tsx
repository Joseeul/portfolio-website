// @/components/RightGutter.tsx (atau di mana pun file Anda berada)

import Image from "next/image";
// 1. IMPOR FUNGSI DAN TIPE DARI lib/github
import { getRecentActivity, type ActivityItem } from "@/lib/github";

const SkillTag = ({ label }: { label: string }) => (
  <span className="bg-gray-100 text-xs font-medium px-3 py-1 rounded-full font-gabarito text-color-primary">
    {label}
  </span>
);

// 2. TAMBAHKAN FUNGSI HELPER UNTUK FORMAT TANGGAL
// (Anda bisa pindahkan ini ke file utils jika mau)
function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Bulan dimulai dari 0
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

// 3. UBAH FUNGSI KOMPONEN MENJADI "ASYNC"
export default async function RightGutter() {
  const recentActivity = await getRecentActivity();
  const GITHUB_USERNAME = process.env.GITHUB_USERNAME || "YourUser";
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

        {/* --- GANTI BAGIAN UL INI --- */}
        <ul className="space-y-6 max-h-80 overflow-y-auto">
          {recentActivity && recentActivity.length > 0 ? (
            recentActivity.map((activity) => (
              <li
                key={activity.id}
                className="relative pl-8 
                 before:content-[''] before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:bg-gray-500 before:rounded-full
                 after:content-[''] after:absolute after:left-3.5 after:top-4 after:bottom-0 after:w-[1px] after:bg-gray-300
                 last:after:hidden"
              >
                <span className="block text-xs text-gray-500">
                  at {formatDate(activity.date)}
                </span>

                {/* Gunakan komponen helper kita */}
                <p className="text-sm text-gray-800">
                  <ActivityText
                    activity={activity}
                    username={GITHUB_USERNAME}
                  />
                </p>
              </li>
            ))
          ) : (
            // Tampilan jika tidak ada aktivitas
            <li className="relative pl-8">
              <span className="block text-sm text-gray-500">
                No activity found.
              </span>
            </li>
          )}
        </ul>
      </section>
    </aside>
  );
}
