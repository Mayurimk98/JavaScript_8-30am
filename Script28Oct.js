// //Set => datatype
// let mySet = new Set()
// console.log(mySet)

// //add()
// mySet.add(23)
// console.log(mySet)

// mySet.add(55)
// mySet.add(100)
// console.log(mySet)

// //set store only unique value
// mySet.add(100)
// console.log(mySet)

// let mySet2 = new Set([2, 3, 4, 5, 6, 7])
// console.log(mySet2)
// //Size => property
// console.log(mySet2.size)//6

// //2.has()
// let set1 = new Set([11, 22, 33, 44, 55])
// let y1 = set1.has(66)
// console.log(y1) //false

// let y2 = set1.has(11)
// console.log(y2) //true

// //3. delet()
// let t1=set1.delete(11)
// console.log(t1)
// console.log(set1)

// //4. clear()
// set1.clear()
// console.log(set1)

// let set2 = new Set([11, 22, 33, 44, 55,66])
// //5. forEach()
// // set2.forEach(function(el){
// //     console.log(el)
// // })

// //for loop
// for(let value of set2 ){
//     console.log(value)
// }
//==============================================================

//MAP => datatype

// let student = {
//     firstName: "Mayuri",
//     true: "Katwe",
//     200: true,
//     age: 24,
//     [2,3,4,5]:"skills"
// }

//In object we cant take different datatype keys
// for(let key in student){
//     console.log(typeof(key))
// }

//Map having key value pair
let myMap = new Map()
console.log(myMap)

//to add elements
//1. set()
myMap.set('FirstName', 'Mayuri')
myMap.set(1, 'Marathi')
myMap.set(true, 'isStudent')
myMap.set(1, 'english')
console.log(myMap)

console.log(myMap.size)

//2.has()
let u1 = myMap.has(true)
console.log(u1)

// retrive the element
//3. get()
let u2 = myMap.get(1)
console.log(u2)

//delet()
let u3=myMap.delete('FirstName')
console.log(u3)
console.log(myMap)

//clear()
myMap.clear()
console.log(myMap)

let myMap2=new Map([['firstName','Vaibhav'],[2,'skills'],[true,'isMarried']])
console.log(myMap2)

//key()
console.log(myMap2.keys())

//value()
console.log(myMap2.values())

//entries()
console.log(myMap2.entries())

//for loop for keys
for(let key of myMap2.keys()){
    console.log(key)
}

//for loop for value
for(let value of myMap2.values()){
    console.log(value)
}

//for loop for entries
for(let [key,val] of myMap2.entries()){
    console.log(key,val)
}










