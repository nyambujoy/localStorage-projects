const userInput = document.querySelector('#userInput');
const submit = document.getElementById('submit')
const playAgain = document.getElementById('again')
const resultP = document.querySelector('.bottom')
const correct = document.querySelector('.correct')
// const newBtn = document.querySelector('#new')
console.log(userInput)
let running = true
let attempts = 0


let ans = Math.floor(Math.random() * 101)

const handleSubmit = () => {
    let userValue = Number(userInput.value.trim());

    if (isNaN(userValue)) {
        correct.textContent = 'Please enter a number.';
    } else if (userValue > 100 || userValue < 0) {
        correct.textContent = 'Please enter a number between 0 & 100.';
    } else {
        attempts++;
        if (userValue > ans) {
            resultP.textContent = 'Guess lower.';
        } else if (userValue < ans) {
            resultP.textContent = 'Guess higher.';
        } else if (userValue === ans) {
            resultP.textContent = `You got it right!! It took you ${attempts} attempts.`;
            correct.textContent = ans;
            running = false;
            // Disable the input and submit button
            userInput.disabled = true;
            submit.disabled = true;
        }
    }
};







const showAnswer = () => {

    correct.textContent = ans; // Clear the previous correct answer text
    // resultP.textContent = '';

}






submit.addEventListener("click", handleSubmit)
playAgain.addEventListener("click", showAnswer)





