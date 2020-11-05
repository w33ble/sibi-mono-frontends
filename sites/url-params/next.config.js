module.exports = {
  basePath: '/url',
    async redirects() {
      return [
        {
          source: '/',
          destination: '/url',
          permanent: true,
        },
      ]
    }
}
