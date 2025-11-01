import { getGithubContributions } from "@/lib/github";
import { supabase } from "@/lib/supabaseClient";
import AnimatedCounter from "./AnimatedCounter";

async function getProjectCount(): Promise<number> {
  const { count, error } = await supabase
    .from("projects")
    .select("*", { count: "exact", head: true });

  if (error) {
    console.error("Error fetching project count:", error);
    return 0;
  }

  return count || 0;
}

export default async function AboutMe() {
  const [totalContributions, totalProjectCount] = await Promise.all([
    getGithubContributions(),
    getProjectCount(),
  ]);

  const classNameUntukAngka = "block text-6xl lg:text-7xl font-bold text-white";

  return (
    <section className="background-color-blue text-white py-24 sm:py-32 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          About Me
        </h2>

        <p className="text-lg text-white text-center max-w-3xl mx-auto mb-20">
          I am currently a fifth-semester student at Bina Nusantara University,
          majoring in Mobile Application & Technology. Beyond developing mobile
          apps, I also build websites and work across both frontend and backend
          development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <AnimatedCounter
              toValue={totalProjectCount}
              className={classNameUntukAngka}
            />
            <span className="block text-lg text-white mt-2">
              Total Projects
            </span>
          </div>

          <div className="text-center">
            <AnimatedCounter toValue={3} className={classNameUntukAngka} />
            <span className="block text-lg text-white mt-2">
              Years of Experience
            </span>
          </div>

          <div className="text-center">
            <AnimatedCounter
              toValue={totalContributions || 0}
              className={classNameUntukAngka}
            />
            <span className="block text-lg text-white mt-2">
              GitHub Contribution
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
