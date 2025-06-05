import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TopicChip, SearchResult } from '../types';
import { useDebounce } from '@/hooks/useDebounce';

interface DiscoveryBarProps {
  topics: TopicChip[];
  trendingTags: string[];
  onSearch: (query: string) => Promise<SearchResult[]>;
}

const DiscoveryBar: React.FC<DiscoveryBarProps> = ({
  topics,
  trendingTags,
  onSearch,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    const handleSearch = async () => {
      if (debouncedSearchQuery.trim()) {
        setIsSearching(true);
        try {
          const results = await onSearch(debouncedSearchQuery);
          setSearchResults(results);
        } catch (error) {
          console.error('Search error:', error);
        } finally {
          setIsSearching(false);
        }
      } else {
        setSearchResults([]);
      }
    };

    handleSearch();
  }, [debouncedSearchQuery, onSearch]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const container = scrollContainerRef.current;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-white shadow-sm sticky top-0 z-10 border-y-2 border-[#2b7360]/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles, topics, or tags..."
              className="w-full px-4 py-2 rounded-lg border-2 border-[#2b7360]/20 focus:outline-none focus:ring-2 focus:ring-[#2b7360]/20 focus:border-[#2b7360] transition-colors"
            />
            {isSearching && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <div className="w-4 h-4 border-2 border-[#2b7360] border-t-transparent rounded-full animate-spin" />
              </div>
            )}
            {searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border-2 border-[#2b7360]/10 max-h-64 overflow-y-auto">
                {searchResults.map((result) => (
                  <button
                    key={result.id}
                    className="w-full px-4 py-2 text-left hover:bg-[#2b7360]/5 focus:outline-none focus:bg-[#2b7360]/5"
                    onClick={() => {
                      // Handle result selection
                    }}
                  >
                    <span className="text-sm font-medium">{result.title}</span>
                    <span className="text-xs text-gray-500 ml-2">
                      {result.type}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Topics Scroll */}
          <div className="relative">
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md border border-[#2b7360]/20 hover:border-[#2b7360] text-[#2b7360]"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <div
              ref={scrollContainerRef}
              className="flex space-x-2 overflow-x-auto scrollbar-hide py-2 px-8"
            >
              {topics.map((topic) => (
                <motion.button
                  key={topic.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-1 rounded-full text-sm font-medium whitespace-nowrap transition-colors border-2 ${
                    selectedTopic === topic.id
                      ? 'bg-[#2b7360] text-white border-[#2b7360]'
                      : 'bg-white border-[#2b7360]/20 text-[#2b7360] hover:border-[#2b7360]'
                  }`}
                  onClick={() => setSelectedTopic(topic.id)}
                >
                  {topic.name}
                </motion.button>
              ))}
            </div>
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md border border-[#2b7360]/20 hover:border-[#2b7360] text-[#2b7360]"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Trending Tags */}
          <div className="flex flex-wrap gap-2">
            {trendingTags.map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="px-2 py-1 text-xs bg-[#2b7360]/5 text-[#2b7360] rounded-md border border-[#2b7360]/10 hover:border-[#2b7360]/30 transition-colors cursor-pointer"
              >
                #{tag}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoveryBar; 