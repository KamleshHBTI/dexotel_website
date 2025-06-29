'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { industries } from '../data';
import Typography from '@/Components/DesignSystem/Typography';
import Button from '@/Components/DesignSystem/Button';
import Section from '@/Components/DesignSystem/Section';

const IndustryDetails = () => {
  const { slug } = useParams();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const industry = industries.find(ind => ind.id === slug);

  if (!industry) {
    return <div>Industry not found</div>;
  }

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <Section background="secondary" spacing="lg">
        <div className="theme-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              {industry.icon && <industry.icon className="text-theme-500 text-4xl" />}
              <Typography variant="h1" className="text-white">
                {industry.name} Solutions
              </Typography>
            </div>
            <Typography variant="body1" className="text-gray-300 mb-8">
              {industry.heroSubtitle}
            </Typography>
            <Button
              variant="primary"
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="theme-button px-8 py-4 text-lg"
            >
              Consult our experts
            </Button>
          </motion.div>
        </div>
      </Section>

      {/* Overview Section */}
      <Section background="secondary" spacing="lg">
        <div className="theme-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h2" className="text-white mb-6">
                Industry Overview
              </Typography>
              <Typography variant="body1" className="text-gray-300">
                {industry.description}
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[300px]"
            >
              <object
                data={industry.heroImage}
                type="image/svg+xml"
                className="w-full h-full"
                aria-label={`${industry.name} illustration`}
              />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Section background="secondary" spacing="lg">
        <div className="theme-container">
          <Typography variant="h2" className="text-white mb-12 text-center">
            Key Features
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Seamless Integration',
                description: 'Effortlessly connect our platform with your existing systems',
                icon: '🔄'
              },
              {
                title: 'Real-time Analytics',
                description: 'Make data-driven decisions with comprehensive insights',
                icon: '📊'
              },
              {
                title: 'Automated Workflows',
                description: 'Streamline operations with intelligent automation',
                icon: '⚡'
              },
              {
                title: 'Secure Communications',
                description: 'Enterprise-grade security for all interactions',
                icon: '🔒'
              },
              {
                title: 'Scalable Solutions',
                description: 'Grow your business with flexible infrastructure',
                icon: '📈'
              },
              {
                title: '24/7 Support',
                description: 'Expert assistance whenever you need it',
                icon: '🎯'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 p-6 rounded-lg"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <Typography variant="h3" className="text-white mb-2">
                  {feature.title}
                </Typography>
                <Typography variant="body2" className="text-gray-400">
                  {feature.description}
                </Typography>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Success Stories Section */}
      <Section background="secondary" spacing="lg">
        <div className="theme-container">
          <Typography variant="h2" className="text-white mb-12 text-center">
            Success Stories
          </Typography>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900 p-8 rounded-lg max-w-3xl mx-auto"
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gray-800 rounded-full mr-4" />
              <div>
                <Typography variant="h3" className="text-white">
                  Company Name
                </Typography>
                <Typography variant="body2" className="text-gray-400">
                  Industry Leader
                </Typography>
              </div>
            </div>
            <Typography variant="body1" className="text-gray-300 mb-6">
              "Implementing Dexotel's solutions transformed our communication infrastructure, 
              resulting in a 40% increase in customer satisfaction and 25% reduction in operational costs."
            </Typography>
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'Satisfaction', value: '+40%' },
                { label: 'Cost Reduction', value: '-25%' },
                { label: 'Response Time', value: '-60%' }
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <Typography variant="h3" className="text-theme-500">
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" className="text-gray-400">
                    {stat.label}
                  </Typography>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="secondary" spacing="lg">
        <div className="theme-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Typography variant="h2" className="text-white mb-6">
              Ready to Transform Your {industry.name} Communications?
            </Typography>
            <Typography variant="body1" className="text-gray-300 mb-8">
              Join leading {industry.name.toLowerCase()} organizations that trust Dexotel 
              for their critical communication needs.
            </Typography>
            <Button
              variant="primary"
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="theme-button px-8 py-4 text-lg"
            >
              Get Started Today
            </Button>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default IndustryDetails; 