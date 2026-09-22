import Link from "next/link";
import {
  deleteAccountIntro,
  deleteAccountSections,
} from "@/lib/delete-account";
import { CONTACT_EMAIL, CONTACT_PATH, DATA_SECURITY_PATH } from "@/lib/site";

export function DeleteAccountSection() {
  return (
    <>
      <section className="border-b border-grannsam-border/30 bg-[#f5f1e1]">
        <div className="mx-auto max-w-3xl px-6 py-14 text-center md:px-10 md:py-20">
          <h1 className="text-3xl font-bold text-foreground sm:text-4xl">
            Radera ditt Grannsam-konto
          </h1>
          <p className="mt-6 text-base leading-relaxed text-foreground/85 sm:text-lg">
            {deleteAccountIntro}
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-14 md:px-10 md:py-20">
          <div className="space-y-10">
            {deleteAccountSections.map((section) => (
              <article key={section.title}>
                <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-base leading-relaxed text-foreground/85"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.steps ? (
                    <ol className="list-decimal space-y-2 pl-5 text-base leading-relaxed text-foreground/85">
                      {section.steps.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>
                  ) : null}
                  {section.items ? (
                    <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-foreground/85">
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            ))}
          </div>

          <aside className="mt-12 rounded-2xl border border-grannsam-border/40 bg-[#f5f1e1] px-6 py-6 sm:px-8">
            <h2 className="text-lg font-semibold text-foreground">
              Frågor om radering eller integritet?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-foreground/85">
              Kontakta oss på{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-medium text-grannsam-green underline-offset-2 hover:underline"
              >
                {CONTACT_EMAIL}
              </a>{" "}
              eller via{" "}
              <Link
                href={CONTACT_PATH}
                className="font-medium text-grannsam-green underline-offset-2 hover:underline"
              >
                kontaktformuläret
              </Link>
              . Mer om hur vi arbetar med trygghet och personuppgifter finns på{" "}
              <Link
                href={DATA_SECURITY_PATH}
                className="font-medium text-grannsam-green underline-offset-2 hover:underline"
              >
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
