CREATE DATABASE connecte;

CREATE TABLE users(
    u_id SERIAL PRIMARY KEY,
    u_user VARCHAR(50) NOT NULL,
    u_email VARCHAR(50) NOT NULL UNIQUE,
    u_password VARCHAR(20) NOT NULL
);

CREATE TABLE posts (
    p_id SERIAL PRIMARY KEY,
    CONSTRAINT fk_u_id FOREIGN KEY(u_id) REFERENCES users(u_id),
    p_body VARCHAR(50) NOT NULL,
    p_file VARCHAR(255)
);
