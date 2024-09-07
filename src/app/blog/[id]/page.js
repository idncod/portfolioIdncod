import React from 'react';

async function fetchPost(id) {
    const response = await fetch(`https://idncod.netlify.app/.netlify/functions/fetch-posts?id=${id}`, {
        cache: 'no-store', // Ensures fresh data on each request
    });
    if (!response.ok) {
        throw new Error('Failed to fetch post');
    }
    const data = await response.json();
    return data;
}

export default async function PostPage({ params }) {
    const { id } = params;

    try {
        const post = await fetchPost(id);
        return (
            <div>
                <h1>{post.id}</h1>
                <div>{post.content}</div>
            </div>
        );
    } catch (error) {
        return <div>Error: {error.message}</div>;
    }
}
