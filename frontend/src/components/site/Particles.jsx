import { useMemo } from "react";
import { motion } from "framer-motion";

/* Floating coffee bean + bokeh particles layer */
export default function Particles({ count = 14 }) {
  const beans = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 6 + Math.random() * 14,
        duration: 8 + Math.random() * 12,
        delay: Math.random() * 6,
        opacity: 0.08 + Math.random() * 0.18,
      })),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {beans.map((b) => (
        <motion.span
          key={b.id}
          className="absolute rounded-full"
          style={{
            left: `${b.left}%`,
            top: `${b.top}%`,
            width: b.size,
            height: b.size,
            background:
              "radial-gradient(circle at 30% 30%, rgba(200,154,71,0.9), rgba(59,36,22,0.4))",
            opacity: b.opacity,
            filter: "blur(0.5px)",
          }}
          animate={{ y: [0, -40, 0], x: [0, 12, 0], rotate: [0, 180, 360] }}
          transition={{ duration: b.duration, delay: b.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
