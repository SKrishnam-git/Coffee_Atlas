import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Flame, Lightbulb, Sparkles } from "lucide-react";
import { getRecipes, FALLBACK_IMG } from "../../lib/api";
import { Reveal, SectionLabel } from "./Reveal";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    getRecipes().then((d) => setRecipes(d)).catch(() => setRecipes([]));
  }, []);

  const r = recipes[active];

  return (
    <section id="recipes" className="relative py-24 md:py-32" data-testid="recipes-section">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Reveal>
          <SectionLabel index="05">Recipes</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream tracking-tight max-w-3xl mb-16 leading-none">
            Brew it <em className="italic text-gold">yourself</em>, step by step
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Selector */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {recipes.map((rec, i) => (
              <button
                key={rec.name}
                onClick={() => setActive(i)}
                data-testid={`recipe-tab-${i}`}
                className={`text-left px-5 py-4 rounded-xl whitespace-nowrap lg:whitespace-normal transition-colors duration-300 border ${
                  active === i
                    ? "glass border-gold/40 text-cream"
                    : "border-cream/10 text-cream/60 hover:text-cream hover:border-cream/25"
                }`}
              >
                <span className="font-display text-lg">{rec.name}</span>
                <span className="block text-xs text-latte mt-0.5">{rec.calories} kcal · {rec.difficulty}</span>
              </button>
            ))}
          </div>

          {/* Detail */}
          {r && (
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="glass rounded-3xl overflow-hidden grid md:grid-cols-2"
              data-testid="recipe-detail"
            >
              <div className="relative h-56 md:h-auto">
                <img
                  src={r.image}
                  alt={r.name}
                  onError={(e) => (e.currentTarget.src = FALLBACK_IMG)}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-espresso/80 to-transparent" />
              </div>
              <div className="p-8 space-y-6">
                <div>
                  <h3 className="font-display text-3xl text-cream">{r.name}</h3>
                  <div className="flex gap-3 mt-2 text-xs text-cream/60">
                    <span className="flex items-center gap-1.5"><Flame className="w-3.5 h-3.5 text-gold" />{r.calories} kcal</span>
                    <span>·</span>
                    <span>{r.difficulty}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-latte mb-2">Ingredients</h4>
                  <div className="flex flex-wrap gap-2">
                    {r.ingredients.map((ing, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-full text-sm bg-espresso/60 border border-cream/10 text-cream/85">{ing}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-latte mb-3">Preparation</h4>
                  <ol className="space-y-3">
                    {r.preparation.map((step, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="shrink-0 grid place-items-center w-6 h-6 rounded-full bg-gold/15 border border-gold/30 text-gold text-xs">{i + 1}</span>
                        <span className="text-cream/80 text-sm leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="glass rounded-xl p-4 flex gap-3">
                  <Lightbulb className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <p className="text-cream/80 text-sm">{r.tips.join(" · ")}</p>
                </div>

                <div className="flex items-start gap-2 text-latte/90 font-accent italic">
                  <Sparkles className="w-4 h-4 text-gold shrink-0 mt-1" />
                  <p>{r.fun_fact}</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
