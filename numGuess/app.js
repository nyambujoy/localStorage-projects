const userInput = document.querySelector('#userInput');
const submit = document.getElementById('submit')
const playAgain = document.getElementById('again')
console.log(userInput)



const handleSubmit = () => {

    let userValue = Number(userInput.value.trim())
    console.log(typeof (userValue))
}

function pickARandom() {
    randomNum = Math.floor(Math.random() * 101)
    // console.log(randomNum)
    return randomNum
}

// console.log(pickARandom())

submit.addEventListener("click", handleSubmit)