CREATE DATABASE
IF NOT EXISTS 'crm';
USE 'crm';

CREATE TABLE
IF NOT EXISTS 'users'
(
  'id' int
(11) NOT NULL AUTO_INCREMENT,
  'name' varchar
(255),
  'last_name' varchar
(255),
  'age' int
(11),
  PRIMARY KEY
('id')
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO 'users'
('id', 'name', 'last_name', 'age') VALUES
(1, 'Porco', 'Homero', '19'),
(2, 'Porco', 'Homero', '19'),
(3, 'Arania', 'Simpson', '10');