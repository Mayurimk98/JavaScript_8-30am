// console.log('mayuri')
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)

//1=1000
//loops  => repetative action based on condition
//for loop , while loop

//for loop
//for(initialization;conditioncheck;increment/decrement){
//statemenets  
//}

//forward
//1-5 number 
// for (let i = 1; i <= 5; i++) { //2  3 4 5 6
//     console.log(i) //1 2  3 4 5
// }

//good morning => 3
// for (let i = 1; i <= 3; i++) {
//     console.log('good morning')
// }


// let a=20
// a=30+5
// console.log(a)

// table of 5
// for (let i = 5; i <= 50; i = i + 5) {  //5<=50  5+5  10<=50  10+5
//     console.log(i) //5  10  15 ......
// }

//reverse
//5-1
// for (let i = 5; i >= 1; i--) { //4  3  2  1 0
//     console.log(i)  //5   4  3  2  1
// }

//1. break statement
//0-5 number

// for (let i = 0; i <= 5; i++) { //1 2  3
//     if (i == 3) {
//         break;
//     }
//     console.log(i)  //0  1   2
// }


// for (let i = 0; i <= 5; i++) { //1  2  3
//     console.log(i) //0  1  2  3
//     if (i == 3) {
//         break;
//     }
// }


//continue statement=> to ecape the perticular condition

// for (let i = 0; i <= 5; i++) {
//     if (i == 3) {
//         continue
//     }
//     console.log(i)
// }

// for (let i = 1; i <= 10; i++) { //2  3 4  5  6 7 8 9 10
//     if (i > 5) { //1>5  2>5  3>5  4>5  5>5  6>5  7>5 8>5 9>5 10> 5
//         continue
//     }
//     console.log(i) //1  2  3  4  5
// }


// let student = 'shantanu'
// console.log(typeof student)


// for(let i=0;i<student.length;i++){
//     //console.log(i) //index
//     console.log(student[i])
// }


// for (let j = student.length - 1; j >= 0; j--) {
//     console.log(student[j])
// }


let marks = [10, 20, 30, 40, 50]
//        0   1  2  3  4

console.log(marks.length)

for (let i = 0; i < marks.length; i++) {
    //console.log(i)
    console.log(marks[i])
}