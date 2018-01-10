const mysql = require('mysql');

module.exports = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'employee'
});

module.exports.tableName = 'data';
module.exports.sessionTableName = 'session';