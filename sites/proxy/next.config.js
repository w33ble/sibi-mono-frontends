module.exports = {
  async rewrites() {
    return [
      {
        source: '/echo',
        destination: 'https://echo-test-sibi-mono-frontends.vercel.app/'
      },
      {
        source: '/url',
        destination: 'https://url-params-sibi-mono-frontends.vercel.app/'
      },
      {
        source: '/url/:match',
        destination: 'https://url-params-sibi-mono-frontends.vercel.app/:match'
      },
    ]
  },
}