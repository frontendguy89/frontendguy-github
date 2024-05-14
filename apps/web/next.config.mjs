import createMDX from "@next/mdx";
import { config } from "process";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {fs: false}
    return config
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  }
}; 

const withMDX = createMDX({
  
});

export default withMDX(nextConfig);
