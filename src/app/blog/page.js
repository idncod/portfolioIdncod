import React from 'react';
import styles from './Blog.module.scss'
const BlogPage = async () => {
    const res = await fetch(process.env.POSTS_URL + '/posts');
    const posts = await res.json();

    if (res.status !== 200) {
        console.error('Failed to fetch posts:', posts.error);
        return <div>Error fetching posts</div>;
    }

    return (
        <div className={styles.container}>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <p>{new Date(post.created_at).toLocaleDateString()}</p>
                </div>
            ))}
        </div>
    );
};

export default BlogPage;
