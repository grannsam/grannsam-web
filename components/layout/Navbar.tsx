import Link from "next/link";
import { ABOUT_PATH, BOOK_DEMO_PATH, CONTACT_PATH } from "@/lib/site";

const navItems = [
  { label: "Appen", href: "/#appen" },
  { label: "Pris", href: "/#pris" },
  { label: "Om oss", href: ABOUT_PATH },
  { label: "Kontakt", href: CONTACT_PATH },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-t border-foreground/90 bg-[#f5f1e1]">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-6 md:h-[4.5rem] md:gap-6 md:px-10"
        aria-label="Huvudnavigering"
      >
        <Link
          href="/"
          className="shrink-0 text-xl font-bold text-grannsam-green md:text-2xl"
        >
          Grannsam
        </Link>

        <ul className="flex items-center gap-4 md:gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-normal text-grannsam-green transition-opacity hover:opacity-75 md:text-base"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href={BOOK_DEMO_PATH}
          className="ml-auto shrink-0 rounded-full bg-grannsam-green px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 md:px-6 md:py-2.5 md:text-base"
        >
          Boka demo
        </Link>
      </nav>
    </header>
  );
}
