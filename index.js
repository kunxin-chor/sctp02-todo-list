// make sure you execute `npm install prompt-sync` in the terminal first
const prompt = require('prompt-sync')();



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
// shows the UI for creating a new task
function displayCreateTask(todos) {
    const name = prompt("Enter the name of the task: ");
    const urgency = parseInt(prompt("Enter the urgency of the task (1 to 5): "));
    createTask(todos, name, urgency)
}

// the createTask function will modify the todos array
// which is why it needs to recieve a parameter (if we don't want to use global variables)
function createTask(todos, name, urgency) {

    const newTask = {
        // the purpose of the id is to give each task an unique identity
        // use a random number for simplicty's sake
        "id": Math.floor(Math.random() * 10000),
        "name": name,
        "urgency": urgency,
        "done": false
    }

    // add the new task to the array
    todos.push(newTask);
}

function displayUpdateTask(todos) {
    displayTasks(todos);
    const taskID = prompt("Enter the ID of the task to modify: ");
    // use the linear search to get the object that we want to edit
    // set a variable to store the desired task object
    let wantedTask = null;
    for (let t of todos) {
        if (t.id == taskID) {
            wantedTask = t;
            break;
        }
    }
    if (wantedTask) {
        const newName = prompt("Enter the new task name or press ENTER to use back original: ", wantedTask.name);
        const newUrgency = prompt("Enter the new urgency or press ENTER for use back original", wantedTask.urgency);
        updateTask(todos, taskID, newName, newUrgency);
    } else {
        console.log("No task with that ID exists");
    }
}

function updateTask(todos, id, newName, newUrgency) {
    let wantedTask = null;
    for (let t of todos) {
        if (t.id == id) {
            wantedTask = t;
            break;
        }
    }
    wantedTask.name = newName;
    wantedTask.urgency = newUrgency;
}

function displayDeleteTasks(todos) {
    displayTasks(todos);
    let taskID = prompt("Enter the ID of the task to delete: ");
    deleteTask(todos, taskID);

}

// second argument (aka parameter): id of the task to delete
function deleteTask(todos, id) {
    // we need to find the index of the task that we want in delete in the todos array
    let wantedIndex = null;
    for (let i = 0; i < todos.length; i++) {
        // check if the id of the task that I want to delete
        // matches the id of the task currently indicated by index `i`.
        if (id == todos[i].id) {
            wantedIndex = i;
        }
    }
    if (wantedIndex) {
        // use .splice to delete an element from array
        // parameter 1: where to start deleting (aka which index to start deleting from)
        // parameter2 : how many to delete
        todos.splice(wantedIndex, 1);
    }
}

function displayMenu() {
    console.log("1. Show all tasks");
    console.log("2. Add a new task");
    console.log("3. Update a task");
    console.log("4. Delete a task");
    console.log("5. Quit");
}

function main() {

    // model our state
    // since we are doing a todo app, the state should be holding the list of todos
    // the `todos` array is in the global scope
    const todos = [
        {
            "id": 123,
            "name": "Walk the dog",
            "urgency": 2,
            "done": false
        },
        {
            "id": 234,
            "name": "Wash the car",
            "urgency": 1,
            "done": false,
        },
        {
            "id": 456,
            "name": "Clean the toilet",
            "urgency": 3,
            "done": false
        }
    ];

    while (true) {
        displayMenu();
        let choice = parseInt(prompt("Enter an option: "));
        if (choice == 1) {
            displayTasks(todos)
        }
        if (choice == 2) {
            displayCreateTask(todos);
        }
        if (choice == 3) {
            displayUpdateTask(todos);
        }
        if (choice == 4) {
            displayDeleteTasks(todos);
        }
        if (choice == 5) {
            break;
        }
    }
}

main();