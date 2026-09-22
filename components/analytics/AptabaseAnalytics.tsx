"use client";

import { AptabaseProvider, useAptabase } from "@aptabase/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const APTABASE_APP_KEY = "A-EU-7487354434";
const APTABASE_OPTIONS = { appVersion: "0.1.0" };

function AptabasePageView() {
  const pathname = usePathname();
  const { trackEvent } = useAptabase();

  useEffect(() => {
    void trackEvent("page_view", { path: pathname });
  }, [pathname, trackEvent]);

  return null;
}

export function AptabaseAnalytics({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AptabaseProvider appKey={APTABASE_APP_KEY} options={APTABASE_OPTIONS}>
      <AptabasePageView />
      {children}
    </AptabaseProvider>
  );
}
