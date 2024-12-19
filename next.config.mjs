/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8080",
      },
      {
        protocol: "https",
        hostname: "cerulean-abrupt-sunshine.glitch.me",
      },
      {
        protocol: "https",
        hostname: "https://izlwnrcwutxxrclxaqwi.supabase.co/rest/v1/foofest",
      },
    ],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/, // Matcher SVG-filer
      use: [
        {
          loader: "@svgr/webpack", // Brug @svgr/webpack til at håndtere SVG'er
          options: {
            icon: true, // Valgfrit: gør SVG'er tilpassede til brug som ikoner
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
