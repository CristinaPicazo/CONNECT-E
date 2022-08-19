const Pool = require("pg").Pool;

const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORTDB || 5432,
});

pool.query("SELECT NOW()", (err, res) => {
  console.log(err, res);
  pool.end();
});

module.exports = { pool };
