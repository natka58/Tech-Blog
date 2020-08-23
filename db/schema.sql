DROP DATABASE IF EXISTS tech_blog;
CREATE DATABASE tech_blog;

-- CREATE TABLE User (
--     id INT NOT NULL PRIMARY KEY,
--     username VARCHAR(30) NOT NULL,
--     email VARCHAR(30) NOT NULL,
--     password VARCHAR(30) NOT NULL 
-- );


-- CREATE TABLE Post (
-- id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
-- title VARCHAR(30) NOT NULL,
-- post_content TEXT NOT NULL,
-- user_id INT NOT NULL,
-- INDEX user_id (user_id),
-- CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE 
-- );


-- CREATE TABLE Comment (
--   id INT NOT NULL  AUTO_INCREMENT PRIMARY KEY,
--   comment_text VARCHAR(2) NOT NULL,
--   user_id INT NOT NULL,
-- INDEX user_id (user_id),
-- CONSTRAINT fk_user1 FOREIGN KEY (user_id) REFERENCES User(id) ON DELETE CASCADE, 
--   post_id INT NOT NULL,
--   INDEX post_id (post_id),
--   CONSTRAINT fk_post FOREIGN KEY (post_id) REFERENCES post(id) ON DELETE CASCADE 
--   );

