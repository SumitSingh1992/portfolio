import { motion } from "framer-motion";
import { skills } from "../data/content";

const categoryLabels: Record<string, string> = {
  languages: "Languages",
  frontend: "Frontend",
  architecture: "Architecture & Systems",
  performance: "Performance",
  testing: "Testing",
  backend: "Backend",
  devops: "DevOps & Security",
  fundamentals: "Fundamentals",
  aiTools: "AI-Assisted Engineering",
};

export default function SkillsGraph() {
  const categories = Object.entries(skills) as [keyof typeof skills, string[]][];

  return (
    <section className="px-6 sm:px-8 md:px-24 py-16 sm:py-20">
      <h3 className="text-3xl sm:text-4xl font-bold mb-2">Skills</h3>
      <p className="text-ink/50 mb-12">9+ years across the frontend stack</p>

      <div className="space-y-8">
        {categories.map(([key, items], i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="grid sm:grid-cols-[180px_1fr] gap-3 sm:gap-6 items-baseline border-b border-line pb-6"
          >
            <span className="font-mono text-xs sm:text-sm text-ink/50 uppercase tracking-wide">
              {categoryLabels[key] ?? key}
            </span>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 bg-accent-soft text-ink/80 rounded-full text-xs sm:text-sm hover:bg-accent hover:text-white transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}