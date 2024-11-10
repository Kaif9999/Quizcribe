import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  publicRuntimeConfig: {
    DEEPGRAM_API_KEY: process.env.DEEPGRAM_API_KEY,
    GEMINI_API_KEY: process.env.SUMMARIZE_API_KEY,
    
  },
};

export default nextConfig;
