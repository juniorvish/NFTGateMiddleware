module.exports = {
  async rewrites() {
    return [
      {
        source: '/gatedRoute',
        destination: '/api/tokenGate',
      },
    ];
  },
};