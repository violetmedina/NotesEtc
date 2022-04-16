
-- CREATE DATABASE feb2022;

-- CREATE TABLE studen (
--     name varchar,
--     website varchar,
--     github_username varchar,
--     points integer,
--     gender char(1),
--     cohort_start_date date,
--     graduated boolean
-- );

-- INSERT INTO studen VALUES (
--     'Tri', 'tri@3.com', 'trigithub', 10, 'M', '2022-02-07', FALSE
-- );

-- INSERT INTO studen VALUES
-- ('Dane', 'dane@me.com', 'danegithub', 15, 'M', '2022-02-07', FALSE),
-- ('Chewie', 'felipe@me.com', 'felipegitgub', 50, 'M', '2022-02-07', FALSE),
-- ('Dez', 'dez@me.com', 'dezgithub', 20, 'F', '2022-02-07', FALSE),
-- ('Veronica', 'cero@me.com', 'vero1', 70, 'F', '2022-02-07', FALSE),
-- ('Violet', 'violet@me.com', 'violetFlowers', 100, 'F', '2022-02-07', TRUE),
-- ('Chloe', 'chloe@me.com', 'chloeParfume', 60, 'F', '2022-02-07', TRUE);

-- UPDATE studen SET points = 8 WHERE name = 'Tri';

-- UPDATE studen SET graduated = true WHERE name = 'Dane';

-- DELETE FROM studen WHERE id = 'Veronica';

-- CREATE TABLE student (
--   id SERIAL NOT NULL PRIMARY KEY,  --don't really need a not null there as the primary key takes care of that already
--   name VARCHAR,
--   github VARCHAR,
--   points INTEGER,
--   start_date DATE,
--   graduated BOOLEAN
-- );

-- INSERT INTO student VALUES
-- (DEFAULT, 'Dane', 'dane@me.com', 15, '2022-02-07', FALSE),
-- (DEFAULT, 'Chewie', 'felipe@me.com', 50, '2022-02-07', FALSE),
-- (DEFAULT, 'Dez', 'dez@me.com', 20, '2022-02-07', FALSE),
-- (DEFAULT, 'Veronica', 'cero@me.com', 50, '2022-02-07', FALSE),
-- (DEFAULT, 'Violet', 'violet@me.com', 100, '2022-02-07', TRUE),
-- (DEFAULT, 'Chloe', 'chloe@me.com', 60, '2022-02-07', TRUE);

-- DELETE FROM student WHERE id = 7;

-- INSERT INTO student VALUES
-- (DEFAULT, 'Roberto', 'Rob@me.com', 80, '2022-02-07', TRUE);

-- SELECT * FROM student;

-- SELECT name, graduated, points FROM student;

-- SELECT * FROM studen WHERE gender = 'F';

-- SELECT name, graduated, points FROM studen WHERE graduated = 'T';

-- SELECT name, points FROM studen WHERE name like '%V%'; -- this is case sensative 

-- SELECT COUNT(*) FROM studen;

-- SELECT SUM(points) FROM student;