type SectionTone = "default" | "muted" | "accent";

type LandingSectionProps = {
  id?: string;
  sectionNumber: number;
  title: string;
  description: string;
  tone?: SectionTone;
};

const toneClasses: Record<SectionTone, string> = {
  default: "bg-background",
  muted: "bg-white",
  accent: "bg-grannsam-green-muted",
};

export function LandingSection({
  id,
  sectionNumber,
  title,
  description,
  tone = "default",
}: LandingSectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 border-b border-grannsam-border/40 ${toneClasses[tone]}`}
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <div className="mx-auto flex min-h-[min(70vh,40rem)] max-w-6xl flex-col justify-center px-6 py-20 md:px-8 md:py-28">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-grannsam-green">
          Sektion {sectionNumber}
        </p>
        <h2
          id={id ? `${id}-heading` : undefined}
          className="max-w-2xl text-3xl font-bold leading-tight text-foreground md:text-5xl"
        >
          {title}
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-grannsam-gray">
          {description}
        </p>

        <div className="mt-12 flex min-h-[12rem] items-center justify-center rounded-2xl border-2 border-dashed border-grannsam-border bg-white/50">
          <p className="text-sm text-grannsam-gray">
            Design kommer här — skicka mockup för sektion {sectionNumber}
          </p>
        </div>
      </div>
    </section>
  );
}
