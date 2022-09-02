/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env:{
    MONGO_DB : process.env.MONGO_DB,
    SECRET_KEY: process.env.SECRET_KEY,
    API_URL: process.env.API_URL
  }
}

module.exports = nextConfig
