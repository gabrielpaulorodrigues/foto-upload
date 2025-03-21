import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [process.env.NEXT_AWS_S3_BUCKET_NAME + ".s3.amazonaws.com"],
  },
};

export default nextConfig;
