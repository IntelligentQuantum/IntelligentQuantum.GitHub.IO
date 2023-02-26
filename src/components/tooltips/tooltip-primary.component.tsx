import Tooltip from '@tippyjs/react';
import React, { ReactElement } from 'react';
import { animated, useSpring } from 'react-spring';

import stylesTooltip from '../../styles/components/tooltip.module.scss';

type Props =
    {
        content?: string | number | null,
        interactive?: boolean,
        placement?: 'top' | 'bottom' | 'left' | 'right',
        render?: ReactElement, light?: boolean,
        children: ReactElement
    };

const TooltipPrimary = ({ content, interactive, placement, render, light, children }: Props) =>
{
    const stylesConfig =
        {
            tension: 300,
            friction: 15
        };
    const initialStyles =
        {
            transform: 'scale(1)',
            opacity: 0
        };

    const [spring, setSpring] = useSpring(() => initialStyles);

    const onMount = () =>
    {
        setSpring(
            {
                opacity: 1,
                onRest: () =>
                {},
                config: stylesConfig
            });
    };

    const onHide = ({ unmount }: any) =>
    {
        setSpring(
            {
                ...initialStyles,
                onRest: unmount,
                config:
                    {
                        ...stylesConfig,
                        clamp: true
                    }
            });
    };

    return (
        <Tooltip
            interactive={ interactive }
            animation={ true }
            onMount={ onMount }
            onHide={ onHide }
            placement={ placement ?? 'top' }
            render={() =>
                (
                    render
                        ?
                        <animated.span style={ spring }>
                            { render }
                        </animated.span>
                        :
                        content
                            ?
                            <animated.span
                                style={ spring }
                                data-dark={ light }
                                className={stylesTooltip.tooltip}
                                data-placement={ placement ?? 'top' }
                            >
                                { content }
                            </animated.span>
                            :
                            null
                )}
        >
            { children }
        </Tooltip>
    );
};

export default TooltipPrimary;
