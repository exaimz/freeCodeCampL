const number = document.getElementById("number");
const button = document.getElementById("convert-btn");
const output = document.getElementById("output");

const checkUserInput = () => {
    if (!number.value) {
        alert("Please enter a valid number");
        return;
    } else if (number.value <= -1) {
        output.textContent = "Please enter a number greater than or equal to 1";
    }
}

button.addEventListener("click", checkUserInput);