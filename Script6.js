//JavaScript =>Object

//String => Object
//Property
//Methods

//String property , and string method
//Method => toUpperCase()
//Property =>length

//Method 
//1.toUpperCase()
let flower='SunFlower'
console.log(typeof flower)

let a=flower.toUpperCase()
console.log(a)//SUNFLOWER

let b=flower.toLowerCase()
console.log(b) //sunflower

let c=flower.indexOf('a')
console.log(c) //-1

let d=flower.indexOf('s')//javaxsript case sensitive
console.log(d) //-1

let e=flower.indexOf('F')
console.log(e) //3

//trim()
//let student=' Mayuri '
// console.log(student.length)
// let a1=student.trim()
// console.log(a1)
// console.log(a1.length) //6

//trimStart()
// let student=' Mayuri '
// console.log(student.length)//8
// let b1=student.trimStart()
// console.log(b1)
// console.log(b1.length) //7

//trimEnd()
// let student=' Mayuri '
// console.log(student.length)
// let d1=student.trimEnd()
// console.log(d1)
// console.log(d1.length)

//Startwith() =>boolean
// let firstName='Ganesh'
// let e1=firstName.startsWith('G')
// console.log(e1)

// let e11=firstName.startsWith('Gan')
// console.log(e11)

// let e12=firstName.startsWith('Gne')
// console.log(e12)

//endsWith()
let firstName='Ganesh'
// let result=firstName.endsWith('Gan')
// console.log(result) //false

// let a11=firstName.endsWith('h')
// console.log(a11)

// let s1=firstName.endsWith('nesh')
// console.log(s1)

// let studentName='Mayuriakayyy'
//replace
//action => relace existing char with new char(change the first char)
//retuen =>string

// let a12=studentName.replace('y','z')
// console.log(a12) //Mzyuriaka

// let str='I learn javascript'
// let s1=str.replace('javascript','python')
// console.log(s1)

// let str1='I learn javascript and i like javascript'
// let str2=str1.replace('javascript','python')
// console.log(str2)

let studentName='Mayuriakayyy'
let a11=studentName.replaceAll('a','z')
console.log(a11) //Mzyurizkzyyy

let str1='I learn javascript and i like javascript'
let str2=str1.replaceAll('javascript','python')
console.log(str2)










