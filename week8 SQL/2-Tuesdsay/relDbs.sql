
-- CREATE TABLE author(
--     id SERIAL PRIMARY KEY,
--     name varchar(25)
-- );

-- CREATE TABLE articles(
--     id SERIAL PRIMARY KEY,
--     title varchar(150),
--     author_id integer REFERENCES author(id) -- this is the foreign key reference
-- );

-- INSERT INTO articles VALUES
-- (DEFAULT, 'JS Prototypes', 7);

-- INSERT INTO author VALUES
-- (DEFAULT, 'Jose'),
-- (DEFAULT, 'Mike'),
-- (DEFAULT, 'Brandon'),
-- (DEFAULT, 'Andrena'),
-- (DEFAULT, 'Destiny'),
-- (DEFAULT, 'Rio'),
-- (DEFAULT, 'Q'),
-- (DEFAULT, 'Jason M.'),
-- (DEFAULT, 'Bodgan'),
-- (DEFAULT, 'Jennifer'),
-- (DEFAULT, 'Layne'),
-- (DEFAULT, 'Lorenzo'),
-- (DEFAULT, 'Cook'),
-- (DEFAULT, 'Victoria'),
-- (DEFAULT, 'Giselle'),
-- (DEFAULT, 'Carol'),
-- (DEFAULT, 'Jason H.'),
-- (DEFAULT, 'Jim'),
-- (DEFAULT, 'Anjunique'),
-- (DEFAULT, 'Jacob'),
-- (DEFAULT, 'Matt'),
-- (DEFAULT, 'Jake');

-- INSERT INTO articles VALUES 
-- (DEFAULT, 'JS Prototypes', 1), 
-- (DEFAULT, 'JS Promises', 3),
-- (DEFAULT, 'Express Routes', 10),
-- (DEFAULT, 'Styling with Bootstrap', 4),
-- (DEFAULT, 'API calls with Google Maps', 3),
-- (DEFAULT, 'Python RPG Game', 7),
-- (DEFAULT, 'Object Oriented Programming in JS', 7),
-- (DEFAULT, 'Nested For Loops', 7),
-- (DEFAULT, 'Preparing for Technical Interviews', 1),
-- (DEFAULT, 'Why I went to a coding camp', 1),
-- (DEFAULT, 'Coding in Romanian', 2),
-- (DEFAULT, 'Fizz Buzz - The Solution', 9),
-- (DEFAULT, 'Recursive Fibonacci with Memoization', 11),
-- (DEFAULT, 'Merge Sort', 15);


-- SELECT * FROM articles;

-- SELECT * FROM
-- author
-- INNER JOIN
-- articles
-- ON
-- author.id = articles.author_id

-- DELETE FROM author WHERE id = 11; -- didn't work because there is data linked to this in the articles table

-- SELECT * FROM author INNER JOIN articles ON author.id = articles.author_id

-- SELECT * FROM author LEFT JOIN articles ON author.id = articles.author_id

-- SELECT * FROM author RIGHT JOIN articles ON author.id = articles.author_id

-- SELECT * FROM author OUTER JOIN articles ON author.id = articles.author_id

-- CREATE TABLE groups(
--     id SERIAL PRIMARY KEY,
--     name varchar(100)
-- );

-- CREATE TABLE member(
--     id SERIAL PRIMARY KEY,
--     name varchar(25)
-- );

-- CREATE TABLE membership(
--     id SERIAL PRIMARY KEY,
--     group_id integer REFERENCES groups(id),
--     member_id integer REFERENCES member(id)
-- );

-- INSERT INTO groups VALUES 
-- (DEFAULT, 'Atlanta JavaScript Meetup'),
-- (DEFAULT, 'PyLadies'),
-- (DEFAULT, 'Girl Develop It'),
-- (DEFAULT, 'Atlanta Web Design Group');

-- INSERT INTO member VALUES
-- (DEFAULT, 'Alfie'),
-- (DEFAULT, 'Michael'),
-- (DEFAULT, 'Tarek'),
-- (DEFAULT, 'Kevin'),
-- (DEFAULT, 'Glen'),
-- (DEFAULT, 'David'),
-- (DEFAULT, 'Ollie'),
-- (DEFAULT, 'Chris'),
-- (DEFAULT, 'Sabrina'),
-- (DEFAULT, 'Garrett'),
-- (DEFAULT, 'Jeroen'),
-- (DEFAULT, 'Deron');

-- INSERT INTO membership VALUES
-- (DEFAULT, 1, 1),
-- (DEFAULT, 4, 1), 
-- (DEFAULT, 2, 3);

-- INSERT INTO membership VALUES
-- (DEFAULT, 4, 4),
-- (DEFAULT, 1, 5),
-- (DEFAULT, 1, 6),
-- (DEFAULT, 1, 10),
-- (DEFAULT, 2, 1),
-- (DEFAULT, 2, 5),
-- (DEFAULT, 2, 6),
-- (DEFAULT, 2, 10),
-- (DEFAULT, 3, 8),
-- (DEFAULT, 3, 9),
-- (DEFAULT, 3, 10),
-- (DEFAULT, 3, 12),
-- (DEFAULT, 4, 1),
-- (DEFAULT, 4, 3),
-- (DEFAULT, 4, 7),
-- (DEFAULT, 4, 8);

-- SELECT * FROM groups INNER JOIN membership ON groups.id = membership.group_id INNER JOIN member ON member.id = membership.member_id WHERE group_id = 1;

-- SELECT groups.name, member.name 
-- FROM groups 
-- INNER JOIN membership 
-- ON groups.id = membership.group_id 
-- INNER JOIN member 
-- ON member.id = membership.member_id 
-- WHERE member_id = 1;

