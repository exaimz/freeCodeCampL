const userInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

const checkIfPalindrome = input => {
    let originWord;

    if (input === "") {
        alert("Please input a value");
    } else { // clean & reverse the string
        originWord = input;
        const lowercaseString = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
        const reversedString = lowercaseString.split("").reverse().join("");
        console.log(reversedString); 

        result.classList.remove("hide");
        result.innerHTML = (`${originWord} ${reversedString === lowercaseString ? 'is' : 'is not'} a palindrome`);
    }
}

checkButton.addEventListener("click", () => {
    checkIfPalindrome(userInput.value);
    userInput.value = "";
});

userInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      checkIfPalindrome(userInput.value);
      userInput.value = '';
    }
  });
  