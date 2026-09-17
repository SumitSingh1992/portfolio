import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
// import projectImg1 from "../assets/medflow-screenshot.jpg"; // add once you have a real screenshot

const projects = [
  {
    title: "MedFlow",
    desc: "Full-stack healthcare imaging platform for patient registration, medical study management, and radiology workflows. Role-based access for patients, technicians, radiologists, and doctors. In active development.",
    stack: ["Angular", "TypeScript", "NestJS", "PostgreSQL", "Docker"],
    link: "https://github.com/SumitSingh1992/medflow",
    status: "In development",
    image: undefined, // swap in a real screenshot import here when ready
  },
];

export default function Projects() {
  return (
    <section className="px-8 md:px-24 py-16 sm:py-20">
      <h2 className="font-mono text-sm text-accent mb-2">03 / work</h2>
      <h3 className="text-4xl font-bold mb-16">Projects</h3>

      <div className="grid md:grid-cols-2 gap-px bg-line">
        {projects.map((p) => (
          <motion.a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            key={p.title}
            className="group relative overflow-hidden bg-paper"
          >
            {p.image ? (
              <div className="aspect-video overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ) : (
              <div className="aspect-video flex items-center justify-center bg-accent/5 border-b border-line">
                <span className="font-mono text-xs text-ink/40">{p.status ?? "Preview coming soon"}</span>
              </div>
            )}
            <div className="p-8">
              <h4 className="text-2xl font-semibold flex items-center gap-2">
                {p.title}
                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
              </h4>
              <p className="mt-3 text-ink/70">{p.desc}</p>
              <div className="flex gap-2 mt-4 font-mono text-xs text-ink/50">
                {p.stack.join(" · ")}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
