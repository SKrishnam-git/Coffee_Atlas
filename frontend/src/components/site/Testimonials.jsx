import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { getTestimonials } from "../../lib/api";
import { Reveal, SectionLabel } from "./Reveal";

export default function Testimonials() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getTestimonials().then(setItems).catch(() => setItems([]));
  }, []);

  return (
    <section className="relative py-24 md:py-32 bg-espresso/20" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <SectionLabel index="07">Coffee Lovers</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream tracking-tight max-w-3xl mb-16 leading-none">
            Loved by <em className="italic text-gold">connoisseurs</em>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              animate={{ y: [0, -8, 0] }}
              className="glass rounded-2xl p-6 flex flex-col"
              data-testid="testimonial-card"
            >
              <Quote className="w-7 h-7 text-gold/50 mb-4" />
              <p className="text-cream/85 text-sm leading-relaxed flex-1">{t.text}</p>
              <div className="flex gap-0.5 my-4">
                {Array.from({ length: t.rating }).map((_, k) => (
                  <Star key={k} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover border border-cream/15" />
                <div>
                  <p className="text-cream font-medium text-sm">{t.name}</p>
                  <p className="text-latte text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
