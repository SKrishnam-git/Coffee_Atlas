import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Coffee } from "lucide-react";
import { scrollToId } from "./SmoothScroll";

const LINKS = [
  { label: "Home", id: "hero" },
  { label: "Coffee Types", id: "coffee-types" },
  { label: "History", id: "history" },
  { label: "Recipes", id: "recipes" },
  { label: "Brewing", id: "brewing" },
  { label: "Gallery", id: "gallery" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled ? "glass-dark border-b border-cream/10" : "bg-transparent"
      }`}
      data-testid="navbar"
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <button
          onClick={() => go("hero")}
          className="flex items-center gap-3 group"
          data-testid="logo-button"
        >
          <span className="grid place-items-center w-10 h-10 rounded-full bg-gold/15 border border-gold/30 group-hover:bg-gold/25 transition-colors duration-300">
            <Coffee className="w-5 h-5 text-gold" />
          </span>
          <span className="font-display text-xl md:text-2xl text-cream tracking-tight">
            Coffee <span className="text-gold">Atlas</span>
          </span>
        </button>

        <div className="hidden lg:flex items-center gap-8">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              data-testid={`nav-${l.id}`}
              className="relative text-sm text-cream/80 hover:text-cream transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold hover:after:w-full after:transition-all after:duration-300"
            >
              {l.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => go("coffee-types")}
          data-testid="nav-cta-explore"
          className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full bg-gold text-darkroast text-sm font-medium hover:bg-latte transition-colors duration-300"
        >
          Explore Coffees
        </button>

        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden text-cream p-2"
          data-testid="mobile-menu-toggle"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="lg:hidden overflow-hidden glass-dark border-t border-cream/10"
            data-testid="mobile-menu"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {LINKS.map((l) => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className="text-left text-cream/85 text-base py-1"
                  data-testid={`mobile-nav-${l.id}`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
