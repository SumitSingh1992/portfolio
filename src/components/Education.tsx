import { education } from "../data/content";

export default function Education() {
  return (
    <section className="px-6 sm:px-8 md:px-24 py-10 sm:py-12">
      <h3 className="text-3xl sm:text-4xl font-bold mb-8">Education</h3>
      <div className="border-l-2 border-accent pl-6">
        <p className="font-semibold text-lg">{education.degree}</p>
        <p className="text-ink/60 mt-1">{education.school}</p>
      </div>
    </section>
  );
}