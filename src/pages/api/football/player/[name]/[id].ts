import { JSDOM } from 'jsdom';
import NextCors from 'nextjs-cors';
import { NextApiRequest, NextApiResponse } from 'next';

import rateLimit from '../../../../../lib/rate-limit';
import FootballService from '../../../../../lib/football';

const limiter = rateLimit(
    {
        interval: 60 * 1000,
        uniqueTokenPerInterval: 500
    });

const Id = async(request: NextApiRequest, response: NextApiResponse) =>
{
    await NextCors(request, response,
        {
            methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
            origin: '*',
            optionsSuccessStatus: 200
        });

    const { method, query } = request;

    const footballService = new FootballService();

    switch (method)
    {
        case 'GET':
        {
            try
            {
                if (query?.name && query?.id)
                {
                    await limiter.check(response, 50, 'CACHE_TOKEN');

                    const { player } = await footballService.Player(query.name as string, query.id as string);

                    if (player)
                        response.status(200).json({ status: 'success', player });
                    else
                        response.status(500).json({ status: 'fail', message: 'This player was not found' });
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

export default Id;
