// make sure you execute `npm install prompt-sync` in the terminal first
const prompt = require('prompt-sync')();

// model our state
// since we are doing a todo app, the state should be holding the list of todos
// the `todos` array is in the global scope
const todos = [
    {
        "id": 123,
        "name":"Walk the dog",
        "urgency": 2
    },
    {
        "id": 234,
        "name": "Wash the car",
        "urgency": 1
    },
    {
        "id": 456,
        "name":"Clean the toilet",
        "urgency": 3
    }
];  

// it is considered bad practice to access global variables in a function
// which is why we are going pass `todos` as a parameter to displayTasks
function displayTasks(todos) {
    console.log("To Do List");
    console.log();
    for (let t of todos) {
        console.log("Task ID:", t.id);
        console.log("Name:", t.name);
        console.log("Urgency:", t.urgency);
        console.log();
    }
}
// the createTask function will modify the todos array
// which is why it needs to recieve a parameter (if we don't want to use global variables)
function createTask(todos) {

}

displayTasks(todos);