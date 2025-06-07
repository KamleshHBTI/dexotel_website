import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
}

const FadeIn = ({ 
  children, 
  delay = 0, 
  direction = 'up', 
  duration = 0.5 
}: FadeInProps) => {
  const directions = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction]
      }}
      animate={{
        opacity: 1,
        y: 0,
        x: 0
      }}
      transition={{
        duration: duration,
        delay: delay,
        ease: 'easeOut'
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn; 