import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
import withPlaiceholder from '@plaiceholder/next';

/** @type {import('next').NextConfig} */
const nextConfig = {};

if (process.env.NODE_ENV === 'development') {
  (async () => {
    await setupDevPlatform();
  })();
}

export default withPlaiceholder(nextConfig);
