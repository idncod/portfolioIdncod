'use client'
import { useEffect, useState } from 'react';
import { firestore } from '../../firebase';
import styles from '../page.module.scss'
const BlogPost = ({ title, content, date }) => {
  console.log('Rendering BlogPost with props:', title, content, date);
  const postDate = date.toDate();

  return (
    <div className="blog-post-container">
      <h3>{title}</h3>
      <p>{content}</p>
      <p>{postDate.toLocaleDateString()}</p>
    </div>
  );
};

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const blogPostsSnapshot = await firestore.collection('blogPosts').get();
        const fetchedBlogPosts = blogPostsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBlogPosts(fetchedBlogPosts);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <div className="blog-page">
      <h1 className={styles.blog}>Blog will be available on May 20th</h1>
      <div className="blog-posts">
        {blogPosts.map(post => (
          <BlogPost
            key={post.id}
            title={post.title}
            content={post.content}
            date={post.date}
          />
        ))}
            {/*ADD THESE UNDERLINES WITH CUSTOM COLOURS TO THE BLOG TO THE LINKED WORDS: https://tailwindcss.com/docs/text-decoration-color*/}

      </div>
    </div>
  );
};

export default Blog;