'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import BlogPost from '@/components/blog/BlogPost/BlogPost';
import { BlogPost as BlogPostType } from '@/components/blog/types';

const BlogPostPage = () => {
  const { slug } = useParams();

  // Mock data - Replace with actual API call
  const post: BlogPostType = {
    id: '1',
    title: 'Understanding React Native Databases',
    slug: 'understanding-react-native-databases',
    excerpt: 'A comprehensive guide to choosing and implementing databases in React Native applications.',
    content: `
      <h2>Introduction</h2>
      <p>When building React Native applications, choosing the right database is crucial for your app's performance and functionality. This guide will help you understand the various database options available and how to choose the best one for your needs.</p>

      <h2>Popular Database Options</h2>
      <ul>
        <li>SQLite - A lightweight, serverless database</li>
        <li>Realm - A fast, modern database for mobile apps</li>
        <li>Firebase - A comprehensive backend solution</li>
        <li>AsyncStorage - Simple key-value storage</li>
      </ul>

      <h2>Factors to Consider</h2>
      <p>When choosing a database for your React Native application, consider the following factors:</p>
      <ul>
        <li>Data complexity and structure</li>
        <li>Offline capabilities</li>
        <li>Scalability requirements</li>
        <li>Performance needs</li>
        <li>Development team expertise</li>
      </ul>

      <h2>Implementation Examples</h2>
      <p>Here are some example implementations for different database solutions:</p>
      <pre><code>
// SQLite Example
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {
    name: 'MainDB',
    location: 'default',
  },
  () => {},
  error => { console.log(error) }
);

// Realm Example
import Realm from 'realm';

const TaskSchema = {
  name: 'Task',
  properties: {
    _id: 'int',
    name: 'string',
    status: 'string',
  },
};

// Firebase Example
import firestore from '@react-native-firebase/firestore';

const addData = async () => {
  try {
    await firestore()
      .collection('Users')
      .add({
        name: 'John Doe',
        age: 30,
      });
  } catch (error) {
    console.error(error);
  }
};
      </code></pre>

      <h2>Conclusion</h2>
      <p>Choosing the right database is essential for building successful React Native applications. Consider your specific needs and requirements when making this decision, and don't hesitate to experiment with different solutions to find the best fit for your project.</p>
    `,
    featuredImage: {
      url: 'https://source.unsplash.com/random/1200x630?tech',
      alt: 'React Native Databases',
      width: 1200,
      height: 630,
    },
    category: {
      name: 'Development',
      slug: 'development',
    },
    author: {
      name: 'John Doe',
      avatar: 'https://source.unsplash.com/random/100x100?portrait',
    },
    readingTime: 8,
    publishedAt: new Date().toISOString(),
    tags: ['React Native', 'Database', 'Mobile Development', 'SQLite', 'Firebase'],
  };

  return <BlogPost post={post} />;
};

export default BlogPostPage; 