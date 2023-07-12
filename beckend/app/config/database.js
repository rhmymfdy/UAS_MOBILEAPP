const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mobile-app'
});

connection.connect((error) => {
  if (error) throw error;
  console.log('BERHASIL TERHUBUNG KE DATABASE');
});

module.exports = connection;
