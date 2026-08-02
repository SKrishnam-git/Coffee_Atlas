import { motion } from "framer-motion";

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({ children, index }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      {index && (
        <span className="font-accent italic text-gold text-2xl">{index}</span>
      )}
      <span className="text-xs md:text-sm tracking-[0.28em] uppercase font-semibold text-latte">
        {children}
      </span>
      <span className="h-px flex-1 bg-gradient-to-r from-latte/40 to-transparent" />
    </div>
  );
}
