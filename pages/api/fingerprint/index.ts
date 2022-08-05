import requestIp from 'request-ip';
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

export default async (request: NextApiRequest, response: NextApiResponse) =>
{
    await dbConnect();
    const fingerprints = await FingerprintEntity.find();

    console.log(fingerprints);

    try
    {
        const ip = requestIp.getClientIp(request);
        const fingerprint = fingerPrinter.fingerprint(request);

        const newFingerprint = new FingerprintEntity(
            {
                ip,
                fingerprint,
                createdAt: Date.now()
            }
        );

        newFingerprint.save();

        response.status(200).json({ status: 'success' });
    }
    catch (error)
    {
        console.log(error);

        response.status(500).json({ status: 'fail' });
    }
};
