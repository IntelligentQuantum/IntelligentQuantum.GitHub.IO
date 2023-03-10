import axios from 'axios';
import { JSDOM } from 'jsdom';

import { arrayFilter } from '../utils';

export class FootballService
{
    public async Player(name: string, id: string)
    {
        try
        {
            const { data } = await axios.get(`https://www.transfermarkt.com/${ name }/leistungsdatendetails/spieler/${ id }`);
            const dom = new JSDOM(data);

            const playerName = arrayFilter(dom.window.document.querySelector('.data-header__headline-wrapper')?.textContent?.split(' '));
            const playerInfo = dom.window.document.querySelectorAll('.data-header__label');
            const playerStats = dom.window.document.querySelectorAll('.zentriert');

            if (playerName[1])
            {
                return {
                    player:
                        {
                            id,
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
                };
            }
            else
                return { status: 'fail', statusCode: 500, message: 'This player was not found' };
        }
        catch (error)
        {
            return { status: 'fail', statusCode: 500, message: 'Internal error' };
        }
    }
}

export default FootballService;
