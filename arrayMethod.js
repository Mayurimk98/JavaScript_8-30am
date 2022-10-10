// let marks = [20, 12, 45, 67, 30, 35, 70, 97]

// //map()
// //action => perform action with each and every element
// //return => new array

// let plus5 = marks.map(function (el, index, arr) {
//     return el + 5
// })
// console.log(plus5)

// //fliter()
// //action => compare element based on given condition,filterout the elements
// //return  => array

// let rollNumber = [43, 78, 67, 45, 32, 11, 90]
// let a1 = rollNumber.filter(function (el, index, arr) {
//     return el > 30
// })
// console.log(a1)

//reduces()
//action => return single value by performing action with each element
//return => single value

// let digits = [2, 3, 4, 5, 6, 7]
// let addition=digits.reduce(function(acc,el,index,arr){
//     return acc+el
// },0)
// console.log(addition)


// let a=20
// a=30

// let sum = 0 //2 5 9 15 22
// for (let i = 0; i < digits.length; i++) {
//     sum = sum + digits[i]  //0+2  2+3 5+4 9+6 15+7
// }

// console.log(sum) //27

//forEach()
//action => perform action with each element
//return => ntg

let names = ['mayuri', 'sweta', 'ram', 'sita']
//welcome mayuri
//welcome sweta
//welcome ram

// for(let i=0;i<names.length;i++){
//     console.log(`Welcome ${names[i]}`)
// }

names.forEach(function (el, index, arr) {
    console.log(`Welcome ${el}`)
})

//some()
let array1 = [2, 3, 4, 5, 6, 7, 8, 9]
// let b1=array1.some(function(el,index,arr){
//     return el>5
// })
// console.log(b1)

//every()
let c1 = array1.every(function (el, index, arr) {
    return el > 5
})
console.log(c1)

//find()
let marks2 = [11, 22, 20, 55, 66, 77, 88, 99]
// let s1=marks2.find(function (el, index, arr) {
//     return el > 30
// })
// console.log(s1)

//findIndex
// let s1=marks2.findIndex(function (el, index, arr) {
//     return el > 30
// })
// console.log(s1) //3


let p1=marks2.findIndex((el)=>{
    return el>30
})
console.log(p1)


