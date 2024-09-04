'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from "./Blog.module.scss";

async function fetchPosts() {
    const response = await fetch('https://idncod.netlify.app/.netlify/functions/fetch-posts');
    const data = await response.json();

    if (!response.ok) {
        throw new Error('Failed to fetch posts');
    }

    return data;
}

export default function PostsPage() {
    const [posts, setPosts] = React.useState([]);
    const [error, setError] = React.useState(null);
    const router = useRouter();

    React.useEffect(() => {
        async function loadPosts() {
            try {
                const postsData = await fetchPosts();
                setPosts(postsData);
            } catch (error) {
                setError(error.message);
            }
        }

        loadPosts();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className={styles.container}>
            <h1>Blog</h1>
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