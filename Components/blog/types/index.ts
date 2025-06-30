export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: {
    url: string;
    alt: string;
    width: number;
    height: number;
  };
  category: {
    name: string;
    slug: string;
  };
  author: {
    name: string;
    avatar: string;
  };
  readingTime: number;
  publishedAt: string;
  tags: string[];
}

export interface TopicChip {
  id: string;
  name: string;
  slug: string;
}

export interface SearchResult {
  id: string;
  title: string;
  slug: string;
  type: 'post' | 'category' | 'tag';
}

export interface ReaderPreferences {
  recentCategories: string[];
  readArticles: string[];
  interests: string[];
} 