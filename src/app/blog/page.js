import React from 'react';
import styles from './Blog.module.scss';

const BlogPage = async () => {
    let posts = [];
    let errorMessage = '';

    try {
        const res = await fetch(process.env.POSTS_URL + '/posts');

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        posts = await res.json();
    } catch (error) {
        console.error('Error fetching posts:', error);
        errorMessage = 'Error fetching posts';
    }

    return (
        <div className={styles.container}>
            {errorMessage ? (
                <div>{errorMessage}</div>
            ) : (
                posts.map(post => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <p>{new Date(post.created_at).toLocaleDateString()}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default BlogPage;
