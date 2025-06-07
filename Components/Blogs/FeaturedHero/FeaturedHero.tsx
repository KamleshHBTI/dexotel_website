import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '../types';
import { motion } from 'framer-motion';

interface FeaturedHeroProps {
  featuredPosts: BlogPost[];
}

const FeaturedHero: React.FC<FeaturedHeroProps> = ({ featuredPosts }) => {
  if (!featuredPosts.length) return null;

  const [mainPost, ...secondaryPosts] = featuredPosts;

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Featured Post */}
        <motion.div 
          className="lg:col-span-8 relative h-[600px] group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href={`/blog/${mainPost.slug}`}>
            <div className="relative w-full h-full overflow-hidden rounded-2xl border-2 border-[#2b7360]/20 hover:border-[#2b7360] transition-colors">
              <Image
                src={mainPost.featuredImage.url}
                alt={mainPost.featuredImage.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2b7360]/90 via-[#2b7360]/40 to-transparent" />
              <div className="absolute bottom-0 p-8 w-full">
                <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-white bg-[#2b7360] rounded-full">
                  {mainPost.category.name}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {mainPost.title}
                </h2>
                <div className="flex items-center text-white/80 text-sm">
                  <span>{mainPost.author.name}</span>
                  <span className="mx-2">•</span>
                  <span>{mainPost.readingTime} min read</span>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Secondary Posts Grid */}
        <div className="lg:col-span-4 grid grid-cols-1 gap-6">
          {secondaryPosts.slice(0, 2).map((post, index) => (
            <motion.div
              key={post.id}
              className="relative h-[290px] group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative w-full h-full overflow-hidden rounded-xl border-2 border-[#2b7360]/20 hover:border-[#2b7360] transition-colors">
                  <Image
                    src={post.featuredImage.url}
                    alt={post.featuredImage.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2b7360]/90 via-[#2b7360]/40 to-transparent" />
                  <div className="absolute bottom-0 p-6 w-full">
                    <span className="inline-block px-3 py-1 mb-3 text-xs font-medium text-white bg-[#2b7360] rounded-full">
                      {post.category.name}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-white/90">
                      {post.title}
                    </h3>
                    <div className="flex items-center text-white/80 text-xs">
                      <span>{post.readingTime} min read</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedHero; 