//function
//operators
//string

//Array

//Javascript=> Object
//Property
//Method

//car
//property=> color,modelnumber,name,avg
//method=>start(),start()

//method
//action
//return

// let a=10
// console.log(10) //10

// //let b=20,30

// //array => collection to store multiple value

// let student=['mayuri','sunil','rohan','sonu','sana']

// let rollNumber=['20','30','40','50']
// //               0  1  2  3
// console.log(rollNumber[2]) //40

// console.log(rollNumber.length) //4

// console.log(student.length)

//array => property => length
//methods

// let fruits=["mango",'apple','grapes']
// // console.log(fruits.length) //3
// // //1. push()
// // //action => add the element at last of array
// // //return => new length
// // let a=fruits.push("papaya")
// // console.log(a)
// // console.log(fruits)

// //2. unshift()
// //action =>add the elemnet at first
// //return =>new length
// let b=fruits.unshift("cherry")
// console.log(b) //4
// console.log(fruits)

//3. pop()
//action => removed the last element from array
//return => return removed element

// let marks=[20,33,40,50,99]
// let a1=marks.pop()
// console.log(a1) //99
// console.log(marks) //[20,33,40,50]

// //4. shift()
// //action=> remove the element from first
// //return => removed element
// let result=marks.shift()
// console.log(result) //20
// console.log(marks)

//Array
//Push()
//Shift()
//Unshift()//new length
//pop() // removed element

let names=['mayuri','teju','sameer']
console.log(names.includes('mayuri'))//true
console.log(names.indexOf('teju'))//1


let fruit=['apple','grapes','chiku','cherry']
console.log(fruit[3])
console.log(fruit.length)//4
console.log(fruit.length-1) //3
console.log(fruit[fruit.length-1])

//for loop

// for(initialization,condition check,incremenet/decrement){
//     console.log()
// }

for(let i=0;i<5;i++){
    console.log(i)  //0 ,1 ,2,3,4
}

for(let i=0;i<fruit.length;i++){
    console.log(i)
    console.log('hi')
    console.log(fruit[i])
}

let birthYear=[1995,1997,1998,2001]

//output=> array =>age
//2022-1995 //27
//2022-1997//25
//2022-1998 //24
//2022-2001//21
//[27,25,24,21]
// let ages=[]

// for(let i=0;i<birthYear.length;i++){
//     console.log(i)
//     console.log(birthYear[i])//1995
//     console.log(2022-birthYear[i]) //2022-1995
//     let ag=2022-birthYear[i]
//     ages.push(ag)
// }
// console.log(ages)



