"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CTO at TechCorp',
    company: 'TechCorp',
    image: '/images/testimonials/sarah.jpg',
    quote: 'Implementing this solution transformed our customer service operations. The unified platform saved us countless hours and improved customer satisfaction by 40%.',
    logo: '/images/companies/techcorp.png'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Head of Operations',
    company: 'GlobalServe',
    image: '/images/testimonials/michael.jpg',
    quote: 'The analytics capabilities are outstanding. We can now make data-driven decisions about our communication strategy and optimize our customer interactions.',
    logo: '/images/companies/globalserve.png'
  },
  {
    id: 3,
    name: 'Emma Williams',
    role: 'Customer Success Director',
    company: 'InnovateNow',
    image: '/images/testimonials/emma.jpg',
    quote: 'The platform\'s reliability and security features give us peace of mind. Our team can focus on what matters most - delivering exceptional service to our customers.',
    logo: '/images/companies/innovatenow.png'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="theme-section theme-section-bg">
      <div className="theme-container text-center">
        <h2 className="theme-heading text-theme">Trusted by Industry Leaders</h2>
        <p className="theme-subtitle text-theme-500">See what our customers have to say about their experience</p>
      </div>

      <div className={styles.carousel}>
        <button
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={prevTestimonial}
          aria-label="Previous testimonial"
        >
          ←
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className={styles.testimonialCard}
          >
            <div className={styles.testimonialContent}>
              <div className={styles.quoteIcon}>"</div>
              <p className={styles.quote}>{testimonials[currentIndex].quote}</p>
              <div className={styles.author}>
                <div className={styles.authorImage}>
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    width={60}
                    height={60}
                  />
                </div>
                <div className={styles.authorInfo}>
                  <h4 className={styles.authorName}>{testimonials[currentIndex].name}</h4>
                  <p className={styles.authorRole}>{testimonials[currentIndex].role}</p>
                  <div className={styles.companyLogo}>
                    <Image
                      src={testimonials[currentIndex].logo}
                      alt={testimonials[currentIndex].company}
                      width={100}
                      height={40}
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={nextTestimonial}
          aria-label="Next testimonial"
        >
          →
        </button>
      </div>

      <div className={styles.trustIndicators}>
        <div className={styles.indicator}>
          <span className={styles.metric}>500+</span>
          <span className={styles.label}>Enterprise Clients</span>
        </div>
        <div className={styles.indicator}>
          <span className={styles.metric}>99.9%</span>
          <span className={styles.label}>Uptime SLA</span>
        </div>
        <div className={styles.indicator}>
          <span className={styles.metric}>24/7</span>
          <span className={styles.label}>Support</span>
          </div>
        </div>
      </section>
  );
};

export default Testimonials; 