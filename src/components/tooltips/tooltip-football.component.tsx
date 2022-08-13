import React from 'react';
import Image from 'next/image';

import stylesHobbies from '../../styles/pages/hobbies.module.scss';

const TooltipFootball = (props: { player: any }) =>
    (
        <ul className={stylesHobbies.hobbiesBoxContentImagesTooltip}>
            <li>
                <span>
                    {
                        props?.player?.profile
                            ?
                            <Image
                                src={ props?.player?.profile }
                                alt={ props?.player?.name + ' ' + props?.player?.last_name }
                                layout='intrinsic'
                                width={46}
                                height={60}
                            />
                            :
                            null
                    }
                </span>

                <div>
                    <p>
                        Full Name:
                    </p>
                    <span>
                        { props?.player?.name + ' ' + props?.player?.last_name }
                    </span>
                    <p>
                        Position:
                    </p>
                    <span>
                        {props?.player?.info?.position}
                    </span>
                </div>
            </li>
            <li>
                <p>
                    Height:
                </p>
                <span>
                    {props?.player?.info?.height}m
                </span>
            </li>
            <li>
                <p>
                    Games:
                </p>
                <span>
                    {props?.player?.stats?.games}
                </span>
            </li>
            <li>
                <p>
                    Goals:
                </p>
                <span>
                    {props?.player?.stats?.goals}
                </span>
            </li>
            <li>
                <p>
                    Assists:
                </p>
                <span>
                    {props?.player?.stats?.assists}
                </span>
            </li>
        </ul>
    );

export default TooltipFootball;
