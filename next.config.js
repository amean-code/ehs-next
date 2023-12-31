/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n:{
    locales: ['tr','en'],
    defaultLocale: 'en',
  }
}

module.exports = nextConfig
