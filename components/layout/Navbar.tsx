const navItems = [
  { label: "Appen", href: "#appen" },
  { label: "Pris", href: "#pris" },
  { label: "Oss", href: "#oss" },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-[4.5rem] md:px-10"
        aria-label="Huvudnavigering"
      >
        <a
          href="#"
          className="text-xl font-bold tracking-tight text-foreground md:text-2xl"
        >
          Grannsam
        </a>

        <ul className="flex items-center gap-6 md:gap-10">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-foreground transition-colors hover:text-grannsam-green md:text-base"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
