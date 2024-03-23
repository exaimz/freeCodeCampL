const form = document.getElementById("form");
let taskInput = document.getElementById("task-input");
const submitButton = document.getElementById("submit-button");
const resultDiv = document.getElementById("result-div");
const taskList = document.getElementById("task-list");


const newEvent = form.addEventListener("submit", (e) => {
    //Prevent page reloading on submit
    e.preventDefault();

    //Get task value from input and append it to the new li element
    const newTask = taskInput.value;
    const liElement = document.createElement("li");
    liElement.classList.add("task");

    taskList.appendChild(liElement);
    liElement.innerHTML = newTask;
    taskInput.value = "";  
});