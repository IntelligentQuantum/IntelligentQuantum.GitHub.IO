const nextTranslate = require('next-translate-plugin');

/** @type {import('next').NextConfig} */
const nextConfig =
{
    images:
    {
        domains: ['avatars.githubusercontent.com']
    },
    ...nextTranslate(),
    reactStrictMode: true,
    swcMinify: true
};

module.exports = nextConfig;
