import { useEffect, useState } from "react";
import { getFaqs } from "../../lib/api";
import { Reveal, SectionLabel } from "./Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export default function FAQ() {
  const [faqs, setFaqs] = useState([]);
  useEffect(() => {
    getFaqs().then(setFaqs).catch(() => setFaqs([]));
  }, []);

  return (
    <section id="faq" className="relative py-24 md:py-32" data-testid="faq-section">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <Reveal>
          <SectionLabel index="08">Questions</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream tracking-tight mb-16 leading-none">
            Everything you <em className="italic text-gold">wondered</em>
          </h2>
        </Reveal>

        <Accordion type="single" collapsible className="space-y-3" data-testid="faq-accordion">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="glass rounded-2xl border-cream/10 px-6 border-b-0"
              data-testid={`faq-item-${i}`}
            >
              <AccordionTrigger className="font-display text-lg md:text-xl text-cream hover:no-underline py-5 [&>svg]:text-gold">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-cream/75 text-base leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
