const mysql = require('mysql');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'prettyprint',
});

module.exports = pool;