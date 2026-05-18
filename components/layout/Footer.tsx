export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-grannsam-border bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-8 md:py-12">
        <div>
          <p className="text-lg font-bold text-foreground">Grannsam</p>
          <p className="mt-1 text-sm text-grannsam-gray">
            Din digitala granne i bostadsrättsföreningen.
          </p>
        </div>

        <p className="text-sm text-grannsam-gray">
          © {year} Grannsam. Alla rättigheter förbehållna.
        </p>
      </div>
    </footer>
  );
}
