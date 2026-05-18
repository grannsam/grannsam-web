const footerLinks = [
  { label: "Grannskap", href: "#engagemang" },
  { label: "Appen", href: "#appen" },
  { label: "Pris & Licens", href: "#pris" },
  { label: "Vanliga frågor (FAQ)", href: "#faq" },
  { label: "Datasäkerhet", href: "#datasakerhet" },
] as const;

function FooterActionIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden
    >
      <path
        d="M6 4H4v2M22 4h2v2M6 24H4v-2M22 24h2v-2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8 11h12M8 15h9M8 19h6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-grannsam-green text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-10 sm:flex-row sm:gap-16 md:gap-20 lg:gap-24">
            <div>
              <p className="text-xl font-semibold md:text-2xl">Grannsam AB</p>
              <p className="mt-1 text-base">För ett starkare grannskap</p>

              <div className="mt-8 space-y-1 text-base">
                <p>Kontakta oss</p>
                <a
                  href="mailto:info@grannsam.nu"
                  className="block transition-opacity hover:opacity-80"
                >
                  info@grannsam.nu
                </a>
                <a
                  href="tel:+46736418699"
                  className="block transition-opacity hover:opacity-80"
                >
                  +46 73 641 86 99
                </a>
              </div>
            </div>

            <nav aria-label="Sidfot">
              <ul className="space-y-1 text-base">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="transition-opacity hover:opacity-80"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-base">© {year} Grannsam AB</p>
            </nav>
          </div>

 
        </div>
      </div>
    </footer>
  );
}
