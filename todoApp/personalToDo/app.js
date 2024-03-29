const form = document.getElementById("form");
const taskInput = document.getElementById("task-input");
const resultDiv = document.getElementById("result-div");

const taskValidation = (input) => {
    if (input === "") {
        return alert("Please enter valid task.");
    } else {
        return createTaskElement(input);
    }
}

const createTaskElement = (input) => {
    const newTaskDiv = document.createElement("div");
    newTaskDiv.classList.add("newTask", "fade-in");

    const taskText = document.createElement("p");
    taskText.classList.add("taskText");
    taskText.textContent = input;

    const completedButton = document.createElement("button");
    completedButton.classList.add("completedButton", "taskButton");
    completedButton.innerHTML = `<i class="fa-solid fa-check"></i>`;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton", "taskButton");
    deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;

    newTaskDiv.append(completedButton, taskText, deleteButton);
    resultDiv.appendChild(newTaskDiv);

    taskInput.value = "";

    // Attach the delete button event listener
    deleteButton.addEventListener("click", () => {
        deleteTask(newTaskDiv);
    });
    
};

const deleteTask = (taskDiv) => {
    taskDiv.classList.add("fade-out");
    setTimeout(() => {
        resultDiv.removeChild(taskDiv);
    }, 400);
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    taskValidation(taskInput.value);
});