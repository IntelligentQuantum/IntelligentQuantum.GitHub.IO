import NextCors from 'nextjs-cors';
import { NextApiRequest, NextApiResponse } from 'next';

import rateLimit from '../../../lib/rate-limit';
import OrganizationService from '../../../lib/organizations';

const limiter = rateLimit(
    {
        interval: 60 * 1000,
        uniqueTokenPerInterval: 500
    });

const Organizations = async(request: NextApiRequest, response: NextApiResponse) =>
{
    await NextCors(request, response,
        {
            methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
            origin: '*',
            optionsSuccessStatus: 200
        });

    const { method } = request;

    const organizationService = new OrganizationService();

    switch (method)
    {
        case 'GET':
        {
            try
            {
                await limiter.check(response, 10, 'CACHE_TOKEN');

                const { items } = await organizationService.GET();

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

export default Organizations;
