const navItems = [
  { label: "Appen", href: "#appen" },
  { label: "Pris", href: "#pris" },
  { label: "Oss", href: "#oss" },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-grannsam-border/60 bg-background/90 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:h-[4.5rem] md:px-8"
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
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-grannsam-green md:text-base"
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
