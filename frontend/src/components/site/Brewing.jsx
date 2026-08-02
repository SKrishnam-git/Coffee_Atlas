import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check, X as XIcon, Clock, Gauge } from "lucide-react";
import { getBrewing, FALLBACK_IMG } from "../../lib/api";
import { Reveal, SectionLabel } from "./Reveal";

const diffColor = {
  Easy: "text-emerald bg-emerald/15",
  Medium: "text-gold bg-gold/15",
  Hard: "text-latte bg-latte/15",
};

export default function Brewing() {
  const [methods, setMethods] = useState([]);
  useEffect(() => {
    getBrewing().then(setMethods).catch(() => setMethods([]));
  }, []);

  return (
    <section id="brewing" className="relative py-24 md:py-32 bg-espresso/20" data-testid="brewing-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <SectionLabel index="04">Brewing Methods</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream tracking-tight max-w-3xl mb-16 leading-none">
            Master the <em className="italic text-gold">craft</em> of extraction
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {methods.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: (i % 2) * 0.08 }}
              className="group glass rounded-2xl overflow-hidden md:flex hover:border-gold/30 transition-colors duration-500"
              data-testid="brewing-card"
            >
              <div className="md:w-2/5 h-44 md:h-auto overflow-hidden">
                <img
                  src={m.image}
                  alt={m.name}
                  loading="lazy"
                  onError={(e) => (e.currentTarget.src = FALLBACK_IMG)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6 md:w-3/5">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display text-2xl text-cream">{m.name}</h3>
                  <span className={`text-[11px] px-2.5 py-1 rounded-full uppercase tracking-wider ${diffColor[m.difficulty] || "text-gold bg-gold/15"}`}>
                    {m.difficulty}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-xs text-cream/60 mb-3">
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-gold" />{m.time}</span>
                  <span className="flex items-center gap-1.5"><Gauge className="w-3.5 h-3.5 text-gold" />{m.equipment?.length} tools</span>
                </div>
                <p className="font-accent italic text-latte/90 mb-4">{m.flavor}</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <ul className="space-y-1.5">
                    {m.pros?.map((p, k) => (
                      <li key={k} className="flex items-start gap-2 text-cream/75">
                        <Check className="w-3.5 h-3.5 text-emerald mt-0.5 shrink-0" />{p}
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-1.5">
                    {m.cons?.map((c, k) => (
                      <li key={k} className="flex items-start gap-2 text-cream/55">
                        <XIcon className="w-3.5 h-3.5 text-latte mt-0.5 shrink-0" />{c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
