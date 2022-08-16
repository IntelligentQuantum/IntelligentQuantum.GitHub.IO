import React from 'react';
import Tippyjs from '@tippyjs/react';
import * as Popper from '@popperjs/core';
import { animated, useSpring } from 'react-spring';

import styles from './tooltip.module.scss';

interface TooltipProps
{
    content: string,
    children: React.ReactElement;
    interactive?: boolean;
    placement?: Popper.Placement;
    light?: boolean;
}

const Tooltip = ({ content, children, interactive, placement, light }: TooltipProps) =>
{
    const stylesConfig =
    {
        tension: 1300,
        friction: 20
    };

    const initialStyles =
    {
        transform: 'scale(1)',
        opacity: 0
    };

    const [spring, setSpring] = useSpring(() => initialStyles);

    const onMount = () =>
    {
        setSpring({ opacity: 1, config: stylesConfig });
    };

    const onHide = ({ unmount }: any) =>
    {
        setSpring({ ...initialStyles, onRest: unmount, config: { ...stylesConfig, clamp: true } });
    };

    return (
        <Tippyjs
            interactive={interactive}
            animation={true}
            onMount={onMount}
            onHide={onHide}
            placement={placement ?? 'top'}
            render={() => (
                <animated.span
                    style={spring}
                    data-dark={light}
                    className={styles.tooltip}
                >
                    {content}
                </animated.span>
            )}
        >
            {children}
        </Tippyjs>
    );
};

export default Tooltip;
