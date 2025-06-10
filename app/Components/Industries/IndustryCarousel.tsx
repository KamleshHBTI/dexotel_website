import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Industry } from '@/app/Industries/data';
import Button from '@/Components/DesignSystem/Button';
import Image from 'next/image';

interface IndustryCarouselProps {
  industries: Industry[];
}

const IndustryCarousel: React.FC<IndustryCarouselProps> = ({ industries }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % industries.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + industries.length) % industries.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };
  type PaletteKey = "primary" | "secondary" | "tertiary";
  const palette: Record<PaletteKey, string> = { primary: "#f00", secondary: "#0f0", tertiary: "#00f" };
  const myKey: PaletteKey = "secondary"; // ← should be PaletteKey ideally
  const variantStyles = {
    primary: 'bg-gradient-to-br from-blue-900 to-indigo-800',
    secondary: 'bg-gradient-to-br from-purple-900 to-indigo-800',
    tertiary: 'bg-gradient-to-br from-gray-900 to-slate-800',
  };

  return (
    <div className={`relative min-h-[80vh] flex items-center justify-center overflow-hidden ${variantStyles[myKey]}`}
    aria-labelledby="hero-title">
      <AnimatePresence initial={true} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute w-full h-full"
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0">
              <object
                data={industries[currentIndex].heroImage}
                type="image/svg+xml"
                className="w-full h-full"
                aria-label={`${industries[currentIndex].name} background`}
              >
                <Image
                  src={industries[currentIndex].heroImage}
                  alt={industries[currentIndex].name}
                  fill
                  className="object-cover"
                  priority
                  quality={90}
                />
              </object>
            </div>
            <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
              <div className="flex items-center space-x-4 mb-6">
                <object
                  data={industries[currentIndex].heroImage}
                  type="image/svg+xml"
                  className="w-12 h-12 text-white"
                  aria-label={`${industries[currentIndex].name} icon`}
                >
                  <Image
                    src={industries[currentIndex].heroImage}
                    width={48}
                    height={48}
                    alt={`${industries[currentIndex].name} icon`}
                    className="text-white"
                  />
                </object>
                <motion.h1 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-5xl font-bold text-white"
                >
                  {industries[currentIndex].name}
                </motion.h1>
              </div>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-white mb-8 max-w-2xl"
              >
                {industries[currentIndex].heroSubtitle}
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Button variant="primary" size="lg">
                  Consult our experts
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all z-20 group"
        aria-label="Previous slide"
      >
        <Image
          src="/images/navigation/prev-arrow.svg"
          width={32}
          height={32}
          alt="Previous"
          className="w-8 h-8 text-white group-hover:scale-110 transition-transform"
        />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all z-20 group"
        aria-label="Next slide"
      >
        <Image
          src="/images/navigation/next-arrow.svg"
          width={32}
          height={32}
          alt="Next"
          className="w-8 h-8 text-white group-hover:scale-110 transition-transform"
        />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {industries.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white scale-125 shadow-lg shadow-white/30' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default IndustryCarousel; 