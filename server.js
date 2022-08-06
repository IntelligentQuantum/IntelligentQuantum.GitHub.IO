const next = require('next');
const { parse } = require('url');
const { createServer } = require('http');

const hostname = process.env.HOST;
const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() =>
{
    createServer(async(req, res) =>
    {
        try
        {
            const parsedUrl = parse(req.url, true);

            await handle(req, res, parsedUrl);
        }
        catch (err)
        {
            console.error('Error occurred handling', req.url, err);

            res.statusCode = 500;
            res.end('internal server error');
        }
    })
        .listen((port), (err) =>
        {
            if (err)
                throw err;

            console.log(`> Ready on http://${ hostname }:${ port }`);
        });
});
