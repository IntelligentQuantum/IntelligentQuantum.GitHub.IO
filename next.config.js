const nextTranslate = require('next-translate');

/** @type {import('next').NextConfig} */
const nextConfig =
{
    images:
    {
        domains: ['avatars.githubusercontent.com'],
        loader: 'akamai'
    },
    ...nextTranslate(),
    reactStrictMode: true,
    swcMinify: true
};

module.exports = nextConfig;
