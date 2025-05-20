const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'kea279310!!',
    database: 'sign'
});

conn.connect((err) => {
    if(err) console.log('연결 실패: ', err);
    else console.log('db 연결 완료');
});

module.exports = conn;