import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useSpring } from 'framer-motion';
import { BlogPost as BlogPostType } from '../types';

interface BlogPostProps {
  post: BlogPostType;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    // Estimate reading time based on word count
    const wordCount = post.content.trim().split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200); // Assuming 200 words per minute
    console.log(`Estimated reading time: ${readingTime} minutes`);
  }, [post.content]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleShare = async (platform: 'twitter' | 'linkedin' | 'facebook') => {
    const url = window.location.href;
    const text = `Check out this article: ${post.title}`;
    
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    };

    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
      {/* Reading Progress Bar */}
      <motion.div className="reading-progress" style={{ scaleX }} />

      <article className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <header className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 text-sm font-medium bg-[#2b7360]/10 text-[#2b7360] rounded-full ${isDarkMode ? 'bg-opacity-20' : ''}`}>
                  {post.category.name}
                </span>
                <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {post.readingTime} min read
                </span>
              </div>
              <h1 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {post.title}
              </h1>
            </div>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-[#2b7360]/10 hover:bg-[#2b7360]/20 transition-colors"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? '🌞' : '🌙'}
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="ml-3">
                <span className={`font-medium block ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {post.author.name}
                </span>
                <time className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
            </div>

            {/* Social Share Buttons */}
            <div className="flex gap-2 no-print">
              <button
                onClick={() => handleShare('twitter')}
                className="social-share-button bg-[#1DA1F2]/10 text-[#1DA1F2] hover:bg-[#1DA1F2]/20"
                aria-label="Share on Twitter"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
                Tweet
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="social-share-button bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2]/20"
                aria-label="Share on LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Share
              </button>
              <button
                onClick={() => handleShare('facebook')}
                className="social-share-button bg-[#1877F2]/10 text-[#1877F2] hover:bg-[#1877F2]/20"
                aria-label="Share on Facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Share
              </button>
              <button
                onClick={handlePrint}
                className="social-share-button bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                aria-label="Print article"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                Print
              </button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-[21/9] mb-8 rounded-xl overflow-hidden">
          <Image
            src={post.featuredImage.url}
            alt={post.featuredImage.alt}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div
          className={`blog-content prose ${
            isDarkMode ? 'prose-invert' : ''
          } max-w-none`}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className={`px-3 py-1 text-sm font-medium bg-[#2b7360]/10 text-[#2b7360] rounded-full ${
                  isDarkMode ? 'bg-opacity-20' : ''
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Comments Section Placeholder */}
        <div className="mt-12 no-print">
          <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Comments
          </h2>
          <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <p className={`text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Comments are coming soon!
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost; 