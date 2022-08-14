/** @type {import('next').NextConfig} */
const nextConfig =
{
    images:
    {
        domains: ['avatars.githubusercontent.com']
    },
    reactStrictMode: true,
    swcMinify: true
};

module.exports = nextConfig;
