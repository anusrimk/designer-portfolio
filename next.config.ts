import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Archive item renamed once it was labelled as a Diagram UI recreation
      {
        source: "/project/ai-design-tools-website",
        destination: "/project/diagram-ui-recreation",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
