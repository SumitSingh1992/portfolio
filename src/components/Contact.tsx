import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./icons";
import { contact } from "../data/content";

const infoItems = [
  { icon: Mail, label: contact.email, href: `mailto:${contact.email}` },
  { icon: Phone, label: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: contact.location, href: undefined },
];

const socialItems = [
  { icon: LinkedinIcon, label: "LinkedIn", href: contact.linkedin },
  { icon: GithubIcon, label: "GitHub", href: contact.github },
];

export default function Contact() {
  return (
    <section className="px-6 sm:px-8 md:px-24 py-16 sm:py-20 bg-accent-soft rounded-t-[3rem]">
      <h3 className="text-3xl sm:text-4xl font-bold mb-4">Let's work together</h3>
      <p className="text-ink/60 max-w-md mb-10">
        Open to senior and staff-level frontend architecture roles. Reach out directly.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 max-w-xl mb-8">
        {infoItems.map(({ icon: Icon, label, href }, i) => {
          const Wrapper = href ? motion.a : motion.div;
          return (
            <Wrapper
              key={label}
              href={href}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-3 bg-white px-5 py-4 rounded-xl border border-line hover:border-accent transition-colors"
            >
              <Icon size={18} className="text-accent shrink-0" />
              <span className="text-sm truncate">{label}</span>
            </Wrapper>
          );
        })}
      </div>

      <div className="flex gap-3">
        {socialItems.map(({ icon: Icon, label, href }, i) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.3 + i * 0.08 }}
            whileHover={{ y: -2 }}
            className="w-12 h-12 flex items-center justify-center bg-white rounded-full border border-line hover:border-accent hover:bg-accent hover:text-white transition-colors text-accent"
          >
            <Icon size={20} />
          </motion.a>
        ))}
      </div>
    </section>
  );
}