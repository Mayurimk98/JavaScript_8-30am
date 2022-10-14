//While loop with continue

// let i = 0 //0
// while (i <= 5) {  //0<=5  1<=5 2<=5  3<=5  4<=5  5<=5  6<=5
//     if (i == 3 ) { //0==3  1==3  2==3  3==3  4==3  5==3
//         i++   //4
//         continue
//     }
//     console.log(i) //0  1  2  4  5
//     i++ //1  2  3  5  6
// }

// //0 1 2 4 5

//================================================================

// console.log(Math.floor(12.34)) //12
// console.log(Math.floor(46.8))  //46
// console.log(Math.floor(-34.89)) //-35
// console.log(Math.floor(-89.2)) //-90

//  -4   -3  -12.5 -12  -11  0  1  2  3  4 5

// console.log(Math.ceil(12.5))//13
// console.log(Math.ceil(45.1)) //46
// console.log(Math.ceil(-12.65))//-12

// console.log(Math.round(12.5))//13
// console.log(Math.round(23.2)) //23
// console.log(Math.round(34.7)) //35

//console.log(Math.random()) //0.0-0.99
//1-6
//console.log(Math.random()*6) //0.0-5.99

//console.log(Math.floor(Math.random()*6)) //0-5  ///Math.floor(4.9)  //4  //5.9 => 5 
//ans => 0--5

//1-6
// console.log(Math.floor(Math.random()*6)+1)
//=================================================================

//1-5
let randomNumber = Math.floor(Math.random() * 5) +1//0-4  //4.9=>4+1 =>5
console.log(randomNumber) //4  

//Guess Input
//user input => prompt() => window()=>browser =>html

let userInput = prompt('Please enter any number between 1 to 5') //3
if (userInput == randomNumber) {
    console.log('Your Guess is Correct !!!!!')
}
else {
    console.log('Your Guess is Incorrect.....')
}
























//index.html
//!(shift+1)
//enter
//<script src="fileName.js"></script>
