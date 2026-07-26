/** @type {import('next').NextConfig} */

// This prototype is published to GitHub Pages under a project path
// (https://<user>.github.io/apex-technical-services/), so the app is served
// from a base path rather than the domain root. `BASE_PATH` lets a root
// deployment (or local dev) override it with an empty string.
const basePath = process.env.BASE_PATH ?? (process.env.NODE_ENV === 'production' ? '/apex-technical-services' : '');

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
  basePath,
  // Exposed to client code so <Image> src values (which don't inherit basePath
  // when images are unoptimized) can be prefixed via the asset() helper.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};
export default nextConfig;
