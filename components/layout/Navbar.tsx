import Link from "next/link";

const navItems = [
  { label: "Appen", href: "/#appen" },
  { label: "Pris", href: "/#pris" },
  { label: "Om Oss", href: "/om-oss" },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-t border-foreground/90 bg-[#f5f1e1]">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center gap-10 px-6 md:h-[4.5rem] md:gap-14 md:px-10"
        aria-label="Huvudnavigering"
      >
        <Link
          href="/"
          className="shrink-0 text-xl font-bold text-grannsam-green md:text-2xl"
        >
          Grannsam
        </Link>

        <ul className="flex items-center gap-6 md:gap-8">
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
      </nav>
    </header>
  );
}
