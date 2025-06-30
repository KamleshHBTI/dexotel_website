'use client';

import React from 'react';
import BlogEditor from '@/components/blog/Editor/BlogEditor';
import { useRouter } from 'next/navigation';

const NewBlogPost = () => {
  const router = useRouter();

  const handleSubmit = async (postData: any) => {
    try {
      // Here you would typically make an API call to save the blog post
      // For now, we'll just log it and redirect
      console.log('New blog post data:', postData);
      
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Redirect to the blog listing page
      router.push('/blog');
    } catch (error) {
      console.error('Error creating blog post:', error);
    }
  };

  return <BlogEditor onSubmit={handleSubmit} />;
};

export default NewBlogPost; 