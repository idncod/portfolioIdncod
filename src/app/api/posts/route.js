import { query } from '../../../lib/db';
import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: 3600 });

export async function GET() {
    try {
        const cacheKey = 'postsCache';
        const cachedPosts = cache.get(cacheKey);

        if (cachedPosts) {
            return new Response(JSON.stringify(cachedPosts), { status: 200 });
        }

        const { rows } = await query('SELECT id, title, content, created_at FROM posts ORDER BY created_at DESC LIMIT 100');
        cache.set(cacheKey, rows);

        return new Response(JSON.stringify(rows), { status: 200 });
    } catch (error) {
        console.error('Error in API route:', error.message);
        return new Response(JSON.stringify({ error: 'Database query failed' }), { status: 500 });
    }
}
