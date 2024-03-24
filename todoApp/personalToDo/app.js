const form = document.getElementById("form");
let taskInput = document.getElementById("task-input");
const submitButton = document.getElementById("submit-button");
const resultDiv = document.getElementById("result-div");
const taskList = document.getElementById("task-list");

const newTask = (input) => {
    const newTaskDiv = document.createElement("div");
    const taskText = document.createElement("p");
    const completedButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    

}


const newTaskEvent = form.addEventListener("submit", (e) => {
    //Prevent page reloading on submit
    e.preventDefault();
    //Create each task their own div
    const newTaskDiv = document.createElement("div");

    //Create Completed button
    const completedButton = document.createElement("button");
    completedButton.classList.add("completedButton");

    //Add Contented to complete button
    completedButton.innerHTML = `<i class="fa-solid fa-check"></i>`;

    //Append to task div
    newTaskDiv.appendChild(completedButton);

    //Get task value from input and append it to the new li element
    const newTaskText = taskInput.value;
    const liElement = document.createElement("p");

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