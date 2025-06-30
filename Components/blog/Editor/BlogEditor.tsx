import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { BlogPost } from '../types';
import type ReactQuillType from 'react-quill';

interface CustomReactQuillProps {
  forwardedRef: React.RefObject<ReactQuillType>;
  value?: string;
  onChange: (content: string) => void;
  className?: string;
  theme?: string;
  preserveWhitespace?: boolean;
  modules?: any;
}

// Dynamic import of the rich text editor to avoid SSR issues
const ReactQuill = dynamic<CustomReactQuillProps>(
  async () => {
    const { default: RQ } = await import('react-quill');
    return function comp({ forwardedRef, ...props }) {
      return <RQ ref={forwardedRef} {...props} />;
    };
  },
  { ssr: false }
);
import 'react-quill/dist/quill.snow.css';

interface BlogEditorProps {
  onSubmit: (post: Partial<BlogPost>) => Promise<void>;
  initialData?: Partial<BlogPost>;
}

const BlogEditor: React.FC<BlogEditorProps> = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState<Partial<BlogPost>>({
    title: initialData?.title || '',
    content: initialData?.content || '',
    excerpt: initialData?.excerpt || '',
    author: initialData?.author || {
      name: '',
      avatar: '',
    },
    featuredImage: initialData?.featuredImage || {
      url: '',
      alt: '',
      width: 800,
      height: 600,
    },
    category: initialData?.category || {
      name: '',
      slug: '',
    },
    tags: initialData?.tags || [],
    publishedAt: initialData?.publishedAt || new Date().toISOString(),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const quillRef = useRef<ReactQuillType>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      featuredImage: {
        ...prev.featuredImage!,
        [name]: value,
      },
    }));
  };

  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tags = e.target.value.split(',').map((tag) => tag.trim());
    setFormData((prev) => ({
      ...prev,
      tags,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await onSubmit(formData);
    } catch (error) {
      console.error('Error submitting blog post:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {initialData ? 'Edit Blog Post' : 'Create New Blog Post'}
            </h1>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-[#2b7360]/10 hover:bg-[#2b7360]/20 transition-colors"
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? '🌞' : '🌙'}
            </button>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Title */}
            <div>
              <label htmlFor="title" className={`block font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 rounded-lg border-2 border-[#2b7360]/20 focus:outline-none focus:ring-2 focus:ring-[#2b7360]/20 focus:border-[#2b7360] transition-colors bg-white dark:bg-gray-800 dark:text-white"
                placeholder="Enter blog post title"
              />
            </div>

            {/* Author */}
            <div>
              <label htmlFor="authorName" className={`block font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                Author Name
              </label>
              <input
                type="text"
                id="authorName"
                name="author.name"
                value={formData.author?.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 rounded-lg border-2 border-[#2b7360]/20 focus:outline-none focus:ring-2 focus:ring-[#2b7360]/20 focus:border-[#2b7360] transition-colors bg-white dark:bg-gray-800 dark:text-white"
                placeholder="Enter author name"
              />
            </div>

            {/* Featured Image */}
            <div>
              <label htmlFor="imageUrl" className={`block font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                Featured Image URL
              </label>
              <input
                type="url"
                id="imageUrl"
                name="url"
                value={formData.featuredImage?.url}
                onChange={handleImageChange}
                required
                className="w-full px-4 py-2 rounded-lg border-2 border-[#2b7360]/20 focus:outline-none focus:ring-2 focus:ring-[#2b7360]/20 focus:border-[#2b7360] transition-colors bg-white dark:bg-gray-800 dark:text-white"
                placeholder="Enter image URL"
              />
            </div>

            {/* Image Alt Text */}
            <div>
              <label htmlFor="imageAlt" className={`block font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                Image Alt Text
              </label>
              <input
                type="text"
                id="imageAlt"
                name="alt"
                value={formData.featuredImage?.alt}
                onChange={handleImageChange}
                required
                className="w-full px-4 py-2 rounded-lg border-2 border-[#2b7360]/20 focus:outline-none focus:ring-2 focus:ring-[#2b7360]/20 focus:border-[#2b7360] transition-colors bg-white dark:bg-gray-800 dark:text-white"
                placeholder="Enter image alt text"
              />
            </div>

            {/* Category */}
            <div>
              <label htmlFor="category" className={`block font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                Category
              </label>
              <input
                type="text"
                id="category"
                name="category.name"
                value={formData.category?.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 rounded-lg border-2 border-[#2b7360]/20 focus:outline-none focus:ring-2 focus:ring-[#2b7360]/20 focus:border-[#2b7360] transition-colors bg-white dark:bg-gray-800 dark:text-white"
                placeholder="Enter category"
              />
            </div>

            {/* Tags */}
            <div>
              <label htmlFor="tags" className={`block font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                Tags (comma-separated)
              </label>
              <input
                type="text"
                id="tags"
                name="tags"
                value={formData.tags?.join(', ')}
                onChange={handleTagsChange}
                className="w-full px-4 py-2 rounded-lg border-2 border-[#2b7360]/20 focus:outline-none focus:ring-2 focus:ring-[#2b7360]/20 focus:border-[#2b7360] transition-colors bg-white dark:bg-gray-800 dark:text-white"
                placeholder="Enter tags, separated by commas"
              />
            </div>

            {/* Excerpt */}
            <div>
              <label htmlFor="excerpt" className={`block font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                Excerpt
              </label>
              <textarea
                id="excerpt"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full px-4 py-2 rounded-lg border-2 border-[#2b7360]/20 focus:outline-none focus:ring-2 focus:ring-[#2b7360]/20 focus:border-[#2b7360] transition-colors bg-white dark:bg-gray-800 dark:text-white"
                placeholder="Enter blog post excerpt"
              />
            </div>

            {/* Content */}
            <div>
              <label htmlFor="content" className={`block font-medium mb-2 ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
                Content
              </label>
              <div className="prose max-w-none">
                <div className="quill-wrapper">
                  <ReactQuill
                    forwardedRef={quillRef}
                    value={formData.content}
                    onChange={(content: string) => setFormData((prev) => ({ ...prev, content }))}
                    className={isDarkMode ? 'dark-editor' : ''}
                    theme="snow"
                    preserveWhitespace
                    modules={{
                      toolbar: [
                        [{ header: [1, 2, 3, 4, 5, 6, false] }],
                        ['bold', 'italic', 'underline', 'strike'],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                        [{ indent: '-1' }, { indent: '+1' }],
                        ['link', 'image'],
                        ['clean'],
                      ],
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-[#2b7360] text-white rounded-lg font-medium hover:bg-[#2b7360]/90 focus:outline-none focus:ring-2 focus:ring-[#2b7360]/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? 'Saving...' : 'Save Blog Post'}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default BlogEditor; 