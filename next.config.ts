import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ["github.com", "avatars.githubusercontent.com"],
  },
  webpack(config) {
    config.experiments = { ...config.experiments, asyncWebAssembly: true };
    return config;
  },
};

export default nextConfig;
