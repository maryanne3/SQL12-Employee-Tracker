USE employee_DB; 

INSERT INTO department (name)
VALUES 
("Sales"),
("Legal"),
("Finance"),
("Marketing");

SELECT * FROM department; 

INSERT INTO role (title,department_id,salary)
VALUES
("Customer Service Agent",1,23000),
("Finance Manager",3,654000),
("Sales Representative",1,25000),
("Accountant",3,124000),
("Sales Manager",4,38000);

SELECT * FROM role;

INSERT INTO employee (first_name,last_name,role_id, manager_id)
VALUES
("Sandy", "June",1, 1),
("Red", "Bull",2,NULL),
("Precious", "Blue",4,NULL),
("Walter","Mann",5,2),
("Lovely","Stars",3,3),
("Faiza", "Starlight",3,4),
("Rainbows", "RWhite",5,NULL);

SELECT * FROM employee;