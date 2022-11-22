
//function constructor
//Es6 class
//Object.create

//ES6 Class
class Person {
    firstName = "Mayuri"
    lastName = "Katwe"
    age = 34
    rollNumber = 12
    city = "Nashik"
}

let mayuri = new Person()
console.log(mayuri)

let ganesh = new Person()
console.log(ganesh)
ganesh.firstName = "Ganesh"
ganesh.lastName = "mule"
ganesh.age = 23
ganesh.rollNumber = 78
ganesh.city = "Pune"
console.log(ganesh)

//constructor => update the property at the time of object creation
// class Employee {
//     constructor(firstName, lastName, empId, age, salary) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.empId = empId
//         this.age = age
//         this.salary = salary
//         this.info = function () {
//             this.firstName + this.lastName
//         }
//     }
// }

// let rahul = new Employee("Rahul", "Kumar", 1234, 34, 20000)
// console.log(rahul)

// let shivam = new Employee('Shivam', "Puri", 5555, 56, 30000)
// console.log(shivam)


// class Employee {
//     constructor(firstName, lastName, empId, age, salary) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.empId = empId
//         this.age = age
//         this.salary = salary
//     }
//     info() {
//         console.log(this.firstName + this.lastName)
//     }
// }

// let Mayuri = new Employee('Mayuri', "Katwe", 34, 12, 10000)
// console.log(Mayuri)

// let Sham = new Employee('Sham', "deokar", 123, 22, 56748)
// console.log(Sham)

// Mayuri.info()
// Sham.info()

//========================================
//object.create

// let ram = Object.create({})
// console.log(ram)

// ram.firstName = "Ram"
// ram.lastName = "Raut"
// ram.age = 23
// ram.rollNo = 34
// console.log(ram)


// let person = {
//     information: function (firstName, lastName, age, rollno) {
//         this.FN = firstName
//         this.LN = lastName
//         this.AG = age
//         this.RN = rollno
//     },
//     display: function () {
//         console.log(this.FN + this.LN)
//     }
// }

// let rohit = Object.create(person)
// console.log(rohit)

// rohit.information("rohit", "sharma", 23, 56)
// console.log(rohit)
// rohit.display()

///==========================================

function Person1(fn, ln, ag, rn) {
    this.firstName = fn
    this.lastName = ln
    this.age = ag
    this.rollNumber = rn
}

let anu = new Person1("Anu", "Kumari", 45, 89)
console.log(anu)

Person1.prototype.display = function () {
    console.log(this.firstName + this.lastName)
}
console.log(anu)
anu.display()



