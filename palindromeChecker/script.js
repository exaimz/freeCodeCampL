const userInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

const checkIfPalindrome = input => {
    originWord = input;

    if (input === "") {
        alert("Please enter a word.");
    } else { // clean & reverse the string
        const lowercaseString = input.replace(/[^a-zA-Z0-9]/gi, '').toLowerCase();
        const reversedString = lowercaseString.split("").reverse().join("");
        console.log(`${originWord} ${reversedString === originWord ? 'is' : 'is not'} a palindrome`);
    }
}

checkButton.addEventListener("click", () => {
    checkIfPalindrome(userInput.value);
    userInput.value = "";
});
