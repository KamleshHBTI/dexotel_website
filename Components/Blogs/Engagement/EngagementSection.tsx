import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '../types';

interface EngagementSectionProps {
  recommendedPosts: BlogPost[];
  onSubscribe: (email: string) => Promise<void>;
}

const EngagementSection: React.FC<EngagementSectionProps> = ({
  recommendedPosts,
  onSubscribe,
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await onSubscribe(email);
      setSubscribeStatus('success');
      setEmail('');
    } catch (error) {
      setSubscribeStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleShare = async (platform: 'twitter' | 'linkedin' | 'facebook') => {
    const url = window.location.href;
    const text = 'Check out this interesting article!';
    
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    };

    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

  return (
    <section className="bg-[#2b7360]/5 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Recommended Posts */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-[#2b7360]">Recommended for You</h2>
            <div className="space-y-6">
              {recommendedPosts.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex gap-4 items-start bg-white p-4 rounded-lg shadow-sm border-2 border-[#2b7360]/20 hover:border-[#2b7360] transition-colors"
                >
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <Image
                      src={post.featuredImage.url}
                      alt={post.featuredImage.alt}
                      fill
                      className="object-cover rounded-lg"
                      sizes="96px"
                    />
                  </div>
                  <div className="flex-grow">
                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="font-medium mb-2 text-gray-900 hover:text-[#2b7360] transition-colors">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Email Subscription and Social Sharing */}
          <div>
            <div className="bg-white p-8 rounded-xl shadow-sm border-2 border-[#2b7360]/20">
              <h2 className="text-2xl font-bold mb-4 text-[#2b7360]">Stay Updated</h2>
              <p className="text-gray-600 mb-6">
                Get the latest articles and insights delivered straight to your inbox.
              </p>
              <form onSubmit={handleSubscribe} className="mb-8">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg border-2 border-[#2b7360]/20 focus:outline-none focus:ring-2 focus:ring-[#2b7360]/20 focus:border-[#2b7360] transition-colors"
                    required
                    aria-label="Email subscription"
                  />
                  <AnimatePresence mode="wait">
                    {subscribeStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute -bottom-6 left-0 text-sm text-[#2b7360]"
                      >
                        Successfully subscribed!
                      </motion.div>
                    )}
                    {subscribeStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute -bottom-6 left-0 text-sm text-red-600"
                      >
                        Something went wrong. Please try again.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-8 w-full bg-[#2b7360] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#2b7360]/90 focus:outline-none focus:ring-2 focus:ring-[#2b7360]/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>

              <div>
                <h3 className="font-medium mb-4 text-[#2b7360]">Share this article</h3>
                <div className="flex gap-4">
                  <button
                    onClick={() => handleShare('twitter')}
                    className="p-2 rounded-full bg-[#2b7360]/5 hover:bg-[#2b7360]/10 text-[#2b7360] transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="p-2 rounded-full bg-[#2b7360]/5 hover:bg-[#2b7360]/10 text-[#2b7360] transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleShare('facebook')}
                    className="p-2 rounded-full bg-[#2b7360]/5 hover:bg-[#2b7360]/10 text-[#2b7360] transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementSection; 