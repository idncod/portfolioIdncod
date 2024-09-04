'use client'
import React from 'react';
import { notFound } from 'next/navigation';
import styles from '../Post.module.scss';
async function fetchPost(id) {
    const response = await fetch(`https://idncod.netlify.app/.netlify/functions/fetch-posts?id=${id}`);

    if (!response.ok) {
        throw new Error('Failed to fetch post');
    }

    const data = await response.json();

    if (!data) {
        return null;
    }

    return data;
}

export default async function PostPage({ params }) {
    const { id } = params;
    let post;

    try {
        post = await fetchPost(id);
    } catch (error) {
        console.error('Error fetching post:', error);
        return <div>Error fetching post data. Please try again later.</div>;
    }

    if (!post || !post.title || !post.content) {
        return <div>Post data is missing or incomplete</div>;
    }

    return (
        <div className={styles}>
            <h1>{post.title}</h1>
            <div>{post.content}</div>
        </div>
    );
}
