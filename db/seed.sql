USE employee_db; 

INSERT INTO department (name)
VALUES
('Engineering'),
('Finance'),
('Legal'),
('Sales');

SELECT * FROM department; 
INSERT INTO role (title, id, salary)
VALUES
('Sales Lead', 1, 10000),
('Salesperson', 2, 8000),
('Lawyer', 3, 16300),
('Software Engineer', 4, 31000),
('Legal Assitant', 4 , 2300);
('Finance Anaylst', 1 , 74000);


SELECT * FROM role;

INSERT INTO employee (first_name, last_name, id, manager_id)
VALUES
('John', 'Bowly', 1, 1),
('salem', 'warp', 2, NULL), 
('Precious', 'Fantastic', 4 , NULL),
('Mary', 'Jones', 5, 2),
('Magic', 'Mike', 3, 3),
('Red', 'Bull', 6, 4),


SELECT * FROM employee;