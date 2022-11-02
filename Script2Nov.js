
let student1 = {
    firstName: "Mayuri",
    lastName: 'katwe',
    age: 24,
    skills: ['js', 'java', 'python']
}


let student2 = {
    firstName: "Vishal",
    lastName: 'kulkarni',
    age: 12,
    skills: ['SQL', 'Selenium', 'Cypress']
}
//retrive
console.log(student2.age) //12
console.log(student2['firstName']) //Vishal

//add
student1.city = 'Nashik'
console.log(student1)

student2['city'] = 'pune'
console.log(student2)

//update
student2.age = 40
console.log(student2)

console.log(student2['skills'])// ['SQL', 'Selenium', 'Cypress']
student2['skills'][1] = 'react'
console.log(student2['skills'])

//delete
delete student1.age
console.log(student1)

//template =>object creation
//1. function constructor
//2. ES6 class
//3. object.create

//1. Function constructor
function Student(firstName, lastName, age, skill) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.skill = skill
}

let mayuri = new Student('Mayuri', 'Rao', 12, ['js', 'manual'])
console.log(mayuri)

let shantanu = new Student('shantanu', 'gupta', 20, ['SQL', 'Jmeter'])
console.log(shantanu)

console.log(shantanu.age)//20
shantanu.city = 'dhule'
console.log(shantanu.city)
console.log(shantanu)

shantanu.lastName = 'kumar'
console.log(shantanu)

//ES6 class
class Student3 {
    constructor(fn, ln, ag, sk) {
        this.firstName = fn
        this.lastName = ln
        this.age = ag
        this.skills = sk
    }
}
let rahul=new Student3('rahul','jagtap',30,['Django','nodejS'])
console.log(rahul)

rahul.firstName='Rohit'
console.log(rahul)
rahul.city='jalgoan'
console.log(rahul)
delete rahul.city
console.log(rahul)













