
//Map()
//Filter()
//forEach()
//Some()
//Every()
//find()
//findIndex()
//reduced()
//             -5       -4       -3       -2     -1
// let student=['mayuri','ankita','rohan','sham','radha']
// //             0         1        2       3      4
// console.log(student.length) //5
// //slice()
// //action=> piece 
// //return => array
// //slice(startposition,endposition)

// let a1=student.slice(2)
// console.log(a1) //['rohan','sham','radha']

// let a2=student.slice(1,4)
// console.log(a2)

// let a3=student.slice(3,0) //right to left output is blank array
// console.log(a3)


//             -5       -4       -3       -2     -1
// let student=['mayuri','ankita','rohan','sham','radha']
// //             0         1        2       3      4

// let s1=student.slice(-2)
// console.log(s1)

// let s2=student.slice(-2,-5)
// console.log(s2)

// let s3=student.slice(0,-2)
// console.log(s3)


//splice()
let student1 = ['mayuri', 'ankita', 'rohan', 'sham', 'radha']
//             0         1        2       3      4
//splice(startposition,numberofdeletedelement)
//splice(startposition,numberofdeletedelement,ele1,el2)

// let y1=student1.splice(0,2)
// console.log(y1)


// let y2=student1.splice(2,2)
// console.log(y2)
// console.log(student1)

// let u1=student1.splice(0,3,'sanchita','pranali','ram')
// console.log(u1)
// console.log(student1)

//fill()
// let numbers = [2, 3, 4, 5, 6, 7, 8]
// //             0  1  2  3  4  5  6
// // let s12 = numbers.fill('true')
// // console.log(s12)

// let s34=numbers.fill('mayuri', 2, 5)
// console.log(s34)

//flat()
let arr1=[[2,3,4],[5,6,7],[8,9,10]]  //[2,3,4,5,6,7,8,9,10]
console.log(arr1[0][1]) //3

console.log(arr1[2][2]) //10

let u12=arr1.flat()
console.log(u12)





