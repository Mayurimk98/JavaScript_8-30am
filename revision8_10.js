// let a=10
// console.log(typeof a) //number

// let firstName='mayuri'
// console.log(typeof firstName)  //string

// let rollNumber=`100`
// console.log(typeof rollNumber) //string

// let a1=100
// console.log(a1) //100

// a1=300 //update
// console.log(a1) //300

// a1=a1+50
// console.log(a1) //350

// const b1=250
// console.log(b1) //250

// b1=700 //we cant update with const keyword
// console.log(b1) //error


// let s=10
// let v=5
// console.log(s+v)//15
// console.log(s-v)//5
// console.log(s*v)//50
// console.log(s/v)//2
// console.log(s%v)//0

// let x=200
// let y=50
// console.log(x+y)
// console.log(x-y)
// console.log(x*y)
// console.log(x/y)
// console.log(x%y)

//10 pair => 50 number of line 

//function

// function calculator(a,b){
//     console.log(a+b)
//     console.log(a-b)
//     console.log(a*b)
//     console.log(a/b)
//     console.log(a%b)
// }
// calculator(10,5)
// calculator(300,11)

//3 type => parameter ,return statements
//1. function without parameter and without return type
// function add() {
//     console.log(10 + 5)
// }
// add() //15
// add() //15
// add()//15

//2. function with parameter and without return type
// function sub(x,y){
//     console.log(x-y)
// }
// sub(20,2)
// sub(100,50)
// sub(30,3)

//3. function with parameter and with return type
// function mul(a, b) {
//     return a * b
// }
// let a1 = mul(20, 2)
// console.log(a1)
// console.log(a1+100)
// console.log(a1*9)

//==================================================
//to write function
//1. function declaration

// function add(a, b) {
//     return a + b
// }
// let x1 = add(40, 20)
// console.log(x1) //60

//2. function expression
// let add1 = function (x, y) {
//     return (x + y)
// }
// let a1 = add1(90, 22)
// console.log(a1)


//3. arrow function
// let add2 = (x, y) => {
//     return (x + y)
// }
// let a2 = add2(90, 22)
// console.log(a2)


//string
let firstName = "Mayuri"
console.log(typeof firstName)

//javascript => object
//property
//methods

//human=> object
//property => height,weight,color,age,lang,skill
//methods => walk(),sleep(),talk()

//method study()
//action=> learn something
//return => good job

//String
//propery
//methods

// let student='ganesh'
//string stored the value with the help of index
//index starts with zero

// g    a   n   e   s   h
// 0    1   2   3   4   5

// console.log(student) //ganesh
// //string => property = length
// console.log(student.length) //6

// console.log(student[0]) //g
// console.log(student[5])//h

//length-1 => last index
// let student='ganesh'
// console.log(student[student.length-1])

//methods
//1. toUpperCase()
//convert char into capital case
//string
//let student = 'Ganesh'
// let a = student.toUpperCase()
// console.log(a)
// console.log(typeof a)

//2. toLowerCase()
// let b = student.toLowerCase()
// console.log(b)
// console.log(typeof b)

//3. includes()
// let c=student.includes('g')
// console.log(c)
// console.log(typeof c)

// let d=student.includes('esh')
// console.log(d)

// //4. indexOf()
// let city='nashik'
// let a1=city.indexOf('a')
// console.log(a1)

// let b1=city.indexOf('K')
// console.log(b1)//-1

// //5. trim()
// let city1=' dhule '
// console.log(city1.length) //7
// let y1=city1.trim()
// console.log(y1)
// console.log(y1.length) //5

//6. trimStart()
// let firstName1=' mayuri '
// console.log(firstName1.length) //8
// let y12=firstName1.trimStart()
// console.log(y12) //mayuri 
// console.log(y12.length) //7

//7. trimEnd()
// let firstName1=' mayuri '
// console.log(firstName1.length) //8
// let u1=firstName1.trimEnd()
// console.log(u1)// mayuri
// console.log(u1.length) //7

//8. startsWith()
// let firstName1 = 'mayuri'
// let a1 = firstName1.startsWith('m')
// console.log(a1)

//9. endsWith()
// let firstName1 = 'mayuri'
// let r1=firstName1.endsWith('I')
// console.log(r1)//false

//10. charAt()
let city='nanded'

// n a n d e d
//0  1 2 3 4 5
// let s1=city.charAt(2)
// console.log(s1) //n

// let y1=city.charAt(4)
// console.log(y1) //e

//11.charCodeAt()
let s2=city.charCodeAt(4)
console.log(s2) //e(101)

//12. replace()
let y12=city.replace('a','p')
console.log(y12)

//13. slice()
//will take tommorrow













