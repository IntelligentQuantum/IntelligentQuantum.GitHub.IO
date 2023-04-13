const nextConfig =
    {
        webpack(config)
        {
            config.module.rules.push({ test: /\.svg$/, use: ['@svgr/webpack'] });

            return config;
        },
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
        swcMinify: true,
        staticPageGenerationTimeout: 100000
    };

module.exports = nextConfig;
