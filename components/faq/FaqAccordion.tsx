import type { FaqItem } from "@/lib/faq";

function FaqEntry({ question, answer }: FaqItem) {
  return (
    <details className="group border-b border-grannsam-border/40 py-5 first:pt-0 last:border-b-0">
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-base font-semibold leading-snug text-foreground marker:content-none sm:text-lg [&::-webkit-details-marker]:hidden">
        <span>{question}</span>
        <span
          className="mt-1 shrink-0 text-grannsam-green transition-transform group-open:rotate-45"
          aria-hidden
        >
          +
        </span>
      </summary>
      <p className="mt-4 text-base leading-relaxed text-foreground/85">{answer}</p>
    </details>
  );
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div>
      {items.map((item) => (
        <FaqEntry key={item.question} {...item} />
      ))}
    </div>
  );
}
