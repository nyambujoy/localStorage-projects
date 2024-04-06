const userInput = document.querySelector('#userInput');
const submit = document.getElementById('submit')
const playAgain = document.getElementById('again')
const resultP = document.querySelector('.bottom')
const correct = document.querySelector('.correct')
const newBtn = document.querySelector('#new')
console.log(userInput)
let running = true
let attempts = 0

let ans = Math.floor(Math.random() * 101)

const handleSubmit = () => {

    while (running) {
        let userValue = Number(userInput.value.trim())
        // console.log(typeof (userValue))

        console.log(userValue, ans)
        if (isNaN(userValue)) {
            correct.textContent = 'please enter a number'
        } else if (userValue > 100 || userValue < 0) {
            correct.textContent = 'please enter a number between 0 & 100'
        } else {
            attempts++
            if (userValue > ans) {
                resultP.textContent = 'guess lower'
            } else if (userValue < ans) {
                resultP.textContent = 'guess higher'

            } else if (userValue === ans) {
                resultP.textContent = `You go it right!! in ${attempts} `
                correct.textContent = ans
                running = false
            }





        }



    }





}

const showAnswer = () => {

    correct.textContent = ans; // Clear the previous correct answer text
    // resultP.textContent = '';

}

function handleRound() {
    let ans = Math.floor(Math.random() * 101)
    handleSubmit()
    showAnswer()
}




submit.addEventListener("click", handleSubmit)
playAgain.addEventListener("click", showAnswer)
newBtn.addEventListener("click", handleRound)




