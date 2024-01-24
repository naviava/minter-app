/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "arweave.net",
      },
    ],
  },
};

export default nextConfig;
