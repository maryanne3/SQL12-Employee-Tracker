// Connection to the database
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'employee_DB',
  
  },
  console.log(` Great! You are connected to the employee-tracker database.`)
);

module.exports = connection