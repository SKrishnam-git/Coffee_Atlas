import { useState } from "react";
import { motion } from "framer-motion";
import { Coffee, Instagram, Twitter, Facebook, Youtube, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { postContact, postNewsletter } from "../../lib/api";
import { Reveal, SectionLabel } from "./Reveal";
import { scrollToId } from "./SmoothScroll";

const NAV = ["Home", "Coffee Types", "History", "Recipes", "Brewing", "Gallery"];
const NAV_IDS = ["hero", "coffee-types", "history", "recipes", "brewing", "gallery"];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [busy, setBusy] = useState(false);

  const subscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    try {
      await postNewsletter(email);
      toast.success("Welcome aboard! Check your inbox for a fresh brew of updates.");
      setEmail("");
    } catch {
      toast.error("Please enter a valid email address.");
    }
  };

  const sendContact = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    setBusy(true);
    try {
      await postContact(form);
      toast.success("Message sent! We'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <footer id="contact" className="relative bg-darkroast pt-24 md:pt-32 pb-12 border-t border-cream/10" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Contact */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <Reveal>
            <SectionLabel index="09">Get In Touch</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl text-cream tracking-tight leading-none mb-6">
              Let&apos;s talk <em className="italic text-gold">coffee</em>
            </h2>
            <p className="text-cream/70 max-w-md mb-8">
              Questions, ideas or just want to share your favourite brew? Drop us a line —
              we read every message over a fresh cup.
            </p>
            <form onSubmit={sendContact} className="space-y-4 max-w-md" data-testid="contact-form">
              <input
                data-testid="contact-name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full px-5 py-3.5 rounded-full bg-espresso/50 border border-cream/10 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold/50 transition-colors"
              />
              <input
                data-testid="contact-email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Your email"
                className="w-full px-5 py-3.5 rounded-full bg-espresso/50 border border-cream/10 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold/50 transition-colors"
              />
              <textarea
                data-testid="contact-message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Your message"
                rows={4}
                className="w-full px-5 py-3.5 rounded-3xl bg-espresso/50 border border-cream/10 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold/50 transition-colors resize-none"
              />
              <button
                type="submit"
                disabled={busy}
                data-testid="contact-submit"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gold text-darkroast font-medium hover:bg-latte transition-colors disabled:opacity-60"
              >
                {busy ? "Sending..." : "Send Message"} <Send className="w-4 h-4" />
              </button>
            </form>
          </Reveal>

          {/* Newsletter card */}
          <Reveal delay={0.1}>
            <motion.div className="glass rounded-3xl p-8 md:p-10 h-full flex flex-col justify-center">
              <Coffee className="w-8 h-8 text-gold mb-5" />
              <h3 className="font-display text-3xl text-cream mb-3">Join the Atlas</h3>
              <p className="text-cream/70 mb-6">
                Weekly stories, brewing tips and origin spotlights — straight to your inbox.
              </p>
              <form onSubmit={subscribe} className="flex flex-col sm:flex-row gap-3" data-testid="newsletter-form">
                <input
                  data-testid="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="flex-1 px-5 py-3.5 rounded-full bg-espresso/50 border border-cream/10 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold/50 transition-colors"
                />
                <button
                  type="submit"
                  data-testid="newsletter-submit"
                  className="px-6 py-3.5 rounded-full bg-emerald text-cream font-medium hover:bg-emerald/80 transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </Reveal>
        </div>

        {/* Bottom */}
        <div className="grid md:grid-cols-3 gap-10 pt-12 border-t border-cream/10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="grid place-items-center w-10 h-10 rounded-full bg-gold/15 border border-gold/30">
                <Coffee className="w-5 h-5 text-gold" />
              </span>
              <span className="font-display text-2xl text-cream">Coffee <span className="text-gold">Atlas</span></span>
            </div>
            <p className="text-cream/60 text-sm max-w-xs">
              An immersive journey through the world&apos;s favourite beverage. Educational, always brewing.
            </p>
            <div className="flex gap-3 mt-6">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  data-testid={`social-${i}`}
                  className="grid place-items-center w-10 h-10 rounded-full border border-cream/15 text-cream/70 hover:bg-gold hover:text-darkroast hover:border-gold transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-latte mb-4">Explore</h4>
            <ul className="space-y-2.5">
              {NAV.map((n, i) => (
                <li key={n}>
                  <button
                    onClick={() => scrollToId(NAV_IDS[i])}
                    className="text-cream/70 hover:text-gold transition-colors text-sm"
                  >
                    {n}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-latte mb-4">Location</h4>
            <p className="flex items-start gap-2 text-cream/70 text-sm">
              <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
              The Roastery, 42 Bean Street,<br />Seattle, WA — always open online.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/10 text-center text-cream/50 text-sm">
          © {new Date().getFullYear()} Coffee Atlas. Crafted with care & caffeine. All imagery for educational use.
        </div>
      </div>
    </footer>
  );
}
