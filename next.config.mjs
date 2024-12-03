// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost", // Tillader billeder fra localhost
      "placeimg.com", // Eksterne billeder
      "picsum.photos", // Eksterne billeder
    ],
  },
};

export default nextConfig;
