import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { achievements } from "../data/content";

export default function Achievements() {
  return (
    <section className="px-6 sm:px-8 md:px-24 py-12 sm:py-16">
      <h3 className="text-3xl sm:text-4xl font-bold mb-12">Achievements</h3>
      <div className="grid sm:grid-cols-3 gap-6">
        {achievements.map((a, i) => (
          <motion.div
            key={a}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="p-6 rounded-2xl border border-line bg-white flex flex-col gap-3"
          >
            <Award className="text-accent" size={22} />
            <p className="text-sm text-ink/70">{a}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}