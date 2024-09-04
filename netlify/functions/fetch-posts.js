const knex = require('knex')(require('./knexfile'));

exports.handler = async function(event, context) {
    console.log('Function invoked');

    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
            },
            body: '',
        };
    }

    const id = event.queryStringParameters?.id;
    let posts;

    try {
        if (id) {
            console.log('Fetching post with ID:', id);
            posts = await knex('posts').where({ id }).first();
        } else {
            console.log('Fetching all posts');
            posts = await knex('posts').select();
        }

        console.log('Posts:', posts);

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(result.rows),
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
