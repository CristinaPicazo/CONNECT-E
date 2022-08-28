const { Client } = require("pg");

const client = new Client({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORTDB || 5432,
});

// client.query("SELECT * FROM users", (err, res) => {
//   console.log(err, res);
//   // client.end();
// });

// client.query(
//   "INSERT INTO users (u_user, u_email, u_password) VALUES ('u_user', 'u_email', 'u_password')"
// );

// client.query("SELECT * FROM users WHERE u_email = $1 AND u_password = $2",['criss@gmail.com', '2222'], (err, res) => {
//   console.log(err, res);
//   client.end();
// });

// const u_email = 'criss@gmail.com'
// const u_password = '2222'
// client.query("SELECT * FROM users WHERE u_email = $1 AND u_password = $2",
// [u_email, u_password],
// (err, res) => {
//   console.log(err, res);
//   client.end();
// });

// client.query("SELECT * FROM posts",
// (err, res) => {
//   console.log(err, res);
//   client.end();
// });
// client.query("SELECT * FROM posts",
// (err, res) => {
//   console.log(err, res);
//   client.end();
// });

module.exports = { client };
