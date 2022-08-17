import NextCors from 'nextjs-cors';
import { NextApiRequest, NextApiResponse } from 'next';

import rateLimit from '../../../lib/rate-limit';
import RepositoryService from '../../../lib/repositories';

const limiter = rateLimit(
    {
        interval: 60 * 1000,
        uniqueTokenPerInterval: 500
    });

const Repositories = async(request: NextApiRequest, response: NextApiResponse) =>
{
    await NextCors(request, response,
        {
            methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
            origin: '*',
            optionsSuccessStatus: 200
        });

    const { method } = request;

    const repositoryService = new RepositoryService();

    switch (method)
    {
        case 'GET':
        {
            try
            {
                await limiter.check(response, 10, 'CACHE_TOKEN');

                const { items } = await repositoryService.GET();

                response.status(200).json({ status: 'success', items });
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

export default Repositories;
