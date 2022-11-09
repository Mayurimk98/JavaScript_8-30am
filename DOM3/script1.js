let ulList = document.querySelector('ul')
let inputBox = document.querySelector('input')
let button = document.querySelector('button')

button.addEventListener('click', function () {
    let text = inputBox.value //Manjiri
    let newLiElement = document.createElement('li') //<li></li>
    newLiElement.textContent = text //<li>Manjiri</li>
    ulList.appendChild(newLiElement)
    inputBox.value = ""

})




{/* <h1>Student</h1>
<ul>
    <li>Mayuri</li>
    <li>Sathish</li>
    <li>Jaya</li>
    <li>Amit</li>
   <li>Manjiri</li>
</ul>
<input type="text">  //Manjiri
<button>AddMe</button> */}