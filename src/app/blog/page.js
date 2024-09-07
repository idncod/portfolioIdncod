import React from 'react';
import ClientPostsPage from './ClientPostsPage';
import styles from './Blog.module.scss';

async function fetchPosts() {
    try {
        const response = await fetch('/api/posts');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.json();
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