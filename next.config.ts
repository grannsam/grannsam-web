import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/docs/grannsam-nu/radera-konto.html",
        destination: "/radera-konto",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
