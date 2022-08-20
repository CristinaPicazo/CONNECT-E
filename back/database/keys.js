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

module.exports = { pool };
