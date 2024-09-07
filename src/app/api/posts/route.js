import { NextResponse } from 'next/server';
import { query } from '../../../lib/db';
import NodeCache from 'node-cache';

// Initialize a cache with a time-to-live of 5 minutes
const cache = new NodeCache({ stdTTL: 60 * 5 });

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = 10; // Number of posts per page
    const offset = (page - 1) * limit;

    // Check the cache first
    const cacheKey = `posts_page_${page}`;
    const cachedPosts = cache.get(cacheKey);

    if (cachedPosts) {
        return NextResponse.json(cachedPosts);
    }

    try {
        // Fetch posts with pagination and reduced fields
        const posts = await query('SELECT id, title, content FROM posts ORDER BY created_at DESC LIMIT ? OFFSET ?', [limit, offset]);

        // Store results in cache
        cache.set(cacheKey, posts);

        return NextResponse.json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error.message, error.stack);
        return NextResponse.json({ message: 'Error fetching posts' }, { status: 500 });
    }
}
