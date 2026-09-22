"use client";

import { ANALYTICS_EVENTS, type AnalyticsProps } from "@/lib/analytics";
import { useAptabase } from "@aptabase/react";
import Link from "next/link";
import type { ComponentProps } from "react";

type CtaLinkProps = ComponentProps<typeof Link> & {
  cta: string;
  location: string;
};

export function CtaLink({ cta, location, onClick, ...props }: CtaLinkProps) {
  const { trackEvent } = useAptabase();

  return (
    <Link
      {...props}
      onClick={(event) => {
        void trackEvent(
          cta === "book_demo"
            ? ANALYTICS_EVENTS.demoCta
            : ANALYTICS_EVENTS.ctaClick,
          { cta, location },
        );
        onClick?.(event);
      }}
    />
  );
}

type OutboundLinkProps = ComponentProps<"a"> & {
  channel: "email" | "phone";
  location: string;
};

export function OutboundLink({
  channel,
  location,
  onClick,
  ...props
}: OutboundLinkProps) {
  const { trackEvent } = useAptabase();

  return (
    <a
      {...props}
      onClick={(event) => {
        void trackEvent(ANALYTICS_EVENTS.outboundClick, {
          channel,
          location,
        } satisfies AnalyticsProps);
        onClick?.(event);
      }}
    />
  );
}
