import React, { useState, useEffect } from 'react';
import FeaturedHero from './FeaturedHero/FeaturedHero';
import DiscoveryBar from './Discovery/DiscoveryBar';
import ArticleGrid from './ArticleGrid/ArticleGrid';
import EngagementSection from './Engagement/EngagementSection';
import { BlogPost, TopicChip, SearchResult } from './types';
import { motion } from 'framer-motion';

// Mock data - Replace with actual API calls
const mockTopics: TopicChip[] = [
  { id: '1', name: 'Technology', slug: 'technology' },
  { id: '2', name: 'Business', slug: 'business' },
  { id: '3', name: 'Marketing', slug: 'marketing' },
  { id: '4', name: 'Development', slug: 'development' },
  { id: '5', name: 'Design', slug: 'design' },
];

const mockTrendingTags = [
  'AI',
  'Machine Learning',
  'Cloud Computing',
  'Digital Transformation',
  'Customer Experience',
];

const BlogSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState<BlogPost[]>([]);
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>([]);
  const [recommendedPosts, setRecommendedPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with actual API calls
        // const response = await fetch('/api/articles');
        // const data = await response.json();
        
        // Mock data for demonstration
        const mockData: BlogPost[] = Array(10).fill(null).map((_, index) => ({
          id: `${index + 1}`,
          title: `Sample Article ${index + 1}`,
          slug: `sample-article-${index + 1}`,
          excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          content: '',
          featuredImage: {
            url: `https://source.unsplash.com/random/800x600?tech&sig=${index}`,
            alt: 'Article image',
            width: 800,
            height: 600,
          },
          category: {
            name: mockTopics[index % mockTopics.length].name,
            slug: mockTopics[index % mockTopics.length].slug,
          },
          author: {
            name: 'John Doe',
            avatar: 'https://source.unsplash.com/random/100x100?portrait',
          },
          readingTime: Math.floor(Math.random() * 10) + 5,
          publishedAt: new Date().toISOString(),
          tags: mockTrendingTags.slice(0, 3),
        }));

        setArticles(mockData);
        setFeaturedPosts(mockData.slice(0, 3));
        setRecommendedPosts(mockData.slice(3, 6));
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = async (query: string): Promise<SearchResult[]> => {
    // Replace with actual search API call
    // const response = await fetch(`/api/search?q=${query}`);
    // return response.json();

    // Mock search results
    return articles
      .filter((article) =>
        article.title.toLowerCase().includes(query.toLowerCase())
      )
      .map((article) => ({
        id: article.id,
        title: article.title,
        slug: article.slug,
        type: 'post',
      }));
  };

  const handleSubscribe = async (email: string): Promise<void> => {
    // Replace with actual subscription API call
    // await fetch('/api/subscribe', {
    //   method: 'POST',
    //   body: JSON.stringify({ email }),
    // });

    // Mock subscription
    await new Promise<void>((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <div className="space-y-12">
      <FeaturedHero featuredPosts={featuredPosts} />
      <DiscoveryBar
        topics={mockTopics}
        trendingTags={mockTrendingTags}
        onSearch={handleSearch}
      />
      <div className="bg-gray-50/50">
        <ArticleGrid articles={articles} isLoading={isLoading} />
      </div>
      <EngagementSection
        recommendedPosts={recommendedPosts}
        onSubscribe={handleSubscribe}
      />
    </div>
  );
};

export default BlogSection;
