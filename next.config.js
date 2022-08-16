const nextTranslate = require('next-translate');

/** @type {import('next').NextConfig} */
const nextConfig =
{
    images:
    {
        domains: ['avatars.githubusercontent.com'],
        loader: 'akamai',
        path: '/images'
    },
    ...nextTranslate(),
    reactStrictMode: true,
    swcMinify: true
};

module.exports = nextConfig;
