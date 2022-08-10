/** @type {import('next').NextConfig} */
const path = require('path');
const withReactSvg = require('next-react-svg');

const nextConfig = withReactSvg(
    {
        reactStrictMode: true,
        sassOptions:
            {
                includePaths: [path.join(__dirname, 'src/styles')]
            },
        include: path.resolve(__dirname, 'src/public/static/icons'),
        webpack(config)
        {
            return config;
        }
    });

module.exports = nextConfig;
