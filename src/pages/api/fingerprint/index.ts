import requestIp from 'request-ip';
import NextCors from 'nextjs-cors';
import rateLimit from '../../../lib/rate-limit';
import { NextApiRequest, NextApiResponse } from 'next';
import { BrowserFingerprint } from 'browser_fingerprint';

import dbConnect from '../../../middlewares/mongodb';
import FingerprintEntity from '../../../entities/fingerprint.entity';

const limiter = rateLimit(
    {
        interval: 60 * 1000,
        uniqueTokenPerInterval: 500
    });

const fingerPrinter = new BrowserFingerprint(
    {
        cookieKey: '__browser_fingerprint__',
        toSetCookie: true,
        onlyStaticElements: true,
        settings:
            {
                path: '/',
                expires: 3600000,
                httpOnly: null
            }
    });

const Fingerprint = async(request: NextApiRequest, response: NextApiResponse) =>
{
    await NextCors(request, response,
        {
            methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
            origin: 'https://parsa-firoozi.ir',
            optionsSuccessStatus: 200
        });

    try
    {
        await limiter.check(response, 100, 'CACHE_TOKEN');

        await dbConnect();

        const ip = requestIp.getClientIp(request);
        const { fingerprint } = fingerPrinter.fingerprint(request);

        const fetchFingerprint = await FingerprintEntity.findOne({ ip, fingerprint });

        if (!fetchFingerprint)
        {
            const newFingerprint = new FingerprintEntity(
                {
                    ip,
                    fingerprint
                }
            );

            newFingerprint.save();
        }

        response.status(200).json({ status: 'success' });
    }
    catch (error)
    {
        console.log(error);

        response.status(500).json({ status: 'fail' });
    }
};

export default Fingerprint;
