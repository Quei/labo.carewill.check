module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['ja', 'en'],
    defaultLocale: 'ja',
  },
  images: {
    domains: ['images.ctfassets.net'],
  },
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/interviews',
        destination: '/',
        permanent: false,
      },
      {
        source: '/interviews/',
        destination: '/',
        permanent: false,
      },
      {
        source: '/interviews/:slug*/',
        destination: '/',
        permanent: false,
      },
    ];
  },
};
