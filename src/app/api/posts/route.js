import { Pool } from 'pg';

const pool = new Pool({
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    ssl: { rejectUnauthorized: false },
});

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    let result;

    try {
        if (id) {
            const { rows } = await pool.query('SELECT * FROM posts WHERE id = $1', [id]);
            result = rows[0];
        } else {
            const { rows } = await pool.query('SELECT * FROM posts');
            console.log('Fetched rows:', rows);
            result = rows;
        }

        return new Response(JSON.stringify(result), {
            status: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        return new Response(JSON.stringify({ error: 'Error fetching data' }), {
            status: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
        });
    }
}
