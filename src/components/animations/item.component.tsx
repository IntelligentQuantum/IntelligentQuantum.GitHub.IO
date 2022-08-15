import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

const ItemMotion = (props: { index: number, className?: string, children: ReactNode }) =>
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
            viewport={{ once: true }}
            className={ props.className }
            variants={ variants }
            custom={ props.index }
        >
            { props.children }
        </motion.li>
    );
};

export default ItemMotion;
