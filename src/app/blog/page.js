import React from 'react';
import ClientPostsPage from './ClientPostsPage';
import styles from './Blog.module.scss';

async function fetchPosts() {
    const isServer = typeof window === 'undefined';
    const baseURL = isServer
        ? process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000'
        : '';
    try {
        const response = await fetch(`${baseURL}/api/posts`);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Fetched posts:', data);
        return data;

    } catch (error) {
        console.error('Failed to fetch posts:', error);
        return [];
    }
}


export default async function PostsPage() {
    let posts = [];
    try {
        posts = await fetchPosts();
    } catch (error) {
        console.error('Error fetching posts:', error);
    }

    return (
        <div>
            {posts.length === 0 ? (
                <div>No posts available.</div>
            ) : (
                <ClientPostsPage posts={posts} />
            )}
        </div>
    );
}