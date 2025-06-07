"use client";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './Features.module.css';
import SectionTransition from '../ui/SectionTransition';

const features = [
  {
    title: 'Unified Communications',
    description: 'Integrate voice, video, and messaging in one powerful platform',
    icon: '🔄',
    image: '/images/unified-comms.png'
  },
  {
    title: 'Smart Analytics',
    description: 'Get real-time insights and detailed reporting on all communications',
    icon: '📊',
    image: '/images/analytics.png'
  },
  {
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and compliance with global standards',
    icon: '🔒',
    image: '/images/security.png'
  }
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={styles.featureCard}
    >
      <div className={styles.featureIcon}>{feature.icon}</div>
      <h3 className={styles.featureTitle}>{feature.title}</h3>
      <p className={styles.featureDescription}>{feature.description}</p>
      <div className={styles.imageContainer}>
        <Image
          src={feature.image}
          alt={feature.title}
          width={300}
          height={200}
          className={styles.featureImage}
        />
      </div>
    </motion.div>
  );
};

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <SectionTransition>
    <section className="theme-section theme-section-bg">
      <div className="theme-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className={styles.featuresHeader}
      >
        <h2 className="theme-heading">Powerful Features for Modern Business</h2>
        <p className="theme-subtitle text-theme-500 mb-12">
          Everything you need to streamline your communications and delight your customers
        </p>
      </motion.div>

      <div className={styles.featureGrid}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
    </SectionTransition>
  );
};

export default Features; 