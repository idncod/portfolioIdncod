import React from 'react';
import { useRouter } from 'next/router';
import styles from "./Blog.module.scss";

async function fetchPosts() {
    const response = await fetch('https://idncod.netlify.app/.netlify/functions/fetch-posts');
    const data = await response.json();

    if (!response.ok) {
        throw new Error('Failed to fetch posts');
    }

    return data;
}

// Move the data fetching to getServerSideProps
export async function getServerSideProps() {
    try {
        const posts = await fetchPosts();
        return {
            props: { posts },
        };
    } catch (error) {
        return {
            props: { error: error.message },
        };
    }
}

export default function PostsPage({ posts, error }) {
    const router = useRouter();

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.cardContainer}>
                {posts.map((post) => (
                    <div
                        key={post.id}
                        className={styles.card}
                        onClick={() => router.push(`/blog/${post.id}`)}
                    >
                        <h2 className={styles.title}>{post.title}</h2>
                        <p className={styles.content}>{post.content.substring(0, 100)}...</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
