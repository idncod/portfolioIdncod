'use client'
import { useEffect, useState } from 'react';
import styles from '../page.module.scss';

const BlogPost = ({ title, content, date }) => {
    console.log('Rendering BlogPost with props:', title, content, date);
    const postDate = new Date(date); // Convert date string to Date object

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
                // Replace with your API endpoint to fetch blog posts
                const response = await fetch('/api/blog-posts');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setBlogPosts(data);
            } catch (error) {
                console.error('Error fetching blog posts:', error);
            }
        };

        fetchBlogPosts();
    }, []);

    return (
        <div className="blog-page">
            <h1 className={styles.blog}>This page is under maintenance</h1>
            <div className="blog-posts">
                {blogPosts.map(post => (
                    <BlogPost
                        key={post.id}
                        title={post.title}
                        content={post.content}
                        date={post.date}
                    />
                ))}
                {/* ADD THESE UNDERLINES WITH CUSTOM COLOURS TO THE BLOG TO THE LINKED WORDS: https://tailwindcss.com/docs/text-decoration-color */}
            </div>
        </div>
    );
};

export default Blog;
