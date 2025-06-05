interface GreenOverlayProps {
  children: React.ReactNode;
  opacity?: number;
  className?: string;
}

const GreenOverlay = ({ children, opacity = 40, className = '' }: GreenOverlayProps) => {
  return (
    <div className={`relative ${className}`}>
      <div 
        className="absolute inset-0 bg-theme z-10"
        style={{ opacity: opacity / 100 }}
      />
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
};

export default GreenOverlay; 