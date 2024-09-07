import React from 'react';
import ClientPostsPage from './ClientPostsPage';
import styles from './Blog.module.scss';

async function fetchPosts() {
    const response = await fetch('https://idncod.netlify.app/.netlify/functions/fetch-posts');
    if (!response.ok) {
        throw new Error('Failed to fetch posts');
    }
    return response.json();
}

export default async function PostsPage() {
    let posts = [];
    try {
        posts = await fetchPosts();
    } catch (error) {
        console.error('Error fetching posts:', error);
    }

    return <ClientPostsPage posts={posts} />;
}
