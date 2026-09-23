import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS === "true";
const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isGithubPages && repository ? `/${repository}` : "",
  assetPrefix: isGithubPages && repository ? `/${repository}/` : "",
};

export default nextConfig;
