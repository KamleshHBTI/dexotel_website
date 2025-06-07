import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'full';
  padding?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'lg',
  padding = true,
}) => {
  const sizes = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    full: 'max-w-full',
  };

  return (
    <div
      className={`mx-auto w-full ${sizes[size]} ${
        padding ? 'px-4 md:px-6 lg:px-8' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Container; 