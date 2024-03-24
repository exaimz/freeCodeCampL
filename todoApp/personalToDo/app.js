const form = document.getElementById("form");
let taskInput = document.getElementById("task-input");
const submitButton = document.getElementById("submit-button");
const resultDiv = document.getElementById("result-div");
const taskList = document.getElementById("task-list");


const newEvent = form.addEventListener("submit", (e) => {
    //Prevent page reloading on submit
    e.preventDefault();

    //Get task value from input and append it to the new li element
    const newTaskText = taskInput.value;
    const liElement = document.createElement("li");
    const newTaskDiv = document.createElement("div");

    resultDiv.appendChild(newTaskDiv);
    newTaskDiv.classList.add("newTask");

    newTaskDiv.appendChild(liElement);
    liElement.classList.add("taskText");

    

    liElement.innerHTML = newTaskText;

    //create delete and complete buttons for new li element
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");

    newTaskDiv.appendChild(deleteButton);
    deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;

    taskInput.value = "";  
});