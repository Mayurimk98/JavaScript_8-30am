
// //for loop
// let num=[12,34,56,78,90]
// console.log(num.length)
// //console.log(num.length)

// //90
// console.log(num[4]) //90
// console.log(num[num.length-1]) //90

// //100
// console.log(num.unshift(100)) //6
// console.log(num) // [ 100, 12, 34, 56, 78, 90 ]

// let a1=num.indexOf(34)
// console.log(a1) //2

// let r1=num.includes(56)
// console.log(r1)

// let b1=num.reverse()
// console.log(b1)

// let marks = [3, 7, 9]
// //+2 [5,9,11]
// let arr = []
// for (let i = 0; i < marks.length; i++) {
//     //console.log(i)
//     //console.log(marks[i])
//     let val = marks[i] + 2
//     arr.push(val)
// }
// console.log(arr) //[ 5, 9, 11 ]

//map() => perform operation with each element of array
//return =>array
// let marks = [3, 7, 9]
// let a1 = marks.map(function (el, index, arr) {
//     return el + 2
// })
// console.log(a1)

// let RN=[12,45,78,90]
// //*2
// let result=RN.map(function(el,index,arr){
//     return el*2
// })
// console.log(result) //[ 24, 90, 156, 180 ]

//====================================================================

// let names = ["mayuri", "jaya", "sathish", "shravani", "samu", "sham"]
// // 4 char=>  ["jaya","samu","sham"]
// let len4 = []
// for (let i = 0; i < names.length; i++) {
//     //console.log(names[i])
//     if (names[i].length == 4) {
//         len4.push(names[i])
//     }
// }

// console.log(len4) //[ 'jaya', 'samu', 'sham' ]

//filter()
// let names = ["mayuri", "jaya", "sathish", "shravani", "samu", "sham"]
// let s1=names.filter(function(el,index,arr){
//     return el.length==4
// })
// console.log(s1) //[ 'jaya', 'samu', 'sham' ]

// let marks=[23,11,9,55,77,45,34]
// let result = marks.filter(function (el, index, arr) {
//     return el>20
// })
// console.log(result) //[ 23, 55, 77, 45, 34 ]

//=================================================================

let num1 = [4, 8, 10]
// let sum = 0  //4 //12  //22
// for (let i = 0; i < num1.length; i++) {
//     sum = sum + num1[i]  //0+4 = 4   ,  4+8  =12  , 12+10 = 22
// }
// console.log(sum)//22

//reduce()
let sum1=num1.reduce(function (acc, el, index, arr) {
    return acc + el
},0)
console.log(sum1) //32

//1. push()
//2. unshift()
//3. pop()
//4. shift()
//6. indexOf()
//7. includes()
//8. map()
//9. filter()
//10. reduce()






