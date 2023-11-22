// Importing env files here to validate on build
import "@sellgenix/env";

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  /** Enables hot reloading for local packages without a build step */
  transpilePackages: [
    "@sellgenix/api",
    "@sellgenix/auth",
    "@sellgenix/db",
    "@sellgenix/env",
  ],
  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default config;
