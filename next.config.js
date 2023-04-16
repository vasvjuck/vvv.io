/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['tailwindui.com', 'images.unsplash.com', 'img.icons8.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig
