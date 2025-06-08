"use client";
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles.videoContainer}>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className={styles.backgroundVideo}
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        <div className={`${styles.overlay} bg-gradient-to-b from-theme-900/70 to-theme-950/50`} />
      </div>

      <div className={`${styles.content} theme-container`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.heroContent}
        >
          <h1 className={`${styles.title} text-white`}>
            Transform Your Business Communications
          </h1>
          <p className={`${styles.subtitle} text-white-200`}>
            Unified cloud communications platform that helps businesses deliver exceptional customer experiences
          </p>
          <div className="flex justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="theme-button"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="theme-button bg-white text-theme"
            >
              Watch Demo
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 grid grid-cols-3 gap-8"
          >
            <div className="text-center">
              <h3 className="text-4xl font-bold text-white mb-2">500+</h3>
              <p className="text-gray-300">Global Clients</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-white mb-2">99.9%</h3>
              <p className="text-gray-300">Uptime</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold text-white mb-2">24/7</h3>
              <p className="text-gray-300">Support</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 