//javscript Object
//object => property and methods


let name1 = "Mayuri"
console.log(name1) //Mayuri
console.log(typeof name1) //string

let firstName = new String('MayuriK')
console.log(firstName)
console.log(typeof firstName)
console.log(firstName.toUpperCase())

let student = ['mayuri', 'ram', 'sham']
student.push('jaya')
console.log(student)

let student1 = new Array(3)
console.log(student1)
student1.push('sathish')
console.log(student1)

student1[0] = "rohit"
console.log(student1)

//object
//string
//array

//SET
let setA = new Set()
console.log(setA)
//unique value
//set does not store value with index
//property
//method

//1. add() => method
setA.add('Mayuri')
console.log(setA)

setA.add('Rushi')
console.log(setA)

let setB = new Set("Mayuri")
console.log(setB)

//size => property
let a1 = "asdsghdjjdjjdjdkdkkd"
let setC = new Set(a1)
console.log(setC)
let a2 = setC.size
console.log(a2)

let setD = new Set(['Mayuri', 'sham', 'ram', 'jaya'])
console.log(setD)
console.log(setD.size)

//2. has()
// let setE = new Set()
// setE.add('ganesh')
// setE.add('Ganesh')
// console.log(setE)

// let setF = new Set(['jaya', 'radha', 'poorva', 'shantanu'])
// let s1 = setF.has('Radha')
// console.log(s1)

// console.log(setF.has('jaya'))

//3. delete()
// let setF = new Set(['jaya', 'radha', 'poorva', 'shantanu','manish'])
// console.log(setF.size)
// let s2=setF.delete('manish')
// console.log(s2) //true
// console.log(setF)

//4. clear()
let setG = new Set(['jaya', 'radha', 'poorva', 'shantanu', 'manish'])
let s3 = setG.clear()
console.log(s3) //undefined
console.log(setG)

//===================================================================


// let student2 = ['Pranali', 'jaya', 'radha', 'poorva', 'shantanu', 'manish']
// for (let i = 0; i < student2.length; i++) {
//     console.log(student2[i])
// }

// let student3 = {
//     firstName: "Mayuri",
//     lastName: "Katwe",
//     age: 24,
//     skill: "java"
// }
// for (let key in student3) {
//     console.log(key, student3[key])
// }

let a11 = new Set(['Pranali', 'jaya', 'radha', 'poorva', 'shantanu', 'manish'])
// for(let val of a11){
//     console.log(val)
// }

//5.forEach()
a11.forEach(function(el){
    console.log(el)
})















