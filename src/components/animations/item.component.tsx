import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

const ItemMotion = (props: { index: number, active?: boolean, className?: string, onClick?: any, children: ReactNode }) =>
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
            className={ props.className }
            variants={ variants }
            custom={ props.index }
            viewport={{ once: true }}
            onClick={ props.onClick }
            data-active={ props.active }
        >
            { props.children }
        </motion.li>
    );
};

export default ItemMotion;
