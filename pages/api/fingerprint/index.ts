import requestIp from 'request-ip';
import NextCors from 'nextjs-cors';
import { NextApiRequest, NextApiResponse } from 'next';
import { BrowserFingerprint } from 'browser_fingerprint';

import dbConnect from '../../../middlewares/mongodb';
import FingerprintEntity from '../../../entities/fingerprint.entity';

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

export default async(request: NextApiRequest, response: NextApiResponse) =>
{
    await NextCors(request, response,
        {
            methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
            origin: '*',
            optionsSuccessStatus: 200
        });

    try
    {
        await dbConnect();

        const ip = requestIp.getClientIp(request);
        const { fingerprint } = fingerPrinter.fingerprint(request);

        const fetchFingerprint = await FingerprintEntity.find({ ip, fingerprint });

        if (!fetchFingerprint)
        {
            const newFingerprint = new FingerprintEntity(
                {
                    ip,
                    fingerprint,
                    createdAt: Date.now()
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
