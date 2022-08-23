const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORTDB || 5432,
});

// pool.query("SELECT * FROM users", (err, res) => {
//   console.log(err, res);
//   // pool.end();
// });

// pool.query(
//   "INSERT INTO users (u_user, u_email, u_password) VALUES ('u_user', 'u_email', 'u_password')"
// );

// pool.query("SELECT * FROM users WHERE u_email = $1 AND u_password = $2",['criss@gmail.com', '2222'], (err, res) => {
//   console.log(err, res);
//   pool.end();
// });

// const u_email = 'criss@gmail.com'
// const u_password = '2222'
// pool.query("SELECT * FROM users WHERE u_email = $1 AND u_password = $2",
// [u_email, u_password],
// (err, res) => {
//   console.log(err, res);
//   pool.end();
// });

module.exports = { pool };
