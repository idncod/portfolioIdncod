'use client'
import React from 'react';
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
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id} className={styles.postItem}>
                        <h2 className={styles.title}>{post.title}</h2>
                        <p className={styles.content}>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
