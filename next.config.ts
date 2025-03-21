import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: `${process.env.NEXT_AWS_S3_BUCKET_NAME}.s3.amazonaws.com`,
      },
    ],
  },
};

export default nextConfig;
