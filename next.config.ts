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
        source: "/integritet",
        destination: "/datasakerhet",
        permanent: true,
      },
      {
        source: "/privacy",
        destination: "/datasakerhet",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
