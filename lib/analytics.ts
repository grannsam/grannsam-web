import { CANONICAL_HOST } from "@/lib/site";

export const ANALYTICS_EVENTS = {
  viewedPage: "viewed_page",
  ctaClick: "cta_click",
  demoCta: "demo_cta",
  demoSubmit: "demo_submit",
  demoSuccess: "demo_success",
  demoError: "demo_error",
  contactSubmit: "contact_submit",
  contactSuccess: "contact_success",
  contactError: "contact_error",
  outboundClick: "outbound_click",
  faqOpen: "faq_open",
} as const;

export type AnalyticsProps = Record<string, string | number | boolean>;

export type ContactIntent = "demo" | "contact";

const PAGE_EVENTS: Record<string, string> = {
  "/": "viewed_home",
  "/appen": "viewed_appen",
  "/jamfor": "viewed_compare",
  "/om-oss": "viewed_about",
  "/kontakt": "viewed_contact",
  "/faq": "viewed_faq",
  "/datasakerhet": "viewed_privacy",
  "/radera-konto": "viewed_delete_account",
};

export const SECTION_EVENTS: Record<string, string> = {
  pris: "viewed_pricing",
  engagemang: "viewed_engagement",
  varfor: "viewed_why",
};

const LIVE_HOSTS = new Set([
  CANONICAL_HOST,
  CANONICAL_HOST.replace(/^www\./, ""),
]);

/** Release only on the public marketing domain. Everything else is Debug. */
export function isAptabaseDebug(): boolean {
  if (typeof window === "undefined") {
    return process.env.NODE_ENV !== "production";
  }
  return !LIVE_HOSTS.has(window.location.hostname.toLowerCase());
}

const seenSections = new Set<string>();

export function claimSectionView(path: string, section: string): boolean {
  const key = `${path}#${section}`;
  if (seenSections.has(key)) return false;
  seenSections.add(key);
  return true;
}

export function contactIntentFromSearch(search: string): ContactIntent {
  const params = new URLSearchParams(
    search.startsWith("?") ? search.slice(1) : search,
  );
  return params.get("intent") === "demo" ? "demo" : "contact";
}

export function viewEventFromLocation(url: {
  pathname: string;
  search: string;
  hash?: string;
}): { event: string; props: AnalyticsProps } {
  const pathname = url.pathname || "/";
  const props: AnalyticsProps = { path: pathname };

  if (pathname === "/kontakt") {
    const intent = contactIntentFromSearch(url.search);
    props.intent = intent;
    if (intent === "demo") {
      return { event: "viewed_demo", props };
    }
  }

  return {
    event: PAGE_EVENTS[pathname] ?? ANALYTICS_EVENTS.viewedPage,
    props,
  };
}

export function sectionEventFromHash(
  hash: string,
  path: string,
): { event: string; props: AnalyticsProps } | null {
  const section = hash.replace(/^#/, "");
  if (!section) return null;
  if (!claimSectionView(path, section)) return null;
  return {
    event: SECTION_EVENTS[section] ?? "viewed_section",
    props: { section, path },
  };
}

export function sectionEventFromId(
  section: string,
  path: string,
): { event: string; props: AnalyticsProps } | null {
  if (!section || !claimSectionView(path, section)) return null;
  return {
    event: SECTION_EVENTS[section] ?? "viewed_section",
    props: { section, path },
  };
}

export function formEvents(intent: ContactIntent) {
  if (intent === "demo") {
    return {
      submit: ANALYTICS_EVENTS.demoSubmit,
      success: ANALYTICS_EVENTS.demoSuccess,
      error: ANALYTICS_EVENTS.demoError,
    };
  }
  return {
    submit: ANALYTICS_EVENTS.contactSubmit,
    success: ANALYTICS_EVENTS.contactSuccess,
    error: ANALYTICS_EVENTS.contactError,
  };
}
