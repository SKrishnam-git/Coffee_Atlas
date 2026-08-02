import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Thermometer, Flame, Droplet, Coffee, Sparkles } from "lucide-react";
import { useEffect } from "react";
import { FALLBACK_IMG } from "../../lib/api";

function Stat({ icon: Icon, label, value }) {
  return (
    <div className="glass rounded-xl p-4">
      <Icon className="w-4 h-4 text-gold mb-2" />
      <div className="text-[11px] uppercase tracking-wider text-cream/50">{label}</div>
      <div className="text-cream font-medium mt-0.5">{value}</div>
    </div>
  );
}

function Tags({ title, items }) {
  if (!items?.length) return null;
  return (
    <div>
      <h4 className="text-xs uppercase tracking-[0.2em] text-latte mb-3">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {items.map((t, i) => (
          <span key={i} className="px-3 py-1.5 rounded-full text-sm bg-espresso/60 border border-cream/10 text-cream/85">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function CoffeeModal({ coffee, onClose }) {
  useEffect(() => {
    if (coffee) {
      document.body.style.overflow = "hidden";
      if (window.__lenis) window.__lenis.stop();
    } else {
      document.body.style.overflow = "";
      if (window.__lenis) window.__lenis.start();
    }
    return () => {
      document.body.style.overflow = "";
      if (window.__lenis) window.__lenis.start();
    };
  }, [coffee]);

  return (
    <AnimatePresence>
      {coffee && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-stretch md:items-center justify-center p-0 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          data-testid="coffee-modal"
        >
          <div className="absolute inset-0 bg-darkroast/80 backdrop-blur-md" onClick={onClose} />

          <motion.div
            initial={{ y: 60, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl max-h-[100svh] md:max-h-[90vh] overflow-hidden rounded-none md:rounded-3xl glass-dark border border-cream/10 grid grid-cols-1 md:grid-cols-2"
          >
            {/* Image side */}
            <div className="relative h-56 md:h-auto">
              <img
                src={coffee.image}
                alt={coffee.name}
                onError={(e) => (e.currentTarget.src = FALLBACK_IMG)}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-darkroast/90 via-darkroast/20 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="text-xs tracking-[0.25em] uppercase text-gold">{coffee.origin}</span>
                <h2 className="font-display text-4xl md:text-5xl text-cream mt-1">{coffee.name}</h2>
                <p className="font-accent italic text-latte text-lg mt-1">{coffee.tagline}</p>
              </div>
            </div>

            {/* Content side */}
            <div className="relative overflow-y-auto p-6 md:p-8 space-y-7">
              <button
                onClick={onClose}
                data-testid="modal-close-btn"
                className="sticky top-0 float-right z-10 grid place-items-center w-10 h-10 rounded-full glass text-cream hover:bg-gold hover:text-darkroast transition-colors duration-300"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-latte mb-2">History</h4>
                <p className="text-cream/80 leading-relaxed">{coffee.history}</p>
                <p className="text-cream/55 text-sm mt-2">Invented by: {coffee.invented_by}</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <Stat icon={Clock} label="Brew Time" value={coffee.brewing_time} />
                <Stat icon={Thermometer} label="Serve" value={coffee.serving_temp} />
                <Stat icon={Flame} label="Calories" value={`${coffee.calories} kcal`} />
                <Stat icon={Droplet} label="Milk" value={coffee.milk_ratio} />
              </div>

              <Tags title="Taste Notes" items={coffee.taste_notes} />
              <Tags title="Ingredients" items={coffee.ingredients} />

              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-latte mb-3">Recipe</h4>
                <ol className="space-y-3">
                  {coffee.recipe?.map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="shrink-0 grid place-items-center w-6 h-6 rounded-full bg-gold/15 border border-gold/30 text-gold text-xs font-medium">
                        {i + 1}
                      </span>
                      <span className="text-cream/80 text-sm leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Tags title="Perfect Pairings" items={coffee.pairings} />
                <Tags title="Snacks" items={coffee.snacks} />
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-latte mb-2">Best Beans</h4>
                <p className="text-cream/80">{coffee.best_beans}</p>
              </div>

              <div className="glass rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-gold" />
                  <h4 className="text-xs uppercase tracking-[0.2em] text-latte">Fun Trivia</h4>
                </div>
                <p className="text-cream/85 font-accent italic text-lg">{coffee.trivia}</p>
              </div>

              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="flex items-center gap-2 text-cream/70">
                    <Coffee className="w-4 h-4 text-gold" /> Popularity worldwide
                  </span>
                  <span className="text-latte">{coffee.popularity}%</span>
                </div>
                <div className="h-2 rounded-full bg-espresso/70 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-latte to-gold"
                    initial={{ width: 0 }}
                    animate={{ width: `${coffee.popularity}%` }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
