
//Map 

//object
let student = {
    firstName: "Mayuri",
    lastName: "Katwe",
    rollNumber: 32,
    skills: ['js', 'sql']
}
for (let key in student) {
    console.log(typeof key)
}

console.log('----------------------')
// let student1={
//     firstName:"Mayuri",
//     1234:"Katwe",
//     true:32,
//     undefined:['js','sql'],
//     [1,2,3]:'skills'
// }
// for(let key in student1){
//     console.log(typeof key)
// }

//==============================================
//Map => datatype (Es6)
//map stored values key,value

let mapA = new Map()
console.log(mapA)

//set() => method (add property into the map)
mapA.set('firstName','mayuri')
console.log(mapA)
mapA.set(1,'Marathi')
mapA.set(true,'isMarried')
mapA.set(undefined,'skills')
console.log(mapA)

// for(let key of mapA){
//     console.log(typeof key)
// }

//retrive => get()
console.log(mapA.get(1))
console.log(mapA.get(undefined))

//has() => to check whether given keys are present into the map
console.log(mapA.has('FirstName'))

//delet() => delete any property 
console.log(mapA.delete(undefined)) //boolean
console.log(mapA)
console.log(mapA.delete(2)) //false

//clear() => to make map as empty
mapA.clear()
console.log(mapA)

//keys()
let mapB=new Map([
    ['fullName','shekhar Rao'],
    [5,'skills'],
    ['roll','manager'],
    [50000,'salary']
])
console.log(mapB)
console.log(mapB.keys())

//values()
console.log(mapB.values())

//key & value => entries()
console.log(mapB.entries())

for(let key of mapB.keys()){
    console.log(key)
}

for(let value of mapB.values()){
    console.log(value)
}

for(let [key,val] of mapB.entries()){
    console.log(key,val)
}



