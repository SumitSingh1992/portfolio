const testimonials = [
  { name: "Manager Name", role: "Engineering Manager", quote: "Add a real quote from a colleague here." },
  { name: "Colleague Name", role: "Tech Lead", quote: "Add another real quote here." },
];

export default function Testimonials() {
  return (
    <section className="px-8 md:px-24 py-16 sm:py-20 bg-accent/5">
      <h3 className="text-4xl font-bold mb-16">What people say</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-white p-8 rounded-2xl border border-line">
            <p className="text-ink/70 italic">"{t.quote}"</p>
            <p className="mt-4 font-semibold">{t.name}</p>
            <p className="text-sm text-ink/50">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}