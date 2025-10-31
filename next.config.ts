import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ltkeaalmunnzfeyjosef.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**", // Izinkan semua gambar dari storage
      },
    ],
  },
};

export default nextConfig;
