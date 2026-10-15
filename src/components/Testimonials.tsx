const testimonials = [
  // { name: "Manager Name", role: "Engineering Manager", quote: "Add a real quote from a colleague here." },
  { name: "Rakesh CR", role: "Senior Consultant", quote: "I had the pleasure of working with Sumit at EY, and he was one of the most dependable engineers on our team. He is a strong Angular developer with a great eye for detail, and he consistently delivered clean, well-structured and responsive user interfaces. What sets him apart is that he didn't limit himself to the frontend. He also took on backend work and handled it with the same ownership and quality, which made him great at connecting the UI with APIs and solving problems end to end. He picks up new things quickly, communicates clearly and is always willing to help his teammates. Any team would be lucky to have Sumit, and I highly recommend him." },
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