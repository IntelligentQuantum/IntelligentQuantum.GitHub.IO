import type { NextApiRequest, NextApiResponse } from 'next';

import rateLimit from '../../utils/rate-limit.util';

const limiter = rateLimit({
    interval: 60 * 1000,
    uniqueTokenPerInterval: 50
});

export default async(req: NextApiRequest, res: NextApiResponse) =>
{
    if (req.method === 'POST')
    {
        const { name, email, message } = req.body;

        if (!name || name.trim() === '' || !email || !email.includes('@') || !message || message.trim() === '')
        {
            res.status(422).json({ message: 'Please fill in all fields.' });
            return;
        }

        try
        {
            await limiter.check(res, 2, 'CACHE_TOKEN');

            await fetch(process.env.DISCORD_WEBHOOK_URL as string, {
                method: 'post',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({
                    embeds:
                    [
                        {
                            color: 5412066,
                            title: `New message from ${ name.toString() }`,
                            fields:
                            [
                                {
                                    name: 'Name',
                                    value: `\`${ name.toString() }\``,
                                    inline: true
                                },
                                {
                                    name: 'Email',
                                    value: `\`${ email.toString() }\``,
                                    inline: true
                                },
                                {
                                    name: 'Message',
                                    value: `\`\`\`${ message.toString() }\`\`\``,
                                    inline: false
                                }
                            ],
                            timestamp: new Date().toISOString()
                        }
                    ]
                })
            });

            res.status(200).json({ status: 'success' });
        }
        catch (error)
        {
            res.status(500).json({ status: 'fail', message: 'Internal error' });
        }
    }
};
