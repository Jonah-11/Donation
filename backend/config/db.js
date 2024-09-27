const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const db = mysql.createConnection({
    host: 'mysql.railway.internal',
    user: 'root',
    password: 'gIcwGgttUgWvNkbJObDfCzpxvysHWRiG',
    database: 'railway'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the Railway database:', err);
        return;
    }
    console.log('Connected to Railway MySQL database');
});

module.exports = db;
