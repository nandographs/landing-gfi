import React, { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

interface MotionViewportProps {
    children: ReactNode;
    className?: string;
    variants?: Variants;
    delay?: number;
    threshold?: number;
    once?: boolean;
}

const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.215, 0.61, 0.355, 1.0]
        }
    }
};

export const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

export const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

const MotionViewport: React.FC<MotionViewportProps> = ({
    children,
    className = "",
    variants = defaultVariants,
    threshold = 0.1,
    once = true
}) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount: threshold }}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default MotionViewport;
