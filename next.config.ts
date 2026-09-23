import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/docs/grannsam-nu/radera-konto.html",
        destination: "/radera-konto",
        permanent: true,
      },
      {
        source: "/privacy",
        destination: "/integritet",
        permanent: true,
      },
      {
        source: "/faq",
        destination: "/#faq",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
