const { Client } = require("pg");

const client = new Client({
  database: process.env.DATABASE,
  host: process.env.HOST,
  port: process.env.PORTDB || 5432,
  user: process.env.USER,
  password: process.env.PASSWORD,
});

client.connect();

// client
//   .connect()
//   .then(() => console.log('connected'))
//   .catch(err => console.error('connection error', err.stack))

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
// });

// client.query(
//   "INSERT INTO posts (p_id, p_body, p_file, fk_u_id, p_title, fk_user, p_readby) VALUES (5, 'body','', 2, 'title', 'crist', ARRAY['2'])"
// );

// UPDATE posts SET p_readby = ARRAY['25'] WHERE p_id = '39'
// INSERT INTO posts(p_readby) VALUES (ARRAY['25']) SELECT * FROM posts WHERE p_id = '39'

module.exports = { client };
