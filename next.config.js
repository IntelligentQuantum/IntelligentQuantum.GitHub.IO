const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig =
    {
        i18n:
            {
                locales: ['en', 'de', 'fa'],
                defaultLocale: 'en'
            },
        images:
            {
                domains:
                    [
                        'img.a.transfermarkt.technology',
                        'avatars.githubusercontent.com'
                    ],
            },
        reactStrictMode: true,
        include: path.resolve(__dirname, 'public/static/icons'),
        swcMinify: true
    };

module.exports = nextConfig;
