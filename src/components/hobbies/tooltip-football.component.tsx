import React from 'react';
import Image from 'next/image';

import stylesHobbies from '../../styles/pages/hobbies.module.scss';

type Props =
    {
        player: any
    };

const TooltipFootball = ({ player }: Props) =>
    (
        <ul className={stylesHobbies.hobbiesBoxContentImagesTooltip}>
            <li>
                <span>
                    {
                        player?.profile
                            ? (
                                <Image
                                    src={ player?.profile }
                                    alt={ player?.name + ' ' + player?.last_name }
                                    layout='intrinsic'
                                    width={46}
                                    height={60}
                                />
                            ) : null
                    }
                </span>
                <div>
                    <p>
                        Full Name:
                    </p>
                    <span>
                        { player?.name + ' ' + player?.last_name }
                    </span>
                    <p>
                        Position:
                    </p>
                    <span>
                        { player?.info?.position }
                    </span>
                </div>
            </li>
            <li>
                <p>
                    Height:
                </p>
                <span>
                    { player?.info?.height }m
                </span>
            </li>
            <li>
                <p>
                    Games:
                </p>
                <span>
                    { player?.stats?.games }
                </span>
            </li>
            <li>
                <p>
                    Goals:
                </p>
                <span>
                    { player?.stats?.goals }
                </span>
            </li>
            <li>
                <p>
                    Assists:
                </p>
                <span>
                    { player?.stats?.assists }
                </span>
            </li>
        </ul>
    );

export default TooltipFootball;
