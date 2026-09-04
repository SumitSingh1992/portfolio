import { motion } from "framer-motion";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <section className="px-8 md:px-24 py-16 sm:py-20">
      <h2 className="font-mono text-sm text-accent mb-2">02 / history</h2>
      <h3 className="text-4xl font-bold mb-16">Experience</h3>

      <div className="relative border-l border-line pl-10 space-y-16">
        {experience.map((role, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <span className="absolute -left-[45px] top-1 w-3 h-3 rounded-full bg-paper border-2 border-accent" />
            <span className="font-mono text-sm text-ink/50">{role.year}</span>
            <h4 className="text-2xl font-semibold mt-1">{role.role}</h4>
            <p className="text-accent text-sm mt-0.5">{role.company}</p>
            <p className="mt-3 text-ink/70 max-w-xl">{role.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}