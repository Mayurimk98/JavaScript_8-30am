
///String
// let city="Nashik"
//slice => extract the part of string
//string return

// N a s h i k
// 0 1 2 3 4 5

//left =>right

//slice(startposition,endposition) //1. endposition not includes 2. endposition option

//ouput => ashi

// let a=city.slice(1,4)
// console.log(a) //ash

// let b=city.slice(1,5)
// console.log(b) //ashi

// let c=city.slice(2)
// console.log(c) //shik

//-6 -5 -4 -3 -2 -1
// N  a  s  h  i  k
// 0  1  2  3  4  5       //positive index

// let d=city.slice(4,1)
// console.log(d)//blank output

// let e=city.slice(-4)
// console.log(e) //shik

// let d1=city.slice(-5,-1)//ashi
// console.log(d1)

// let f1=city.slice(-1,-6)
// console.log(f1) //blank output

// let y1=city.slice(2,-1) //shi
// console.log(y1)


let firstName="Mayuri"
//charAt() => charAt(index)
//action => gives the char of given index
//return => string

let a1=firstName.charAt(4)
console.log(a1) //r
console.log(typeof a1)

let b1=firstName.charAt()  //by defalt it consider zero index
console.log(b1)

//charCodeAt()
//action => give the char of given index
//return => return Ascii value

let fruit='Apple'
let z1=fruit.charCodeAt(3)
console.log(z1) //i equivalent ascii value

let a=fruit.charCodeAt(0)
console.log(a)

let lastName='Katwe'
lastName.toUpperCase().toLowerCase().indexOf('t').slice() //error

//KATWE
//katwe
//2 //number








