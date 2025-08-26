import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    viewTransition: true, // habilita la integración experimental con React
  },
};

export default nextConfig;
