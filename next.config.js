/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'propcliq.s3.us-east-1.amazonaws.com',
            pathname: '**',
          },
        ],
    },
};
module.exports = nextConfig;