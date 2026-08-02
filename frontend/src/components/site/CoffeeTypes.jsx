import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { getCoffees, FALLBACK_IMG } from "../../lib/api";
import { Reveal, SectionLabel } from "./Reveal";
import CoffeeModal from "./CoffeeModal";

function Meter({ label, value, color = "bg-gold" }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-[11px] uppercase tracking-wider text-cream/60">
        <span>{label}</span>
        <span className="text-latte">{value}</span>
      </div>
      <div className="h-1.5 rounded-full bg-espresso/70 overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${color}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}

function CoffeeCard({ coffee, onOpen, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: (index % 3) * 0.08 }}
      whileHover={{ y: -8 }}
      className="group glass rounded-2xl overflow-hidden flex flex-col shadow-[0_8px_32px_rgba(200,154,71,0.05)] hover:border-gold/30 transition-colors duration-500"
      data-testid="coffee-type-card"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={coffee.image}
          alt={coffee.name}
          loading="lazy"
          onError={(e) => (e.currentTarget.src = FALLBACK_IMG)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/20 to-transparent" />
        <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-cream/90 text-xs">
          <MapPin className="w-3.5 h-3.5 text-gold" />
          {coffee.origin}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-2xl text-cream">{coffee.name}</h3>
        <p className="font-accent italic text-latte/90 text-base mt-1 mb-5">{coffee.tagline}</p>

        <div className="grid grid-cols-2 gap-x-5 gap-y-3 mb-6">
          <Meter label="Strength" value={coffee.strength} color="bg-gold" />
          <Meter label="Milk" value={coffee.milk} color="bg-cream/80" />
          <Meter label="Bitterness" value={coffee.bitterness} color="bg-latte" />
          <Meter label="Caffeine" value={coffee.caffeine} color="bg-emerald" />
        </div>

        <button
          onClick={() => onOpen(coffee)}
          data-testid={`learn-more-${coffee.slug}`}
          className="mt-auto inline-flex items-center justify-between gap-2 w-full px-5 py-3 rounded-full border border-cream/15 text-cream text-sm hover:bg-gold hover:text-darkroast hover:border-gold transition-colors duration-300"
        >
          Learn More
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}

export default function CoffeeTypes() {
  const [coffees, setCoffees] = useState([]);
  const [active, setActive] = useState(null);

  useEffect(() => {
    getCoffees().then(setCoffees).catch(() => setCoffees([]));
  }, []);

  return (
    <section id="coffee-types" className="relative py-24 md:py-32" data-testid="coffee-types-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <SectionLabel index="01">Coffee Types</SectionLabel>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream tracking-tight max-w-2xl leading-none">
              Twenty ways to <em className="italic text-gold">love</em> a bean
            </h2>
            <p className="text-cream/70 max-w-md">
              From the concentrated punch of an espresso to the slow ritual of cold brew —
              explore the world&apos;s most beloved coffees, each with its own character.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coffees.map((c, i) => (
            <CoffeeCard key={c.slug} coffee={c} onOpen={setActive} index={i} />
          ))}
        </div>
      </div>

      <CoffeeModal coffee={active} onClose={() => setActive(null)} />
    </section>
  );
}
