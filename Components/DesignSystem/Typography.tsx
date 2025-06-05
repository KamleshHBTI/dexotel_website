import React from 'react';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'body1' | 'body2' | 'caption';
  children: React.ReactNode;
  className?: string;
  color?: string;
  animate?: boolean;
}

const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className = '',
  color = 'inherit',
  animate = false,
}) => {
  const variants = {
    h1: 'text-5xl md:text-6xl font-bold',
    h2: 'text-4xl md:text-5xl font-bold',
    h3: 'text-3xl md:text-4xl font-semibold',
    h4: 'text-2xl md:text-3xl font-semibold',
    body1: 'text-xl md:text-2xl',
    body2: 'text-base md:text-lg',
    caption: 'text-sm md:text-base',
  };

  const getElement = () => {
    switch (variant) {
      case 'h1':
        return 'h1';
      case 'h2':
        return 'h2';
      case 'h3':
        return 'h3';
      case 'h4':
        return 'h4';
      default:
        return 'p';
    }
  };

  const Element = getElement();
  
  const content = React.createElement(
    Element,
    {
      className: `${variants[variant]} ${className}`,
      style: { color }
    },
    children
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
};

export default Typography; 