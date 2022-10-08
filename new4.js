//1. toUpperCase()
//2. toLowerCase()
//3. includes()
//4. indexOf()
//5. StartWith()
//6. endsWith()
//7.trim()
//8.trimStart()
//9. trimEnd()
//10.CharAt()

//11.Slice()
//action =>extract the part of the string
//return =>string

//slice(startposition,endposition)
//1. endposition =>option
//2. endposition not include(0,5)

let student = 'shreeGanesh'
//  -11 -10 -9  -8 -7  -6  -5   -4  -3  -2  -1
//  s   h   r   e   e   G   a   n   e   s   h
//  0   1   2   3   4   5   6   7   8   9   10
//left =>right
// console.log(student)//shreeGanesh
// console.log(typeof student) //string

let a1 = student.slice(0, 5)
console.log(a1) //shree

let a2 = student.slice(5)
console.log(a2)

let a3 = student.slice(6, 2)
console.log(a3) //right to left =>blank output

let a4 = student.slice(-8, -2)
console.log(a4)//eeGane

let a5 = student.slice(2, -1) //
console.log(a5) //reeGanes

let a6 = student.slice(-4, 1)
console.log(a6) //blank


//CharAt()
// let firstName='mayuri'
// let a12=firstName.charAt(0)
// console.log(a12) //m //string
// console.log(typeof a12)

//12.charCodeAt()
//action =>give the ascii value of char at perticular index
//return =>number

// let firstName='mayuri'
// let b1=firstName.charCodeAt(0)
// console.log(b1) //m ascii //109

// let b2=firstName.charCodeAt(5)
// console.log(b2) //i ascii

//===========================================

//string + string =>string
//string + number =>string
//number + string=>string
//number + number=>number

let a=10
let b='mayuri'
let c='jaya'
let d=200

console.log(b+c) //mayurijaya
console.log(typeof (b+c)) //strimg

let y1=a+c
console.log(y1) //10jaya
console.log(typeof y1)

let y2=d+b
console.log(y2) //200mayuri
console.log(typeof y2)

let y4=a+d
console.log(y4) //210
console.log(typeof y4)


let c1=a+d+b
console.log(c1) //210mayuri
console.log(typeof c1)

let d1=c+d+a+d
console.log(d1) //jaya20010200
console.log(typeof d1)




