const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    ssl: { rejectUnauthorized: false }
});

exports.handler = async function(event, context) {
    const id = event.queryStringParameters?.id;
    let result;

    try {
        if (id) {
            const { rows } = await pool.query('SELECT * FROM posts WHERE id = $1', [id]);
            result = rows[0];
        } else {
            const { rows } = await pool.query('SELECT * FROM posts');
            result = rows;
        }

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(result),
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ error: 'Error fetching data' }),
        };
    }
};
