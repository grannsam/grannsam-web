import type { ReactNode } from "react";
import Link from "next/link";
import type { LegalDocument } from "@/lib/legal";
import {
  CONTACT_EMAIL,
  CONTACT_PATH,
  DATA_SECURITY_PATH,
  DELETE_ACCOUNT_PATH,
  PRIVACY_PATH,
  TERMS_PATH,
} from "@/lib/site";

const linkClassName =
  "font-medium text-grannsam-green underline-offset-2 hover:underline";

// Body text is plain strings, so paths and the contact address are written inline and turned into
// links here — the same approach the deletion page uses for its email address.
function withLinks(text: string): ReactNode {
  const targets: { match: string; href: string; label: string }[] = [
    { match: `(${DELETE_ACCOUNT_PATH})`, href: DELETE_ACCOUNT_PATH, label: "Radera konto" },
    { match: `(${PRIVACY_PATH})`, href: PRIVACY_PATH, label: "Integritetspolicy" },
    { match: `(${TERMS_PATH})`, href: TERMS_PATH, label: "Användarvillkor" },
  ];

  for (const { match, href, label } of targets) {
    const at = text.indexOf(match);
    if (at === -1) continue;
    return (
      <>
        {withLinks(text.slice(0, at))}
        <Link href={href} className={linkClassName}>
          {label}
        </Link>
        {withLinks(text.slice(at + match.length))}
      </>
    );
  }

  const at = text.indexOf(CONTACT_EMAIL);
  if (at !== -1) {
    return (
      <>
        {text.slice(0, at)}
        <a href={`mailto:${CONTACT_EMAIL}`} className={linkClassName}>
          {CONTACT_EMAIL}
        </a>
        {withLinks(text.slice(at + CONTACT_EMAIL.length))}
      </>
    );
  }

  return <>{text}</>;
}

export function LegalDocumentSection({ document }: { document: LegalDocument }) {
  return (
    <>
      <section className="border-b border-grannsam-border/30 bg-[#f5f1e1]">
        <div className="mx-auto max-w-3xl px-6 py-14 text-center md:px-10 md:py-20">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
            {document.title}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-foreground/85 sm:text-lg">
            {withLinks(document.intro)}
          </p>
          <p className="mt-4 text-sm text-foreground/70">
            Senast uppdaterad {document.updated}
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-14 md:px-10 md:py-20">
          <div className="space-y-10">
            {document.blocks.map((block) => (
              <article key={block.title}>
                <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                  {block.title}
                </h2>
                <div className="mt-4 space-y-4">
                  {block.paragraphs?.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-base leading-relaxed text-foreground/85"
                    >
                      {withLinks(paragraph)}
                    </p>
                  ))}
                  {block.items ? (
                    <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-foreground/85">
                      {block.items.map((item) => (
                        <li key={item}>{withLinks(item)}</li>
                      ))}
                    </ul>
                  ) : null}
                  {block.table ? (
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
                        <thead>
                          <tr className="border-b border-grannsam-border/40">
                            {block.table.headers.map((header) => (
                              <th
                                key={header}
                                className="py-2 pr-4 font-semibold text-foreground"
                              >
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {block.table.rows.map((row) => (
                            <tr
                              key={row.join("|")}
                              className="border-b border-grannsam-border/20 align-top"
                            >
                              {row.map((cell) => (
                                <td
                                  key={cell}
                                  className="py-2 pr-4 leading-relaxed text-foreground/85"
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>

          <aside className="mt-12 rounded-2xl border border-grannsam-border/40 bg-[#f5f1e1] px-6 py-6 sm:px-8">
            <h2 className="text-lg font-semibold text-foreground">Frågor?</h2>
            <p className="mt-3 text-base leading-relaxed text-foreground/85">
              Mejla oss på{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className={linkClassName}>
                {CONTACT_EMAIL}
              </a>{" "}
              eller via{" "}
              <Link href={CONTACT_PATH} className={linkClassName}>
                kontaktformuläret
              </Link>
              . Mer om hur vi arbetar med trygghet finns på{" "}
              <Link href={DATA_SECURITY_PATH} className={linkClassName}>
                Datasäkerhet
              </Link>
              .
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
