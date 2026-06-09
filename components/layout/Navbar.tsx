"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ABOUT_PATH,
  APPEN_PATH,
  BOOK_DEMO_PATH,
  CONTACT_PATH,
} from "@/lib/site";

const navItems = [
  { label: "Appen", href: APPEN_PATH },
  { label: "Pris", href: "/#pris" },
  { label: "Om oss", href: ABOUT_PATH },
  { label: "Kontakt", href: CONTACT_PATH },
] as const;

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="text-grannsam-green"
    >
      {open ? (
        <path
          d="M6 6l12 12M18 6L6 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ) : (
        <>
          <path
            d="M4 7h16M4 12h16M4 17h16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-t border-foreground/90 bg-[#f5f1e1]">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6 md:h-[4.5rem] md:px-10"
        aria-label="Huvudnavigering"
      >
        <Link
          href="/"
          className="shrink-0 text-xl font-bold text-grannsam-green md:text-2xl"
          onClick={closeMenu}
        >
          Grannsam
        </Link>

        <ul className="hidden items-center gap-6 md:flex md:gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-base font-normal text-grannsam-green transition-opacity hover:opacity-75"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href={BOOK_DEMO_PATH}
          className="hidden shrink-0 rounded-full bg-grannsam-green px-6 py-2.5 text-base font-semibold text-white transition-opacity hover:opacity-90 md:inline-flex"
        >
          Boka demo
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-grannsam-green/25 bg-white/60 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((current) => !current)}
        >
          <span className="sr-only">
            {open ? "Stäng meny" : "Öppna meny"}
          </span>
          <MenuIcon open={open} />
        </button>
      </nav>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-grannsam-border/30 bg-[#f5f1e1] md:hidden"
        >
          <ul className="mx-auto max-w-7xl space-y-1 px-6 py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-xl px-3 py-3 text-base font-medium text-grannsam-green transition-colors hover:bg-grannsam-green-muted"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
