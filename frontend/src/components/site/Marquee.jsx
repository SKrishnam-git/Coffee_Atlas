const WORDS = ["Aroma", "Body", "Acidity", "Flavor", "Crema", "Roast", "Origin", "Ritual"];

export default function Marquee() {
  const items = [...WORDS, ...WORDS];
  return (
    <div className="tick-hover relative bg-espresso border-y border-gold/20 py-6 md:py-8 overflow-hidden" data-testid="marquee">
      <div className="marquee-track">
        {items.map((w, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="font-accent italic text-latte text-5xl md:text-7xl px-8">
              {w}
            </span>
            <span className="text-gold text-3xl md:text-5xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
