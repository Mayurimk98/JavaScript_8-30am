let heading = document.querySelector('h1')
let inputBox = document.querySelector('input')
let button = document.querySelector('button')

button.addEventListener('click', function () {
    let text = inputBox.value
    heading.textContent = text
    heading.style.color = text
    inputBox.value=""

})



// let student = {
//     firstName: "Mayuri"
// }
// student.firstName
// studemt.firstName = 'ganesh'

// let input={
//     value:"value"
// }
// input.value