import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

const ScrollMotion = (props: { delay?: number, className?: string, children: ReactNode }) =>
{
    const variants =
        {
            visible: { opacity: 1, transition: { delay: props.delay ?? 0 } },
            hidden: { opacity: 0 }
        };

    return (
        <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={ variants }
            className={ props.className }
        >
            { props.children }
        </motion.div>
    );
};

export default ScrollMotion;
