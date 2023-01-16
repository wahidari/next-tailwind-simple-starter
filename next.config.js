/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    REPO_URL: "https://github.com/wahid-ari/next-tailwind-simple-starter",
    // API_URL: "http://localhost:3000",
  },
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
}

module.exports = nextConfig
