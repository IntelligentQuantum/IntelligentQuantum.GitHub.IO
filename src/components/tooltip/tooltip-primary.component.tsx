import Tooltip from '@tippyjs/react';
import React, { ReactElement } from 'react';
import { animated, useSpring } from 'react-spring';

import stylesTooltip from '../../styles/components/tooltip.module.scss';

const TooltipPrimary = (props: { title?: string, placement?: 'top' | 'bottom' | 'left' | 'right', render?: ReactElement | number, light?: boolean, children: ReactElement }) =>
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
            animation={true}
            onMount={onMount}
            onHide={onHide}
            placement={props?.placement ?? 'top'}
            render={() =>
                (
                    props?.render
                        ?
                        <animated.span style={spring}>
                            { props.render }
                        </animated.span>
                        :
                        <animated.span
                            style={spring}
                            data-dark={props?.light}
                            className={stylesTooltip.tooltip}
                        >
                            { props.title }
                        </animated.span>
                )}
        >
            { props.children }
        </Tooltip>
    );
};

export default TooltipPrimary;
