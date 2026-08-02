import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Coffee } from "lucide-react";
import Particles from "./Particles";
import { scrollToId } from "./SmoothScroll";

const HERO_IMG =
  "https://images.unsplash.com/photo-1609050471053-8636409f9f5b?crop=entropy&cs=srgb&fm=jpg&q=85&w=2200";

const lines = ["Explore The", "World Of", "Coffee"];

const lineVariant = {
  hidden: { y: "115%" },
  show: (i) => ({
    y: "0%",
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 + i * 0.16 },
  }),
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-[100svh] flex items-end overflow-hidden"
      data-testid="hero-section"
    >
      {/* Background */}
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <motion.img
          src={HERO_IMG}
          alt="Cinematic espresso pour"
          className="w-full h-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-darkroast via-darkroast/55 to-darkroast/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(26,22,18,0.85)_100%)]" />
      </motion.div>

      <Particles count={16} />

      {/* Steam */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-6 opacity-40">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-1.5 h-24 rounded-full bg-gradient-to-t from-cream/0 to-cream/30 blur-md"
            style={{ animation: `steam-rise ${5 + i}s ${i * 0.8}s ease-in-out infinite` }}
          />
        ))}
      </div>

      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-24 md:pb-32 w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="flex items-center gap-3 mb-8"
        >
          <Coffee className="w-4 h-4 text-gold" />
          <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-latte font-semibold">
            A World Coffee Journey
          </span>
        </motion.div>

        <h1 className="font-display text-cream text-glow text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.92] tracking-tighter">
          {lines.map((line, i) => (
            <span className="line-mask" key={i}>
              <motion.span
                className="block"
                custom={i}
                variants={lineVariant}
                initial="hidden"
                animate="show"
              >
                {line === "Coffee" ? <em className="italic text-gold not-italic font-normal">Coffee</em> : line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="font-accent italic text-cream/85 text-xl md:text-2xl lg:text-3xl mt-8 max-w-2xl"
        >
          Every cup tells a story. Discover the history, flavor, brewing methods,
          and culture behind the world&apos;s favorite coffees.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-wrap items-center gap-4 mt-12"
        >
          <button
            onClick={() => scrollToId("coffee-types")}
            data-testid="hero-explore-btn"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold text-darkroast font-medium hover:bg-latte transition-colors duration-300"
          >
            Explore Coffees
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" />
          </button>
          <button
            onClick={() => scrollToId("history")}
            data-testid="hero-history-btn"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass text-cream font-medium hover:border-gold/40 transition-colors duration-300"
          >
            Learn History
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
