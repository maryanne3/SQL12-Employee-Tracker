// connection variables 
const mysql = require("mysql2");
const inquirer = require("inquirer");
const { prompt } = require("inquirer");
const db = require("./db/connection.js");

function start() {
    prompt([
      {
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: [
          {
            name: "View All Departments",
            value: "viewAllDepartments",
          },
          {
            name: "View All Roles",
            value: "viewAllRoles",
          },
          {
            name: "View All Employees",
            value: "viewAllEmployees",
          },
          {
            name: "Add A Department",
            value: "addDepartment",
          },
          {
            name: "Add A Role",
            value: "addRole",
          },
          {
            name: "Add An Employee",
            value: "addEmployee",
          },
          {
            name: "Update An Employee Role",
            value: "updateEmployeeRole",
          },
          {name: "Quit",
            value: "Quit",
          } 
        ],
      },
    ]).then((res) => {
      let choice = res.choice;
      switch (choice) {
        case "viewAllDepartments":
          viewAllDepartments();
          break;
        case "viewAllRoles":
          viewAllRoles();
          break;
        case "viewAllEmployees":
          viewAllEmployees();
          break;
        case "addDepartment":
          addDepartment();
          break;
        case "addRole":
          addNewRole();
          break;
        case "addEmployee":
          addEmployee();
          break;
        case "updateEmployeeRole":
          updateEmployeeRole();
          break;
       case "Quit":
            Quit();
      }
    });
  }
start();
  
function viewAllDepartments() {
     db.query ( "SELECT * FROM a department", (err, res) => {
      if (err) throw err;
      console.table(res);
    });
    start();
  }
  
function viewAllRoles() {
    db.query("SELECT * FROM a role", (err, res) => {
      if (err) throw err;

      console.table(res);
    });
    start();
  }
  
function viewAllEmployees() {
    db.query("SELECT * FROM an employee", (err, res) => {
      if (err) throw err;

      console.table(res);
    });
    start();
  }
  
function addDepartment() {
    prompt([
      {
        type: "input",
        name: "choice",
        message: "What department would you like?",
      },
    ]).then((res) => {
      let answer = res.choice;
      db.query(
        "INSERT INTO department (name) VALUES (?)",
        [answer],
        (err, res) => {
          if (err) throw err;
          console.table(res);
          start();
        }
      );
    });
    

}
  
function addNewRole() {
    let departmentID = [];
    let departmentName = [];
    db.query("SELECT * FROM department", (err, res) => {
      if (err) throw err;
  
      res.forEach(({ id }) => {
        departmentID.push(id);
      });
  
      res.forEach(({ name }) => {
        departmentName.push(name);
      });
      addRole(departmentID, departmentName);
    });
  }
  
  function addRole(departmentID, departmentName) {
    let id = "";
    prompt([
      {
        type: "input",
        name: "roleName",
        message: "Which choice of role would you like?",
      },
      {
        type: "input",
        name: "salary",
        message: "What is the salary for this role?",
      },
      {
        type: "list",
        name: "departmentName",
        message: "Which department does the role belong to?",
        choices: departmentName,
      },
    ]).then((answers) => {
      for (let i = 0; i < departmentID.length; i++) {
        if (answers.departmentName === departmentName[i]) {
          id += departmentID[i];
          console.log(id);
        }
      }
      db.query(
        "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)",
        [answers.roleName, answers.salary, parseInt(id)],
        (err, res) => {
          if (err) throw err;
          console.log("Your specified role has been added");
          start()
        }
      );
    });
  }
  
  function addEmployee() {
    let addNewRoles = [];
  
    db.query("SELECT * FROM a role", (err, res) => {
      if (err) throw err;
  
      addNewRoles = res.map((role) => {
        return {
          name: role.title,
          value: role.id,
        };
      });
      inquirer
        .prompt([
          {
            type: "input",
            name: "first_name",
            message:
              "What is the employee's first name?",
          },
          {
            type: "input",
            name: "last_name",
            message:
              "what is the employee's last name?",
          },
          {
            type: "list",
            name: "role_id",
            message: "What is the employee's role?",
            choices: addNewRole,
          },
          {
            type: "input",
            name: "manager",
            message: "What is the employee's manager?",
            choices: manageArray,
          },
        ])
        .then((answers) => {
          db.query(
            "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
            [answers.first_name, answers.last_name, answers.role_id, answers.manager],
            (err, res) => {
              if (err) throw err;
  
              console.log('Great! You have added a new employee!');
          start()

            }
          );
        });
    });
  }
  

      
  function Quit() {
        console.log("Thank you for using Employee-Tracker!");
        process.exit();
  }