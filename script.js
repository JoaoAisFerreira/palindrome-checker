const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

const cleanInput = (originalInput) => {
    const regex = /[^a-zA-Z0-9]/g;
    return originalInput.replace(regex, '').toLowerCase();
};

const isPalindrome = input => {
    
    const cleanStr = cleanInput(input)
    const reverseStr = cleanStr.split('').reverse().join('')

    if (input === "") {
        alert('Please input a value')
    } else if (cleanStr === reverseStr) {
        result.innerHTML = `<h3 id="isPal">${input} is a palindrome</h3>`
    } else {
        result.innerHTML = `<h3 id="notPal">${input} is not a palindrome</h3>`
    }

}

button.addEventListener('click', () => {
    isPalindrome(input.value);
});

input.addEventListener('keydown', (event) => {
    if(event.key === 'Enter') {
        isPalindrome(input.value);
    }
});