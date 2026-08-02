import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { getStats } from "../../lib/api";
import { Reveal } from "./Reveal";

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.floor(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-5xl md:text-7xl text-gold text-glow">
      {display}
      <span className="text-cream">{suffix}</span>
    </span>
  );
}

const HIGHLIGHTS = [
  { label: "Largest producer", value: "Brazil" },
  { label: "Most expensive coffee", value: "Kopi Luwak" },
];

export default function Stats() {
  const [stats, setStats] = useState([]);
  useEffect(() => {
    getStats().then(setStats).catch(() => setStats([]));
  }, []);

  return (
    <section className="relative py-24 md:py-32 bg-espresso/30" data-testid="stats-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <p className="font-accent italic text-latte text-2xl md:text-3xl text-center mb-16">
            The world runs on coffee — by the numbers
          </p>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
              data-testid="stat-item"
            >
              <Counter value={s.value} suffix={s.suffix} />
              <p className="text-cream/70 text-sm mt-3 max-w-[180px] mx-auto">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mt-16 max-w-3xl mx-auto">
          {HIGHLIGHTS.map((h) => (
            <div key={h.label} className="glass rounded-2xl p-6 text-center">
              <span className="text-xs uppercase tracking-[0.2em] text-latte">{h.label}</span>
              <p className="font-display text-3xl text-cream mt-2">{h.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
