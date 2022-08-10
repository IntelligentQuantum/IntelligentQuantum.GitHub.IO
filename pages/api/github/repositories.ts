import axios from 'axios';
import NextCors from 'nextjs-cors';
import {NextApiRequest, NextApiResponse} from 'next';

import type { IRepository } from '../../../interfaces/repository';

import rateLimit from '../../../lib/rate-limit';

const limiter = rateLimit(
    {
        interval: 60 * 1000,
        uniqueTokenPerInterval: 500
    });

export default async(request: NextApiRequest, response: NextApiResponse) =>
{
    await NextCors(request, response,
        {
            methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
            origin: '*',
            optionsSuccessStatus: 200
        });

    const { method } = request;

    switch (method)
    {
        case 'GET':
        {
            try
            {
                await limiter.check(response, 10, 'CACHE_TOKEN');

                const { data } = await axios.get(
                    'https://api.github.com/users/im-parsa/repos',
                    {
                        headers:
                            {
                                'Authorization': `token ${process.env.GITHUB_ACCESS_TOKEN}`
                            }
                    });

                response.status(200).json(
                    {
                        status: 'success',
                        items:
                        [
                            ...data
                                .filter((repo: IRepository) =>
                                {
                                    return repo?.stargazers_count >= 10
                                })
                                .sort((firstRepo: IRepository, secondRepo: IRepository) =>
                                {
                                    return secondRepo?.stargazers_count - firstRepo?.stargazers_count
                                })
                        ]
                    });
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
