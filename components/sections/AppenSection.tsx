import { AppenPlaceholderGraphic } from "@/components/illustrations/AppenPlaceholderGraphic";
import Link from "next/link";
import { appFeatureGroups, appenIntro, type AppFeature } from "@/lib/appen";
import { BOOK_DEMO_PATH, FAQ_PATH } from "@/lib/site";

function FeatureTags({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full bg-grannsam-green-muted px-2.5 py-1 text-xs font-medium text-grannsam-green sm:text-sm"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function FeatureListCard({ feature }: { feature: AppFeature }) {
  return (
    <article className="flex gap-4 rounded-2xl bg-white p-4 shadow-[0_4px_20px_rgba(38,43,46,0.06)] sm:gap-5 sm:p-5">
      <AppenPlaceholderGraphic
        variant={feature.graphic}
        label={feature.title}
        compact
      />
      <div className="min-w-0 flex-1">
        <h3 className="text-base font-bold text-foreground sm:text-lg">
          {feature.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-foreground/85 sm:text-base">
          {feature.description}
        </p>
        {feature.bullets ? <FeatureTags items={feature.bullets} /> : null}
        {feature.callout ? (
          <p className="mt-3 text-xs leading-relaxed text-grannsam-green sm:text-sm">
            {feature.callout}
          </p>
        ) : null}
      </div>
    </article>
  );
}

export function AppenSection() {
  return (
    <>
      <section className="border-b border-grannsam-border/30 bg-grannsam-green text-white">
        <div className="mx-auto max-w-3xl px-6 py-14 text-center md:px-10 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/75">
            {appenIntro.eyebrow}
          </p>
          <h1 className="mt-3 text-3xl font-bold sm:text-4xl">Appen</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            {appenIntro.lead}
          </p>
          <div className="mx-auto mt-10 flex justify-center">
            <AppenPlaceholderGraphic
              variant="hero-phone"
              label="Grannsam-appen"
              tone="on-green"
              className="w-full max-w-[220px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f5f1e1]">
        <div className="mx-auto max-w-3xl px-6 py-14 md:px-10 md:py-20">
          <div className="space-y-14 sm:space-y-16">
            {appFeatureGroups.map((group) => (
              <div key={group.id}>
                <header className="border-b border-grannsam-border/50 pb-4">
                  <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                    {group.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80 sm:text-base">
                    {group.description}
                  </p>
                </header>
                <ul className="mt-6 space-y-4">
                  {group.features.map((feature) => (
                    <li key={feature.id}>
                      <FeatureListCard feature={feature} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <aside className="mt-14 rounded-2xl border border-grannsam-border/40 bg-white px-6 py-8 text-center sm:px-8">
            <h2 className="text-lg font-semibold text-foreground sm:text-xl">
              Vill du se appen i praktiken?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/85 sm:text-base">
              Boka en demo eller läs vanliga frågor.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href={BOOK_DEMO_PATH}
                className="inline-flex items-center justify-center rounded-full bg-grannsam-green px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:px-8 sm:text-base"
              >
                Boka demo
              </Link>
              <Link
                href={FAQ_PATH}
                className="inline-flex items-center justify-center rounded-full border border-grannsam-green px-6 py-3 text-sm font-semibold text-grannsam-green transition-opacity hover:opacity-90 sm:px-8 sm:text-base"
              >
                Vanliga frågor
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
