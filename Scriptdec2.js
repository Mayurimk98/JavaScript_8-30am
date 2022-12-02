//Actual difference between arrow function and function expression

//type of function
//1. function declaration
//2. function expression
//3. arrow function

// let greeting = () => {
//     console.log('welcome')
// }
// greeting()

// function display() {
//     console.log('hello')
// }
// display()

// let init = function () {
//     console.log('bye')
// }
// init()


// javascript => object
// window => parent object

// let a = 20  //block 
// console.log(a) //20

// var b = 40 //global
// console.log(b) //40

// // alert()
// window.alert()

// window.prompt('hello')

//program 1

// let person = {
//     firstName: "Mayuri",
//     lastName: "Katwe",
//     age: 23,
//     info: function () {
//         console.log(this == person) //true
//         console.log(this.firstName + this.lastName) //MayuriKatwe

//         let greeting = function () {
//             console.log(this == window) //true
//             console.log(`Welcome ${this.firstName + this.lastName}`)
//             //undefined+undefined=NaN
//         }
//         greeting()
//     }
// }
// console.log(person.info)
// console.log(person.age) //23
// //objectName.key=value
// person.info()

//=================================================================

//program 2
// let firstName="Vaibhav"
// let lastName="joshi"
// let person = {
//     firstName: "Mayuri",
//     lastName: "Katwe",
//     age: 23,
//     info: function () {
//         console.log(this == person) //true
//         console.log(this.firstName + this.lastName) //MayuriKatwe

//         let greeting = function () {
//             console.log(this == window) //true
//             console.log(`Welcome ${this.firstName + this.lastName}`) 
//              //Welcome NaN
//         }
//         greeting()
//     }
// }
// person.info()

//program 3
// var firstName="Vaibhav"
// var lastName="joshi"
// let person = {
//     firstName: "Mayuri",
//     lastName: "Katwe",
//     age: 23,
//     info: function () {
//         console.log(this == person) //true
//         console.log(this.firstName + this.lastName) //MayuriKatwe

//         let greeting = function () {
//             console.log(this == window) //true
//             console.log(`Welcome ${this.firstName + this.lastName}`) 
//              //Welcome Vaibhavjoshi
//         }
//         greeting()
//     }
// }
// person.info()

//=============================================================

//program 4

// let person = {
//     firstName: "Mayuri",
//     lastName: "Katwe",
//     age: 23,
//     info: function () {
//         console.log(this == person)
//         console.log(this.firstName + this.lastName) //MayuriKatwe

//         //parent's this scope(this==person)
//         let greeting = () => {
//             console.log(`Welcome ${this.firstName + this.lastName}`) //Welcome MayuriKatwe
//         }
//         greeting()
//     }
// }
// person.info()


//Program 5

//window
// let person = {
//     firstName: "Mayuri",
//     lastName: "Katwe",
//     age: 23,
//     info: () => {
//         //prents of parent(this==window)
//         console.log(this.firstName + this.lastName)  //NaN
//         //parent's this scope(this==window)
//         let greeting = () => {
//             console.log(`Welcome ${this.firstName + this.lastName}`)  //Welcome NaN
//         }
//         greeting()
//     }
// }
// person.info()

var firstName="rohit"
var lastName="sharma"
let person = {
    firstName: "Mayuri",
    lastName: "Katwe",
    age: 23,
    info: () => {
        //prents of parent(this==window)
        console.log(this.firstName + this.lastName)  
        //parent's this scope(this==window)
        let greeting = () => {
            console.log(`Welcome ${this.firstName + this.lastName}`) 
        }
        greeting()
    }
}
person.info()






