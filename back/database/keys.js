const { Client } = require("pg");

const client = new Client({
  database: process.env.DATABASE,
  host: process.env.HOST,
  port: process.env.PORTDB || 5432,
  user: process.env.USER,
  password: process.env.PASSWORD,
});

client.connect();
// FROM NEW DATABASE
// select posts when user read it = 1 else 0 (27 is user id)
// SELECT p_id,p_body,p_title, CASE WHEN "readPost".fk_u_id=27 THEN 1 ELSE 0 END AS isRead FROM posts LEFT JOIN "readPost" ON "readPost".fk_p_id = posts.p_id

// see one post :id with author from users
//SELECT posts.*, users.u_user as author FROM posts INNER JOIN users ON p_id=40 and users.u_id = posts.fk_u_id

// create new post
// INSERT INTO posts values ('p_title','p_body','p_file','fk_u_id')
// INSERT INTO "readPost" values ('fk_u_id','fk_p_id')

// SELECT p_id,p_title, p_body, u_user, CASE WHEN readby.fk_u_id=2 OR users.u_id=2 THEN 1 ELSE 0 END AS isRead FROM posts LEFT JOIN readby ON readby.fk_p_id = posts.p_id 
// JOIN users ON posts.fk_u_id = users.u_id

module.exports = { client };
