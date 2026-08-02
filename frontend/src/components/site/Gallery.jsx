import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getGallery, FALLBACK_IMG } from "../../lib/api";
import { Reveal, SectionLabel } from "./Reveal";

const spanClass = {
  tall: "row-span-2",
  wide: "md:col-span-2",
  normal: "",
};

export default function Gallery() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getGallery().then(setItems).catch(() => setItems([]));
  }, []);

  return (
    <section id="gallery" className="relative py-24 md:py-32" data-testid="gallery-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <SectionLabel index="06">Gallery</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream tracking-tight max-w-3xl mb-16 leading-none">
            Coffee, framed as <em className="italic text-gold">art</em>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3">
          {items.map((g, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.06 }}
              className={`group relative overflow-hidden rounded-2xl ${spanClass[g.span] || ""}`}
              data-testid="gallery-item"
            >
              <img
                src={g.image}
                alt={g.caption}
                loading="lazy"
                onError={(e) => (e.currentTarget.src = FALLBACK_IMG)}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <figcaption className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-darkroast/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <span className="font-accent italic text-cream text-lg">{g.caption}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
