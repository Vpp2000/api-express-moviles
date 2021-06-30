const { Pool } = require('pg');

exports.pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'vialpopi',
    database: 'banco',
    port: 5432
});