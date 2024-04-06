const studentForm = document.getElementById('studentForm')
const studentContainer = document.querySelector('.students')
const nameInput = studentForm['name']
const ageInput = studentForm['age']
const rollInput = studentForm['roll']
// console.log(nameInput, ageInput, studentRoll)

const students = [
    {
        name: "hanna",
        age: 12,
        roll: 32,
    },

];

const addStudents = (name, age, roll) => {
    students.push({
        name,
        age,
        roll
    })

}

const createStudentElement = ({ name, age, roll }) => {
    const studentDiv = document.createElement('div')
    const studentName = document.createElement('h2')
    const studentage = document.createElement('p')
    const studentRoll = document.createElement('p')

    studentName.innerText = "student name :" + name
    studentage.innerText = "student age :" + age
    studentRoll.innerText = "student roll :" + roll
    studentDiv.append(studentName, studentage, studentRoll);
    studentContainer.appendChild(studentDiv)
}


students.forEach(createStudentElement)

studentForm.onsubmit = (e) => {
    e.preventDefault()
    const newStudent = addStudents(
        nameInput.value,
        ageInput.value,
        rollInput.value
    )

    createStudentElement(newStudent)

    nameInput.value = ''
    ageInput.value = ''
    rollInput.value = ''
}