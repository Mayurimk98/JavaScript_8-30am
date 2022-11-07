//<h1>Student</h1>
//<button>ClickMe</button>

let heading = document.querySelector('h1')
console.log(heading)

let button = document.querySelector('button')
console.log(button)

button.addEventListener('click',function(){
    heading.textContent='Mayuri'
    heading.style.color='red'
})