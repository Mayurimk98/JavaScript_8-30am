//call/ bind / apply

// let mayuri = {
//     firstName: "Mayuri",
//     lastName: "Katwe",
//     display: function () {
//         console.log(this.firstName + this.lastName)
//     }
// }
// mayuri.display() //function call

// let a = mayuri.display //print the value of function

// a=// function () {
//     console.log(this.firstName + this.lastName) //undefined+undefined => NaN
// }

// console.log(a) //function body
// a()

// let a1 = mayuri.display.bind(mayuri)
// a1()

// let person1 = {
//     firstName: "Dinga",
// }

// let person2 = {
//     firstName: "Pinga"
// }

// let person3 = {
//     firstName: "Ringa"
// }

// let person4 = {
//     firstName: "Shinga"
// }

// let displayName = function () {
//     console.log(this.firstName)
// }

//bind
// let p1=displayName.bind(person1)
// p1() 

// let p4=displayName.bind(person4)
// p4()

//call
// displayName.call(person3)
// displayName.call(person2)

//apply
// displayName.apply(person1)
// displayName.apply(person2)

//====================================================================

let person1 = {
    firstName: "Dinga",
}

let person2 = {
    firstName: "Pinga"
}

let person3 = {
    firstName: "Ringa"
}

let person4 = {
    firstName: "Shinga"
}

let displayName = function (greet1, greet2) {
    console.log(greet1, this.firstName, greet2)
}

//bind
let s1=displayName.bind(person1,"good morning","hav a nice day")
s1()

//call
displayName.call(person2,"goodnight","sweet dream")

//apply
displayName.apply(person3,["good evening","good day"])









