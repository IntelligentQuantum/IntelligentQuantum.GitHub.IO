import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

type Props =
    {
        className?: string,
        delay?: number,
        children: ReactNode
    };

const ScrollMotion = ({ delay, className, children }: Props) =>
{
    const variants =
        {
            visible: { opacity: 1, transition: { delay: delay ?? 0 } },
            hidden: { opacity: 0 }
        };

    return (
        <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={ variants }
            className={ className }
        >
            { children }
        </motion.div>
    );
};

export default ScrollMotion;
