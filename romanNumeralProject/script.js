const number = document.getElementById("number");
const button = document.getElementById("convert-btn");
const output = document.getElementById("output");
const romanNumeralObj = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I', 
};

const convertToNumeral = (input) => {
    const result = '';
    if (input <= 0) {
        output.innerHTML = 'Please enter a number greater than or equal to 1';
        return;
    } else if (input >= 4000) {
        output.innerHTML = 'Please enter a number less than or equal to 3999';
        return;
    } else {
        Object.keys(romanNumeralObj).reverse().forEach(value => {
            while (input >= value) {
                result += romanNumeralObj[value];
                input -= value;
            }
        });
        return result;
    };
}

const checkUserInput = () => {
    const numberInt = parseInt(number.value);

    if (!numberInt || isNaN(numberInt)) {
        output.innerHTML = 'Please enter a valid number';
        return;
    } 

    output.innerHTML = convertToNumeral(numberInt);
    number.value = '';
}

button.addEventListener("click", checkUserInput);