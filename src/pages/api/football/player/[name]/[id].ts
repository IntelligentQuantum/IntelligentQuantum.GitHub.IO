import axios from 'axios';
import { JSDOM } from 'jsdom';
import NextCors from 'nextjs-cors';
import { NextApiRequest, NextApiResponse } from 'next';

import { arrayFilter } from '../../../../../utils';
import rateLimit from '../../../../../lib/rate-limit';

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

    switch (method)
    {
        case 'GET':
        {
            try
            {
                if (query?.name && query.id)
                {
                    await limiter.check(response, 50, 'CACHE_TOKEN');

                    const { data } = await axios.get(`https://www.transfermarkt.com/${ query.name }/leistungsdatendetails/spieler/${ query.id }`);
                    const dom = new JSDOM(data);

                    const playerName = arrayFilter(dom.window.document.querySelector('.data-header__headline-wrapper')?.textContent?.split(' '));
                    const playerInfo = dom.window.document.querySelectorAll('.data-header__label');
                    const playerStats = dom.window.document.querySelectorAll('.zentriert');

                    if (playerName[1])
                    {
                        response.status(200).json(
                            {
                                status: 'success',
                                player:
                                    {
                                        id: query.id,
                                        name: playerName[1],
                                        last_name: playerName[2],
                                        shirt_number: playerName[0]?.split('#')[1],
                                        profile: dom.window.document.querySelector('.data-header__profile-image')?.getAttribute('src'),
                                        stats:
                                            {
                                                games: playerStats[7]?.textContent,
                                                goals: playerStats[8]?.textContent,
                                                assists: playerStats[9]?.textContent
                                            },
                                        info:
                                            {
                                                height: arrayFilter(playerInfo[6]?.textContent?.split(' '))[1],
                                                position:
                                                    arrayFilter(playerInfo[7]?.textContent?.split(' '))[1] + ' ' +
                                                    arrayFilter(playerInfo[7]?.textContent?.split(' '))[2] ?? ''
                                            }
                                    }
                            });
                    }
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
