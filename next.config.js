module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://holaplex.com/api/:path*', // Proxy to Holaplex Hub API
      },
    ];
  },
};