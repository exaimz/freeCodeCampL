const number = document.getElementById("number");
const button = document.getElementById("convert-btn");
const output = document.getElementById("output");
const romanNumeralObj = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1, 
};

const checkUserInput = () => {
    if (!number.value) {
        alert("Please enter a valid number");
        return;
    } else if (number.value <= -1) {
        output.textContent = "Please enter a number greater than or equal to 1";
    } else if (number.value >= 4000) {
        output.textContent = " Please enter a number less than or equal to 3999";
    }
}

button.addEventListener("click", checkUserInput);