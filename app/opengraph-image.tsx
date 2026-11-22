import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_SLOGAN } from "@/lib/site";

export const alt = `${SITE_NAME} – ${SITE_SLOGAN}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#2c8526",
          color: "#f5f1e1",
        }}
      >
        <div style={{ fontSize: 36, fontWeight: 600, letterSpacing: -0.5 }}>
          {SITE_NAME}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 920,
          }}
        >
          {SITE_SLOGAN}
        </div>
        <div style={{ marginTop: 32, fontSize: 28, opacity: 0.9 }}>
          Information, ärenden och ett tryggt grannskap med BankID
        </div>
      </div>
    ),
    { ...size },
  );
}
