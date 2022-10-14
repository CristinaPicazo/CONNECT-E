const { Client } = require("pg");

const client = new Client({
  database: process.env.DATABASE,
  host: process.env.HOST,
  port: process.env.PORTDB || 5432,
  user: process.env.USER,
  password: process.env.PASSWORD,
});

client.connect();
module.exports = { client };
