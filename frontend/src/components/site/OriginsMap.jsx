import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getOrigins } from "../../lib/api";
import { Reveal, SectionLabel } from "./Reveal";

export default function OriginsMap() {
  const [origins, setOrigins] = useState([]);
  const [active, setActive] = useState(null);

  useEffect(() => {
    getOrigins().then((d) => {
      setOrigins(d);
      if (d.length) setActive(d[0]);
    }).catch(() => setOrigins([]));
  }, []);

  return (
    <section id="origins" className="relative py-24 md:py-32" data-testid="origins-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <SectionLabel index="03">Coffee Origins</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream tracking-tight max-w-3xl mb-16 leading-none">
            Grown across the <em className="italic text-gold">bean belt</em>
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Map */}
          <div className="lg:col-span-2 relative glass rounded-3xl p-4 md:p-8 overflow-hidden" data-testid="coffee-map">
            <div className="relative w-full" style={{ aspectRatio: "2 / 1" }}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
                alt="World map"
                className="absolute inset-0 w-full h-full object-contain opacity-25 invert"
                style={{ filter: "invert(1) sepia(1) saturate(0.4) hue-rotate(340deg) opacity(0.35)" }}
              />
              {origins.map((o) => (
                <button
                  key={o.country}
                  onClick={() => setActive(o)}
                  onMouseEnter={() => setActive(o)}
                  data-testid={`map-dot-${o.country.toLowerCase()}`}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group"
                  style={{ left: `${o.x}%`, top: `${o.y}%` }}
                >
                  <span className={`block w-3.5 h-3.5 rounded-full ${active?.country === o.country ? "bg-gold" : "bg-emerald"} relative`}>
                    <span className={`absolute inset-0 rounded-full ${active?.country === o.country ? "bg-gold" : "bg-emerald"} animate-ping opacity-60`} />
                  </span>
                  <span className="absolute left-1/2 -translate-x-1/2 top-5 text-[11px] text-cream/80 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    {o.country}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Detail */}
          <div className="glass rounded-3xl p-8 min-h-[280px]" data-testid="origin-detail">
            <AnimatePresence mode="wait">
              {active && (
                <motion.div
                  key={active.country}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="text-xs tracking-[0.25em] uppercase text-latte">{active.type}</span>
                  <h3 className="font-display text-4xl text-cream mt-1 mb-5">{active.country}</h3>
                  <dl className="space-y-4 text-sm">
                    <div>
                      <dt className="text-gold uppercase tracking-wider text-[11px] mb-1">Production</dt>
                      <dd className="text-cream/80">{active.production}</dd>
                    </div>
                    <div>
                      <dt className="text-gold uppercase tracking-wider text-[11px] mb-1">History</dt>
                      <dd className="text-cream/80">{active.history}</dd>
                    </div>
                    <div>
                      <dt className="text-gold uppercase tracking-wider text-[11px] mb-1">Famous Beans</dt>
                      <dd className="text-cream/80">{active.beans}</dd>
                    </div>
                  </dl>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
