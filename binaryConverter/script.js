const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

//create function that connverts numbers to binary
const decimalToBinary = (input) => {
  if (input === 0 || input === 1) {
    return String(input);
  } else {
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
};

const checkUserInput = () => {
  //Create an alert that tells the user they dont have a number or it is invalid
  if (!numberInput.value || isNaN(parseInt(numberInput.value))) {
    alert("Please provide a decimal number");
    return;
  }

  //call decimalToBinary function and convert the numberInput value to an Int
  result.textContent = decimalToBinary(parseInt(numberInput.value));
  numberInput.value = "";
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});
