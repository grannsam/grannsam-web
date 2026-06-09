import type { AppGraphicVariant } from "@/lib/appen";
import type { ReactNode } from "react";

const stroke = {
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function HeroPhoneGraphic() {
  return (
    <>
      <rect x="108" y="24" width="104" height="192" rx="18" fill="none" {...stroke} />
      <path d="M128 44h64" {...stroke} />
      <rect x="124" y="60" width="72" height="44" rx="8" fill="none" {...stroke} />
      <path d="M124 120h72M124 136h48M124 152h56M124 168h40" {...stroke} />
      <circle cx="160" cy="200" r="6" fill="none" {...stroke} />
    </>
  );
}

function CommunityGraphic() {
  return (
    <>
      <path d="M40 168h240" {...stroke} />
      <path d="M72 168V108l28-20 28 20v60" fill="none" {...stroke} />
      <path d="M100 88l28-16 28 16" fill="none" {...stroke} />
      <rect x="86" y="124" width="12" height="12" fill="none" {...stroke} />
      <rect x="118" y="124" width="12" height="12" fill="none" {...stroke} />
      <path d="M188 168V96l36-12 36 12v72" fill="none" {...stroke} />
      <path d="M206 84l18-8 18 8" fill="none" {...stroke} />
      <circle cx="88" cy="152" r="10" fill="none" {...stroke} />
      <circle cx="224" cy="148" r="10" fill="none" {...stroke} />
      <path d="M88 162v6M224 158v10" {...stroke} />
    </>
  );
}

function TicketGraphic() {
  return (
    <>
      <rect x="72" y="48" width="176" height="144" rx="12" fill="none" {...stroke} />
      <path d="M72 88h176" {...stroke} />
      <path d="M104 68h64M104 108h112M104 128h88M104 148h96" {...stroke} />
      <circle cx="248" cy="68" r="14" fill="none" {...stroke} />
      <path d="M242 68l4 4 8-8" {...stroke} />
    </>
  );
}

function EventsGraphic() {
  return (
    <>
      <rect x="88" y="56" width="144" height="128" rx="12" fill="none" {...stroke} />
      <path d="M88 88h144M120 56v24M200 56v24" {...stroke} />
      <circle cx="128" cy="116" r="10" fill="none" {...stroke} />
      <circle cx="160" cy="116" r="10" fill="none" {...stroke} />
      <circle cx="192" cy="116" r="10" fill="none" {...stroke} />
      <path d="M112 152h96M112 168h72" {...stroke} />
    </>
  );
}

function ProfileGraphic() {
  return (
    <>
      <circle cx="160" cy="88" r="28" fill="none" {...stroke} />
      <path d="M104 176c8-28 28-40 56-40s48 12 56 40" fill="none" {...stroke} />
      <path d="M208 72l8-8M216 88h12M208 104l8 8" {...stroke} />
    </>
  );
}

function ForumGraphic() {
  return (
    <>
      <rect x="56" y="72" width="120" height="72" rx="14" fill="none" {...stroke} />
      <path d="M76 96h80M76 116h56" {...stroke} />
      <path d="M92 144l-16 24 20-12" fill="none" {...stroke} />
      <rect x="168" y="104" width="96" height="64" rx="14" fill="none" {...stroke} />
      <path d="M188 128h56M188 144h40" {...stroke} />
    </>
  );
}

function DocumentsGraphic() {
  return (
    <>
      <path d="M104 56h88l24 24v112H104z" fill="none" {...stroke} />
      <path d="M192 56v24h24" fill="none" {...stroke} />
      <path d="M124 104h72M124 124h72M124 144h48" {...stroke} />
      <rect x="72" y="80" width="88" height="112" rx="8" fill="none" {...stroke} />
      <path d="M92 104h48M92 124h40" {...stroke} />
    </>
  );
}

function BoardGraphic() {
  return (
    <>
      <rect x="64" y="48" width="192" height="136" rx="10" fill="none" {...stroke} />
      <path d="M160 48v-16M144 32h32" {...stroke} />
      <rect x="88" y="72" width="144" height="36" rx="6" fill="none" {...stroke} />
      <path d="M104 88h96M104 98h72" {...stroke} />
      <path d="M88 128h112M88 148h88M88 168h64" {...stroke} />
    </>
  );
}

const graphics: Record<AppGraphicVariant, () => ReactNode> = {
  "hero-phone": HeroPhoneGraphic,
  community: CommunityGraphic,
  ticket: TicketGraphic,
  events: EventsGraphic,
  profile: ProfileGraphic,
  forum: ForumGraphic,
  documents: DocumentsGraphic,
  board: BoardGraphic,
};

type AppenPlaceholderGraphicProps = {
  variant: AppGraphicVariant;
  className?: string;
  label?: string;
  compact?: boolean;
  tone?: "default" | "on-green";
};

export function AppenPlaceholderGraphic({
  variant,
  className = "",
  label,
  compact = false,
  tone = "default",
}: AppenPlaceholderGraphicProps) {
  const Graphic = graphics[variant];
  const isOnGreen = tone === "on-green";

  return (
    <div
      className={`flex items-center justify-center overflow-hidden rounded-2xl border ${
        compact ? "aspect-square w-24 shrink-0 sm:w-28" : "aspect-[4/3]"
      } ${
        isOnGreen
          ? "border-white/25 bg-white/10 text-white"
          : "border-grannsam-green/15 bg-grannsam-green-muted text-grannsam-green shadow-[0_8px_30px_rgba(38,43,46,0.06)]"
      } ${className}`}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <svg
        viewBox="0 0 320 240"
        className={
          compact ? "h-auto w-[78%]" : "h-auto w-[88%] max-w-[280px]"
        }
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Graphic />
      </svg>
    </div>
  );
}
