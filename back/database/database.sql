CREATE DATABASE connecte;

CREATE TABLE public.users
(
    u_id integer NOT NULL GENERATED ALWAYS AS IDENTITY,
    u_user "char" NOT NULL,
    u_email "char" NOT NULL,
    u_password "char" NOT NULL,
    CONSTRAINT u_id PRIMARY KEY (u_id),
    CONSTRAINT u_user UNIQUE (u_user),
    CONSTRAINT u_email UNIQUE (u_email)
);

ALTER TABLE IF EXISTS public.users
    OWNER to postgres;

CREATE TABLE public.posts
(
    p_id integer NOT NULL GENERATED ALWAYS AS IDENTITY,
    p_title "char" NOT NULL,
    p_body "char" NOT NULL,
    p_file "char",
    fk_u_id integer,
    CONSTRAINT p_id PRIMARY KEY (p_id),
    CONSTRAINT fk_u_id FOREIGN KEY (fk_u_id)
        REFERENCES public.users (u_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
        NOT VALID
);

ALTER TABLE IF EXISTS public.posts
    OWNER to postgres;

CREATE TABLE public.readby
(
    fk_u_id integer NOT NULL,
    fk_p_id integer NOT NULL,
    CONSTRAINT fk_u_id FOREIGN KEY (fk_u_id)
        REFERENCES public.users (u_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
        NOT VALID,
    CONSTRAINT fk_p_id FOREIGN KEY (fk_p_id)
        REFERENCES public.posts (p_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
        NOT VALID
);

ALTER TABLE IF EXISTS public.readby
    OWNER to postgres;
