const form = document.getElementById("form");
let taskInput = document.getElementById("task-input");
const submitButton = document.getElementById("submit-button");
const resultDiv = document.getElementById("result-div");
const taskList = document.getElementById("task-list");

const newTask = (input) => {
    //CREATE TASK ELEMENT
    const newTaskDiv = document.createElement("div");
    newTaskDiv.classList.add("newTask");
    newTaskDiv.classList.add("fade-in");

    //CREATE TASK TEXT
    const taskText = document.createElement("p");
    taskText.classList.add("taskText");
    taskText.innerHTML = input;

    //CREATE COMPLETED BUTTON
    const completedButton = document.createElement("button");
    completedButton.classList.add("completedButton");
    completedButton.innerHTML = `<i class="fa-solid fa-check"></i>`;

    //CREATE DELETE BUTTON
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");
    deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;

    //APPEND ELEMENTS 
    resultDiv.appendChild(newTaskDiv);
    newTaskDiv.appendChild(completedButton);
    newTaskDiv.appendChild(taskText);
    newTaskDiv.appendChild(deleteButton);
}

const newTaskEvent = form.addEventListener("submit", (e) => {
    //Prevent page reloading on submit
    e.preventDefault();

    //Create New Task
    newTask(taskInput.value);

    //Clear input
    taskInput.value = "";  
});