-- Database: connecte

-- DROP DATABASE IF EXISTS connecte;

CREATE DATABASE connecte
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United Kingdom.1252'
    LC_CTYPE = 'English_United Kingdom.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

GRANT ALL ON DATABASE connecte TO postgres WITH GRANT OPTION;

GRANT TEMPORARY, CONNECT ON DATABASE connecte TO PUBLIC;

ALTER DEFAULT PRIVILEGES FOR ROLE postgres
GRANT ALL ON TABLES TO connecte;

-- Role: connecte
-- DROP ROLE IF EXISTS connecte;

CREATE ROLE connecte WITH
  LOGIN
  NOSUPERUSER
  NOINHERIT
  NOCREATEDB
  NOCREATEROLE
  NOREPLICATION
  ENCRYPTED PASSWORD 'SCRAM-SHA-256$4096:bDX4c8v8fHISHJUDJ6qxCw==$tc5K2CRaUpk6qIg2I59lQjr15Qb/mgNHMpbtcRvjbSI=:i9cHiK/pO+XmYlQMW8cW3yenptb2gSer/AhTqUHd7j8=';

-- Table: public.users

-- DROP TABLE IF EXISTS public.users;

CREATE TABLE IF NOT EXISTS public.users
(
    u_id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    u_user text COLLATE pg_catalog."default" NOT NULL,
    u_email text COLLATE pg_catalog."default" NOT NULL,
    u_password text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT u_id PRIMARY KEY (u_id),
    CONSTRAINT u_email UNIQUE (u_email),
    CONSTRAINT u_user UNIQUE (u_user)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.users
    OWNER to postgres;

GRANT ALL ON TABLE public.users TO connecte;

GRANT ALL ON TABLE public.users TO postgres WITH GRANT OPTION;

-- Table: public.posts

-- DROP TABLE IF EXISTS public.posts;

CREATE TABLE IF NOT EXISTS public.posts
(
    p_id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    p_title text COLLATE pg_catalog."default" NOT NULL,
    p_body text COLLATE pg_catalog."default" NOT NULL,
    p_file text COLLATE pg_catalog."default",
    fk_u_id integer,
    CONSTRAINT p_id PRIMARY KEY (p_id),
    CONSTRAINT fk_u_id FOREIGN KEY (fk_u_id)
        REFERENCES public.users (u_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.posts
    OWNER to postgres;

GRANT ALL ON TABLE public.posts TO connecte;

GRANT ALL ON TABLE public.posts TO postgres WITH GRANT OPTION;


-- Table: public.readby

-- DROP TABLE IF EXISTS public.readby;

CREATE TABLE IF NOT EXISTS public.readby
(
    fk_u_id integer NOT NULL,
    fk_p_id integer NOT NULL,
    CONSTRAINT fk_p_id FOREIGN KEY (fk_p_id)
        REFERENCES public.posts (p_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT fk_u_id FOREIGN KEY (fk_u_id)
        REFERENCES public.users (u_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.readby
    OWNER to postgres;

GRANT ALL ON TABLE public.readby TO connecte;

GRANT ALL ON TABLE public.readby TO postgres WITH GRANT OPTION;