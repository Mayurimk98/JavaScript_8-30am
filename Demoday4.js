// //1. function without parameter and without return type

// function sum(){
//     console.log(10+20)
// }
// sum()
// sum()
// sum()

// //2. function with parameter and without return type

// function sum1(a,b,c){
//     console.log(a+b+c)
// }
// sum1(22,31,10) //63
// sum1(300,200,100)//600

// //3. function with parameter and with return type

// function sum2(a,b){
//     return a+b
// }
// let result=sum2(10,20)
// console.log(result) //30

// function sub(x,y){
//   return x-y  
// }
// let subResult=sub(100,20)
// console.log(subResult) //80

//////////////////////////////////////////
//type of function

//1. function declaration
// function add(a,b){
//     return a+b
// }
// let sum=add(10,5)
// console.log(sum)

//2. function expression
// let add = function (a, b) {
//     return a + b
// }
// let sum = add(10, 5)
// console.log(sum)

//3. arrow function 
// let add = (a, b) => {
//  console.log(a + b)
// }
// add(10, 5)

//typeof 

// let a = 10
// console.log(a)
// console.log(typeof a) //number

// let firstName = 'm'
// console.log(typeof firstName) //string

// let isWorking = false //boolean
// console.log(typeof isWorking)


//comparision operation => boolean => true , false
//<, >, <=, >=,!,!=

// console.log(6 > 5) //true

// console.log(6 < 9) //true

// console.log(6 == 6) //true

// console.log(7 == '7') //true => check value only

// console.log(typeof 7)
// console.log(typeof '7')

// console.log(7 === '7') //check value as well as datatype

// console.log('777')

// let firstName='mayuri' //string
// console.log(typeof firstName)
// let rollNumber='666' //string
// console.log(typeof rollNumber)

// console.log( 1 == '1')  //true
// console.log(1 === '1') //false

// console.log(4 <= 8) //true
// console.log(3 >= 10) //false

// console.log(4 !=='4') //false

// console.log(4=='4') //true

// console.log(4!='4')//false

// console.log(10=='10') //true

// console.log(10 !='10')//false

//logical operator
//&& => AND opeartor
//|| => OR opeartor
// ! => NOT operator

//&& opeartor ( multiplication)
//True True  => True
//True false => False
//False True => False
//Flase false => false

// console.log(6 === 6 && 6 !== '6') //true
// console.log(7 == '7' && 6 <= 5) //false
// console.log(6 > 7 && 6 == 6) //false
// console.log(10==20 && 5!==5) //false

//|| operator (addition)
//True True  => True
//True false => True
//False True => True
//Flase false => False

// console.log(8 === 8 || 6 !== '6')
// //true || true => true

// console.log(6 == 6 || 6 <= 5) //true
// //true  false 

// console.log(6 > 7 || 8 == '8')
// //false || true ==> true

// console.log(20 == 21 || 5 !== 5)
// //false false => false

//NOT (!)
//!true => false
//!flase => true
// console.log( !(10 ==="10")) //value , datatype => true
// console.log(! (5 !=='5'))  //false