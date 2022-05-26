/** @type {import('next').NextConfig} */
const path = require('path');
const withReactSvg = require('next-react-svg');

const nextConfig = withReactSvg(
    {
        reactStrictMode: true,
        sassOptions:
            {
                includePaths: [path.join(__dirname, 'styles')],
            },
        include: path.resolve(__dirname, 'assets/icons'),
        webpack(config, options)
        {
            return config
        }
    });

module.exports = nextConfig;
