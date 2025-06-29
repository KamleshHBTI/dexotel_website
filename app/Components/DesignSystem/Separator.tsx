import React from 'react';

interface SeparatorProps {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}

const Separator: React.FC<SeparatorProps> = ({ 
  className = '',
  orientation = 'horizontal' 
}) => {
  const baseStyles = "bg-gray-200";
  const orientationStyles = orientation === 'horizontal' 
    ? 'h-px w-full' 
    : 'w-px h-full';

  return (
    <div 
      role="separator"
      className={`${baseStyles} ${orientationStyles} ${className}`}
    />
  );
};

export default Separator; 