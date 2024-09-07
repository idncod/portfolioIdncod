module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'PG_HOST',
      database: 'PG_DATABASE',
      user: 'PG_USER',
      password: 'PG_PASSWORD',
      ssl: { rejectUnauthorized: false }
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'pg',
    connection: {
      host: 'PG_HOST',
      database: 'PG_DATABASE',
      user: 'PG_USER',
      password: 'PG_PASSWORD',
      ssl: { rejectUnauthorized: false }
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: {
      host: 'PG_HOST',
      database: 'PG_DATABASE',
      user: 'PG_USER',
      password: 'PG_PASSWORD',
      ssl: { rejectUnauthorized: false }
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
