import { motion } from "framer-motion";
import { profile, stats } from "../data/content";
import profileImg from "../assets/profile-pic.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center px-6 sm:px-8 md:px-24 pt-28 md:pt-0">
      {/* decorative background glow */}
      <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-accent-light/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-32 w-[300px] h-[300px] bg-accent-soft rounded-full blur-3xl" />

      <div className="relative w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8">
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold"
          >
            Hi, I'm {profile.name.split(" ")[0]}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-accent font-medium mt-2 text-lg"
          >
            {profile.role}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-md mx-auto md:mx-0 text-ink/60"
          >
            {profile.tagline}
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-8 px-6 py-3 bg-accent text-white rounded-full font-medium shadow-lg shadow-accent/25 hover:bg-accent-light transition-colors"
          >
            Contact Me →
          </motion.button>

          {/* stats row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 flex justify-center md:justify-start gap-8 sm:gap-10"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl sm:text-3xl font-bold text-accent">
                  {s.value}
                </p>
                <p className="text-xs sm:text-sm text-ink/50 mt-1 max-w-[90px]">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative shrink-0 w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px]"
        >
          <div className="relative shrink-0 w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px]">
  <div className="absolute inset-0 bg-accent-light/60 blob-shape" />
  <div className="absolute inset-3 w-[calc(100%-1.5rem)] h-[calc(100%-1.5rem)] rounded-[inherit] overflow-hidden blob-shape">
    <img
      src={profileImg}
      alt={profile.name}
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-accent mix-blend-color opacity-[0.12]" />
  </div>
</div>
        </motion.div>
      </div>
    </section>
  );
}
