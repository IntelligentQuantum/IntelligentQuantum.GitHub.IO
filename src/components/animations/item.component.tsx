import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

type Props =
    {
        index: number,
        active?: boolean,
        className?: string,
        onClick?: any,
        children: ReactNode
    };

const ItemMotion = ({ index, active, className, onClick, children }: Props) =>
{
    const variants =
        {
            visible: (index: number) => ({ opacity: 1, transition: { delay: index * .3 }}),
            hidden: { opacity: 0 }
        };

    return (
        <motion.li
            initial='hidden'
            whileInView='visible'
            className={ className }
            variants={ variants }
            custom={ index }
            viewport={{ once: true }}
            onClick={ onClick }
            data-active={ active }
        >
            { children }
        </motion.li>
    );
};

export default ItemMotion;
