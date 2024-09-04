'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import styles from "./Post.module.scss";

async function fetchPost(id) {
    const response = await fetch(`https://idncod.netlify.app/.netlify/functions/fetch-posts?id=${id}`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error('Failed to fetch post');
    }

    return data;
}

export default function PostPage({ params }) {
    const { id } = params;
    const [post, setPost] = React.useState(null);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        async function loadPost() {
            try {
                const postData = await fetchPost(id);
                setPost(postData);
            } catch (error) {
                setError(error.message);
            }
        }

        loadPost();
    }, [id]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.content}>{post.content}</p>
        </div>
    );
}
