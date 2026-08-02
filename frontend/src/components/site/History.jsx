import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { getTimeline, FALLBACK_IMG } from "../../lib/api";
import { Reveal, SectionLabel } from "./Reveal";

function TimelineItem({ item, i }) {
  const left = i % 2 === 0;
  return (
    <div className="relative md:grid md:grid-cols-2 md:gap-12 items-center">
      {/* dot */}
      <span className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold border-4 border-darkroast z-10 shadow-[0_0_20px_rgba(200,154,71,0.6)]" />

      <motion.div
        initial={{ opacity: 0, x: left ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`glass rounded-2xl overflow-hidden ${left ? "md:col-start-1" : "md:col-start-2"}`}
        data-testid="timeline-item"
      >
        <div className="h-40 overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            onError={(e) => (e.currentTarget.src = FALLBACK_IMG)}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6">
          <span className="font-accent italic text-gold text-2xl">{item.era}</span>
          <h3 className="font-display text-2xl text-cream mt-1 mb-2">{item.title}</h3>
          <p className="text-cream/70 text-sm leading-relaxed">{item.text}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function History() {
  const [items, setItems] = useState([]);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    getTimeline().then(setItems).catch(() => setItems([]));
  }, []);

  return (
    <section id="history" className="relative py-24 md:py-32 bg-espresso/20" data-testid="history-section">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <Reveal>
          <SectionLabel index="02">The Journey</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream tracking-tight max-w-3xl mb-16 leading-none">
            A <em className="italic text-gold">thousand-year</em> story in every sip
          </h2>
        </Reveal>

        <div ref={ref} className="relative space-y-12 md:space-y-24">
          {/* center line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-cream/10">
            <motion.div style={{ height }} className="w-full bg-gradient-to-b from-gold to-latte" />
          </div>
          {items.map((item, i) => (
            <TimelineItem key={i} item={item} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
