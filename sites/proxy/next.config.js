module.exports = {
  async rewrites() {
    return [
      {
        source: '/url',
        destination: 'https://url-params-sibi-mono-frontends.vercel.app/'
      },
      {
        source: '/url/:path*',
        destination: 'https://url-params-sibi-mono-frontends.vercel.app/:path*'
      },
      {
        source: '/echo',
        destination: 'https://echo-test-sibi-mono-frontends.vercel.app/',
      },
      {
        source: '/echo/:path*',
        destination: 'https://echo-test-sibi-mono-frontends.vercel.app/:path*',
      },
    ]
  },
}
