'use client';

import React from 'react';
import styles from './Blog.module.scss';

function ClientPostsPage({ posts }) {
    const handlePostClick = (postId) => {
        window.location.href = `/blog/${postId}`;
    };

    return (
        <div className={styles.container}>
            <div className={styles.cardContainer}>
                {posts.map((post) => (
                    <div
                        key={post.id}
                        className={styles.card}
                        onClick={() => handlePostClick(post.id)}
                    >
                        <h2 className={styles.title}>{post.title}</h2>
                        <p className={styles.content}>{post.content.substring(0, 100)}...</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ClientPostsPage;
