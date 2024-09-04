import { NextResponse } from 'next/server';
import { query } from '../../../lib/db';

export async function GET() {
    try {
        const posts = await query('SELECT * FROM posts ORDER BY created_at DESC');
        return NextResponse.json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        return NextResponse.json({ message: 'Error fetching posts' }, { status: 500 });
    }
}