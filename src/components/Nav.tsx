import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  "About me",
  "Experience",
  "Projects",
  "Skills",
  "Achievements",
  "Education",
  "Testimonials",
  "Contact",
];

const slugify = (l: string) => l.toLowerCase().replace(/\s+/g, "-");

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(slugify(links[0]));

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(slugify(l)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-6 sm:px-8 md:px-24 py-6 backdrop-blur-md bg-paper/70 z-50">
      <span className="font-mono text-sm font-medium">SK</span>

      <div className="hidden md:flex gap-8 font-mono text-sm">
        {links.map((l) => {
          const id = slugify(l);
          const isActive = activeSection === id;
          return (
            <a
              key={l}
              href={`#${id}`}
              className={`transition-colors ${
                isActive ? "text-accent font-medium" : "hover:text-accent"
              }`}
            >
              {l}
            </a>
          );
        })}
      </div>

      <button
        className="md:hidden"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open && (
        <div className="absolute top-full left-0 w-full bg-paper/95 backdrop-blur-md flex flex-col items-center gap-6 py-8 md:hidden border-t border-line">
          {links.map((l) => {
            const id = slugify(l);
            const isActive = activeSection === id;
            return (
              <a
                key={l}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={`font-mono text-sm transition-colors ${
                  isActive ? "text-accent font-medium" : "hover:text-accent"
                }`}
              >
                {l}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}
