// let years = [1989, 1990, 1991, 1992]
// //            0     1      2    3
// // console.log(years.length) //4

// // console.log(years[2]) //1991

// //current age 
// //2022-1998= 33

// //map() =>
// //action => perform action with each element
// //return => new array
// let age = years.map(function (el, index, arr) {
//     return 2022 - el
// })
// console.log(age)

// //filter
// let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10]
// //[6,7,8,9,10]
// let greaterFive = numbers.filter(function (el, index, arr) {
//     return el > 5
// })
// console.log(greaterFive)

// //reduce()
// let digits = [1, 2, 3, 4]
// let sum = 0  //1 3 6 10
// for (let i = 0; i < digits.length; i++) {
//     sum = sum + digits[i]   //0+1  //1+2  //3+3  6+4
// }
// console.log(sum)

// let addition = digits.reduce(function (acc, el, index, arr) {
//     return acc + el  //10+1  11+2
// },0)
// console.log(addition)//10


//forEach()
// let student=['mayuri','jaya','sathish','ram']
//Hello mayuri !
//Hello Jaya !

// for(let i=0;i<student.length;i++){
//     console.log(`Hello ${student[i]} !`)
// }

// student.forEach(function(el,index,arr){
//     console.log(`Hello ${el} !!!`)
// })

//some()
let rollNum=[2,3,4,5,6,7,8,9]
let a1=rollNum.some(function(el,index,arr){
    return el>5
})
console.log(a1)

//every()
let rollNum1=[2,3,4,5,6,7,8,9]
let b1=rollNum1.every(function(el,index,arr){
    return el>1
})
console.log(b1)


//find
// let rollNum2=[2,3,4,5,6,7,8,9]
// let a12=rollNum2.find(function(el,index,arr){
//     return el>5
// })
// console.log(a12) //6

//findIndex
let rollNum2=[2,3,4,5,6,7,8,9]
let a12=rollNum2.findIndex(function(el,index,arr){
    return el>5
})
console.log(a12) //4
