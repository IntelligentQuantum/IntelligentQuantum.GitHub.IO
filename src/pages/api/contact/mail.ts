import fetch from 'node-fetch';
import validator from 'validator';
import NextCors from 'nextjs-cors';
import { NextApiRequest, NextApiResponse } from 'next';

import rateLimit from '../../../lib/rate-limit';
import Fingerprint from '../fingerprint';

const limiter = rateLimit(
    {
        interval: 60 * 1000,
        uniqueTokenPerInterval: 500
    });

const Contact = async(request: NextApiRequest, response: NextApiResponse) =>
{
    await NextCors(request, response,
        {
            methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
            origin: 'https://parsa-firoozi.ir',
            optionsSuccessStatus: 200
        });

    const { method, body } = request;

    switch (method)
    {
        case 'POST':
        {
            try
            {
                if (process.env.WEBHOOK_URL && body?.name && validator.isEmail(body?.email) && body?.message)
                {
                    await limiter.check(response, 10, 'CACHE_TOKEN');

                    await fetch(process.env.WEBHOOK_URL,
                        {
                            method: 'post',
                            headers:
                                {
                                    'Content-Type': 'application/json'
                                },
                            body: JSON.stringify(
                                {
                                    embeds:
                                        [
                                            {
                                                color: 5412066,
                                                title: `New message from ${ body?.name?.toString() }`,
                                                fields:
                                                    [
                                                        {
                                                            name: 'Name',
                                                            value: `\`${ body?.name?.toString() }\``,
                                                            inline: true
                                                        },
                                                        {
                                                            name: 'Email',
                                                            value: `\`${ body?.email?.toString() }\``,
                                                            inline: true
                                                        },
                                                        {
                                                            name: 'Message',
                                                            value: `\`\`\`${ body?.message?.toString() }\`\`\``,
                                                            inline: false
                                                        }
                                                    ],
                                                timestamp: new Date().toISOString()
                                            }
                                        ]
                                })
                        });

                    response.status(200).json({ status: 'success' });
                }
                else
                    response.status(500).json({ status: 'fail', message: 'The fields are not completed' });
            }
            catch (error)
            {
                console.log(error);

                response.status(500).json({ status: 'fail', message: 'Internal error' });
            }

            break;
        }

        default:
        {
            response.status(500).json({ status: 'fail', message: 'This route was not found' });

            break;
        }
    }
};

export default Contact;
