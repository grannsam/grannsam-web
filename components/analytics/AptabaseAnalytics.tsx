"use client";

import { AptabaseProvider, useAptabase } from "@aptabase/react";
import {
  isAptabaseDebug,
  SECTION_EVENTS,
  sectionEventFromHash,
  sectionEventFromId,
  viewEventFromLocation,
} from "@/lib/analytics";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useMemo, useState, useRef } from "react";

const APTABASE_APP_KEY = "A-EU-7487354434";
const APTABASE_APP_VERSION = "0.1.0";

function useLatestTrackEvent() {
  const { trackEvent } = useAptabase();
  const trackEventRef = useRef(trackEvent);
  trackEventRef.current = trackEvent;
  return trackEventRef;
}

function AptabaseFirstLoad() {
  const trackEventRef = useLatestTrackEvent();
  const sent = useRef(false);

  useEffect(() => {
    const id = window.setTimeout(() => {
      if (sent.current) return;
      sent.current = true;
      const view = viewEventFromLocation(window.location);
      void trackEventRef.current(view.event, view.props);
    }, 100);
    return () => window.clearTimeout(id);
  }, [trackEventRef]);

  return null;
}

function AptabaseClientNavigations() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { trackEvent } = useAptabase();
  const isFirstPath = useRef(true);
  const search = searchParams.toString();

  useEffect(() => {
    if (isFirstPath.current) {
      isFirstPath.current = false;
      return;
    }
    const frame = window.requestAnimationFrame(() => {
      const view = viewEventFromLocation(window.location);
      void trackEvent(view.event, view.props);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname, search, trackEvent]);

  return null;
}

function AptabaseSectionViews() {
  const pathname = usePathname();
  const trackEventRef = useLatestTrackEvent();

  useEffect(() => {
    const sendFromHash = () => {
      const hash = window.location.hash.replace(/^#/, "");
      if (!hash) return;
      const sectionEvent = sectionEventFromHash(
        hash,
        window.location.pathname,
      );
      if (!sectionEvent) return;
      void trackEventRef.current(sectionEvent.event, sectionEvent.props);
    };

    const frame = window.requestAnimationFrame(sendFromHash);
    window.addEventListener("hashchange", sendFromHash);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", sendFromHash);
    };
  }, [pathname, trackEventRef]);

  useEffect(() => {
    const elements = Object.keys(SECTION_EVENTS)
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || entry.intersectionRatio < 0.45) {
            continue;
          }
          const section = entry.target.id;
          const sectionEvent = sectionEventFromId(
            section,
            window.location.pathname,
          );
          if (!sectionEvent) continue;
          void trackEventRef.current(sectionEvent.event, sectionEvent.props);
        }
      },
      { threshold: [0.45], rootMargin: "0px" },
    );

    for (const element of elements) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [pathname, trackEventRef]);

  return null;
}

export function AptabaseAnalytics({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const options = useMemo(
    () => ({
      appVersion: APTABASE_APP_VERSION,
      isDebug: isAptabaseDebug(),
    }),
    [isClient],
  );

  if (!isClient) {
    return children;
  }

  return (
    <AptabaseProvider appKey={APTABASE_APP_KEY} options={options}>
      <AptabaseFirstLoad />
      <Suspense fallback={null}>
        <AptabaseClientNavigations />
      </Suspense>
      <AptabaseSectionViews />
      {children}
    </AptabaseProvider>
  );
}
