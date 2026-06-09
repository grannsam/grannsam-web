import Link from "next/link";
import {
  ABOUT_PATH,
  CONTACT_EMAIL,
  CONTACT_PATH,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
  DATA_SECURITY_PATH,
  FAQ_PATH,
} from "@/lib/site";

const productLinks = [
  { label: "Grannskap", href: "/#engagemang" },
  { label: "Appen", href: "/#appen" },
  { label: "Pris & Licens", href: "/#pris" },
] as const;

const companyLinks = [
  { label: "Om oss", href: ABOUT_PATH },
  { label: "Kontakt", href: CONTACT_PATH },
  { label: "Vanliga frågor (FAQ)", href: FAQ_PATH },
  { label: "Datasäkerhet", href: DATA_SECURITY_PATH },
] as const;

type FooterLinkItem = { label: string; href: string };

function FooterLink({ label, href }: FooterLinkItem) {
  const className = "transition-opacity hover:opacity-80";

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {label}
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {label}
    </a>
  );
}

function FooterNavGroup({
  title,
  links,
  className,
}: {
  title: string;
  links: readonly FooterLinkItem[];
  className?: string;
}) {
  return (
    <nav aria-label={title} className={className}>
      <p className="text-base font-semibold">{title}</p>
      <ul className="mt-4 space-y-2 text-base">
        {links.map((link) => (
          <li key={link.href}>
            <FooterLink {...link} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-grannsam-green text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-16">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-xl font-semibold md:text-2xl">Grannsam AB</p>
            <p className="mt-1 text-base">För ett starkare grannskap</p>

            <div className="mt-8 space-y-2 text-base">
              <Link
                href={CONTACT_PATH}
                className="block transition-opacity hover:opacity-80"
              >
                Kontakta oss
              </Link>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="block transition-opacity hover:opacity-80"
              >
                {CONTACT_EMAIL}
              </a>
              <a
                href={`tel:${CONTACT_PHONE}`}
                className="block transition-opacity hover:opacity-80"
              >
                {CONTACT_PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <FooterNavGroup
            title="Produkt"
            links={productLinks}
            className="sm:justify-self-end"
          />
          <FooterNavGroup
            title="Företag"
            links={companyLinks}
            className="sm:justify-self-end"
          />
        </div>

        <p className="mt-10 border-t border-white/20 pt-6 text-base">
          © {year} Grannsam AB
        </p>
      </div>
    </footer>
  );
}
