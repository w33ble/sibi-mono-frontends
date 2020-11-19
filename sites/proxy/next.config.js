module.exports = {
  async rewrites() {
    return [
      {
        source: '/url',
        destination: 'https://url-params-sibi-mono-frontends.vercel.app/url/'
      },
      {
        source: '/url/:path*',
        destination: 'https://url-params-sibi-mono-frontends.vercel.app/url/:path*'
      },
      {
        source: '/echo',
        destination: 'https://echo-test-sibi-mono-frontends.vercel.app/echo/',
      },
      {
        source: '/echo/:path*',
        destination: 'https://echo-test-sibi-mono-frontends.vercel.app/echo/:path*',
      },
    ]
  },
}
