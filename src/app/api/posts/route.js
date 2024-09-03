const db = require('../../../lib/db');

export async function GET() {
    try {
        const { rows } = await db.query('SELECT * FROM posts ORDER BY created_at DESC');
        return new Response(JSON.stringify(rows), { status: 200 });
    } catch (error) {
        console.error('Error in API route:', error.message);
        return new Response(JSON.stringify({ error: 'Database query failed' }), { status: 500 });
    }
}
