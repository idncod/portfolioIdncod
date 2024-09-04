// netlify/functions/fetch-posts.js
const { Pool } = require('pg');

// Initialize the PostgreSQL client
const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
    ssl: {
        rejectUnauthorized: false // Accept self-signed certificates
    },
});

exports.handler = async function(event, context) {
    const client = await pool.connect();
    try {
        const result = await client.query('SELECT * FROM posts');
        return {
            statusCode: 200,
            body: JSON.stringify(result.rows),
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error fetching data' }),
        };
    } finally {
        client.release();
    }
};
