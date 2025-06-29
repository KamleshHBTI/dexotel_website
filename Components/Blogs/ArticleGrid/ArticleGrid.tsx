import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '../types';

interface ArticleGridProps {
  articles: BlogPost[];
  isLoading: boolean;
}

const ArticleCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <motion.article
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="group relative bg-white rounded-xl overflow-hidden shadow-sm border-2 border-[#2b7360]/20 hover:border-[#2b7360] transition-colors"
  >
    <Link href={`/blog/${post.slug}`}>
      <div className="aspect-[16/9] relative overflow-hidden">
        <Image
          src={post.featuredImage.url}
          alt={post.featuredImage.alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2b7360]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2 py-1 text-xs font-medium bg-[#2b7360]/10 text-[#2b7360] rounded">
            {post.category.name}
          </span>
          <span className="text-xs text-gray-500">{post.readingTime} min read</span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-[#2b7360] transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
          {post.excerpt}
        </p>
        <div className="flex items-center">
          <Image
            src={post.author.avatar}
            alt={post.author.name}
            width={32}
            height={32}
            className="rounded-full"
          />
          <div className="ml-3">
            <span className="text-sm font-medium block text-gray-900">{post.author.name}</span>
            <time className="text-xs text-gray-500">
              {new Date(post.publishedAt).toLocaleDateString()}
            </time>
          </div>
        </div>
      </div>
    </Link>
  </motion.article>
);

const SkeletonCard = () => (
  <div className="bg-white rounded-xl overflow-hidden shadow-sm border-2 border-[#2b7360]/10">
    <div className="aspect-[16/9] relative bg-[#2b7360]/5 animate-pulse" />
    <div className="p-6">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-20 h-6 bg-[#2b7360]/5 rounded animate-pulse" />
        <div className="w-24 h-6 bg-[#2b7360]/5 rounded animate-pulse" />
      </div>
      <div className="w-3/4 h-7 bg-[#2b7360]/5 rounded mb-2 animate-pulse" />
      <div className="space-y-2 mb-4">
        <div className="w-full h-4 bg-[#2b7360]/5 rounded animate-pulse" />
        <div className="w-2/3 h-4 bg-[#2b7360]/5 rounded animate-pulse" />
      </div>
      <div className="flex items-center">
        <div className="w-8 h-8 bg-[#2b7360]/5 rounded-full animate-pulse" />
        <div className="ml-3">
          <div className="w-24 h-4 bg-[#2b7360]/5 rounded animate-pulse" />
          <div className="w-20 h-3 bg-[#2b7360]/5 rounded mt-1 animate-pulse" />
        </div>
      </div>
    </div>
  </div>
);

const ArticleGrid: React.FC<ArticleGridProps> = ({ articles, isLoading }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {isLoading
          ? Array(6).fill(null).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <SkeletonCard />
              </motion.div>
            ))
          : articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ArticleCard post={article} />
              </motion.div>
            ))}
      </div>
    </div>
  );
};

export default ArticleGrid; 