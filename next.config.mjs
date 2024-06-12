/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GITHUB_APP_CLIENT_ID: process.env.GITHUB_ID,
    GITHUB_APP_CLIENT_SECRET: process.env.GITHUB_SECRET,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
};

export default nextConfig;
