#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let condition = true;
console.log(chalk.magentaBright.bold.italic("Welcome to the Todo App"));
// Main section
while(condition)
{
let lists = await inquirer.prompt([
    {
    name:"todoList",
    type:"list",
    message:"What do you want to do?",
    choices:["Add Todos","Delete Todos","View your Todo List","Exit"]
    }
]
)
// Adding todo section
if(lists.todoList === "Add Todos"){
    let addtodo = await inquirer.prompt(
        [
            {
                name:"add",
                type:"input",
                message:"What do you want to add in your todos list : "
            }
        ]
    );
    todos.push(addtodo.add);
    console.log(chalk.yellow(`"${addtodo.add}" Added successfully in your todo list.`));
    console.log(todos);
}
// Deleting todo section
else if(lists.todoList === "Delete Todos"){
    let deltodo = await inquirer.prompt(
        [
            {
              name:"del",
              type:"list",
              message:"Choose one todo which you want to delete",
              choices:todos  
            }
        ]
    );
    let index = todos.indexOf(deltodo.del);
    todos.splice(index,1);
    console.log(chalk.yellow(`"${deltodo.del}" Deleted successfully from your todo list `));
}
// View todo list
else if(lists.todoList === "View your Todo List"){
    console.log(chalk.yellow(`Your Todo List : \n "${todos}"`));
}
// Exit from todo 
else if(lists.todoList === "Exit") {
    console.log(chalk.magentaBright.bold.italic("Thanks for using my todo app."));
    condition = false;
}
}