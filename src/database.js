const mysql = require('mysql2/promise')

exports.getRowsAndFields = () => {
  const credentials = { host: 'localhost', database: 'iugu_platform2_console_development', user: 'root', password: '123' }
  mysql
    .createConnection(credentials)
    .then((conn) => conn.query('SELECT * from users'))
    .then(([rows, fields]) => { console.log(rows[0]) })
}
