
//Javascript => Object
//Property
//Methods

//human
//property => height, weight,color
//Methods => talk(), walk()

//Method
//action
//return

//String
//property
//method

// let city='nashik'//string
// console.log(typeof city)
// let num="10" //string
// console.log(typeof num)
// let firstName=`mayuri`
// console.log(typeof firstName)

// //property =>length
// // let state='Gujrath'

// // // G u j r a t h
// // // 0 1 2 3 4 5 6

// // //length => starts with 1
// // console.log(state.length) //7

// //methods
// let state='Gujrath'
// //1. toUpperCase()
// let a=state.toUpperCase()
// console.log(a) //GUJRATH
// console.log(typeof a)

// //2. toLowerCase()
// let b=state.toLowerCase()
// console.log(b) //gujrath
// console.log(typeof b) //string

// //3. indexOf(char) //return type => number
// let c=state.indexOf('r')
// console.log(c)

// let d=state.indexOf('g')
// console.log(d) //-1

// //4. includes() //
// let e=state.includes('G')
// console.log(e)

// let f=state.includes('rat')
// console.log(f)

// let g=state.includes('T')
// console.log(g)

//5. startsWith()
// let state='Gujrath'
// let a1=state.startsWith('G')
// console.log(a1)

// //6. endsWith()
// let b1=state.endsWith('aTh')
// console.log(b1)

// //7. trim() 
// let city=' nashik '
// console.log(city.length)
// let c1=city.trim()
// console.log(c1)
// console.log(c1.length) //6

//8. trimStart()
// console.log(city.length)
// let d1=city.trimStart()
// console.log(d1)
// console.log(d1.length

//9. trimEnd() 
// console.log(city.length)
// let e1=city.trimEnd()
// console.log(e1)
// console.log(e1.length)

//10. slice()
// let firstName="Mayuri"
//-6 -5-4-3-2-1
// M a y u r i
// 0 1 2 3 4 5
//firstName.slice(startposition,endposition)
//endposition (optional)
//prevision index of endposition
//left right

// let a12=firstName.slice(2,5) //yur
// console.log(a12)

// let a13=firstName.slice(3) //uri
// console.log(a13)

// let a14=firstName.slice(4,0)
// console.log(a14) //blank

// let a15=firstName.slice(-5,-1)
// console.log(a15) //ayur
// let firstName="Mayuri"
// //-6 -5-4-3-2-1  
// // M a y u r i
// // 0 1 2 3 4 5 
// let a17=firstName.slice(-4,5)
// console.log(a17) //yur

// let a19=firstName.slice(5,-6)
// console.log(a19)

// let a20=firstName.slice(1,2)
// console.log(a20)

//11. replace()
// let str='I learn javascript, javascript is simple lang'
// let b1=str.replace('javascript','python')
// console.log(b1)

//12. replaceAll()
// let str='I learn javascript, javascript is simple lang'
// let b2=str.replaceAll('javascript','python')
// console.log(b2)

//13. charAt()
// let lastName='kulkarni'

// // k u l k a r n i
// // 0 1 2 3 4 5 6 7
// let c1=lastName.charAt(5)
// console.log(c1) //r

// //14. charCodeAt()
// let c12=lastName.charCodeAt(2)
// console.log(c12) //.l //108


//String interpolation

let firstName="anuradha"
let lastName='katwe'
let age=23

//My firstname is mayuri and my lastname is katwe and my age is 23

console.log(10+10) //20
console.log('mayuri'+'katwe') //mayurikatwe

console.log('my firstname is'+firstName+"and my lastName is"+lastName) //string concatination(+)
//my firstname isanuradhaand my lastName iskatwe

console.log('my firstname is '+firstName+" and my lastName is "+lastName)

//my firstname is anuradha and my lastName is katwe

console.log(`My firstname is ${firstName} and my lastname is ${lastName} and my age is ${age} `)
//My firstname is anuradha and my lastname is katwe







