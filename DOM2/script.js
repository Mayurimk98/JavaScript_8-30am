//<p class="one" id="unique" name="para">Paragraph</p>

//byTagName
let a = document.querySelector('p')
console.log(a)

//byClass
let b = document.querySelector('.one')
console.log(b)

//byID
let c = document.querySelector('#unique')
console.log(c)

//commonformula  => tagname[attribute='value']
let d=document.querySelector('p[name="para"]')
console.log(d)

//html => object
console.log(a.textContent)
console.log(a['textContent'])

a.addEventListener('click',function(){
    a.textContent='This is paragraph'
    a.style.color='yellow'
    a.style.backgroundColor='green'
})






// let person={
//     firstName:'Mayuri',
//     lastName:'katwe',
//     family:{
//         father:'mahendra'
//     }

// }
// console.log(person.firstName)  //Mayuri
// person.firstName='Vaibhav'

// person.family.father
