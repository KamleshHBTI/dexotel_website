import React from 'react';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'full';
  background?: 'white' | 'primary' | 'secondary' | 'gradient';
  spacing?: 'sm' | 'md' | 'lg';
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  containerSize = 'lg',
  background = 'white',
  spacing = 'lg',
}) => {
  const backgrounds = {
    white: 'bg-white',
    primary: 'bg-[#2b7360] text-white',
    secondary: 'bg-gray-100',
    gradient: 'bg-gradient-to-b from-[#2b7360] to-[#1a4d3e] text-white',
  };

  const spacings = {
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-24',
  };

  return (
    <section className={`${backgrounds[background]} ${spacings[spacing]} ${className}`}>
      <Container size={containerSize}>{children}</Container>
    </section>
  );
};

export default Section; 