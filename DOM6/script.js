//   <p id="one" class="two" name="para">Paragraph</p>

//By Tagname
let a1 = document.querySelector('p')
console.log(a1)

//By ID
let a2 = document.querySelector('#one')
console.log(a2)

//by ClassName
let a3 = document.querySelector('.two')
console.log(a3)

//CF
let a4 = document.querySelector('p[name="para"]')
console.log(a4)

let liElement = document.querySelectorAll('li')
console.log(liElement)

for(let i=0;i<liElement.length;i++){
    //console.log(liElement[i])//html element
    console.log(liElement[i].textContent) //text
    liElement[i].style.color='red'
}

// let rn=[11,22,33]
// for(let i=0;i<rn.length;i++){
//     console.log(rn[i])
// }

//==============RETRIVE==========================
let q1=document.getElementById('one')
console.log(q1)

let q2=document.querySelectorAll('.flower')
console.log(q2) //nodelist

let q3=document.getElementsByClassName('flower')
console.log(q3)//htmlcollection


console.log(q2.length)
console.log(q3.length)






