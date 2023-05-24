//db.js

const mysql = require('mysql');

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost', // Replace with your MySQL host
  user: 'root',
  password: '',
  database: 'gggonext',
});

// Execute a SQL query
function query(sql, params) {
  return new Promise((resolve, reject) => {
    pool.query(sql, params, (error, results) => {
      if (error) {
        console.error('Database query error:', error);
        reject(error);
      } else {
        console.log('Database query results:', results);
        resolve(results);
      }
    });
  });
}


module.exports = { query };
