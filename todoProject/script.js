//Assign variables for elements from HTML
const taskForm = document.getElementById("task-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");

const openTaskFormBtn = document.getElementById("open-task-form-btn");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");

const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");

//This is where the local data will live
const taskData = [];
let currentTask = {};

//Create reset function (for form fields)
const reset = () => {
    titleInput.value = "";
    dateInput.value = "";
    descriptionInput.value = "";
    taskForm.classList.toggle("hidden");
    currentTask = {};
};

//Open and close the task form
openTaskFormBtn.addEventListener("click", () =>
  taskForm.classList.toggle("hidden")
);
closeTaskFormBtn.addEventListener("click", () => {
  const formInputsContainValues = titleInput.value || dateInput.value || descriptionInput.value;
  if (formInputsContainValues) {
    confirmCloseDialog.showModal();
  } else {
    reset();
  };
}
);
cancelBtn.addEventListener("click", () => confirmCloseDialog.close());
discardBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
  reset();
});

//Get values from form input fields
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);
  const taskObj = {
    id: `${titleInput.value.toLowerCase().split(" ").join("-")}-${Date.now()}`,
    title: titleInput.value,
    date: dateInput.value,
    description: descriptionInput.value,
  };
  //Save task into taskData array
  if (dataArrIndex === -1) {
    taskData.unshift(taskObj);
  }
  //Display values on the page
  taskData.forEach(
    ({ id, title, date, description }) =>
      (tasksContainer.innerHTML += `
    <div class="task" id="${id}"></div>
    <p><strong>Title: </strong>${title}</p>
    <p><strong>Date: </strong>${date}</p>
    <p><strong>Description: </strong>${description}</p>
    <button type="button" class="btn">Edit</button>
    <button type="button" class="btn">Delete</button>
  `)
  );
  //close form to view tasks
  reset();
});
