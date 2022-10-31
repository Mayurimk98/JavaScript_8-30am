let fruits = ['apple', 'mango', 'grapes']
//              0        1          2
let a = fruits[0]
let b = fruits[1]
let c = fruits[2]
console.log(a)
console.log(b)
console.log(c)

//100
//destructure
//1. with array

let student = ["mayuri", 'radha', 'sham', 'kumal']
let [s1, d1, f1, g1] = student
console.log(s1)
console.log(d1)
console.log(f1)
console.log(g1)


let rollNumber = [20, 45, 67, 90, 76, 45, 12]
let [aa1, bb1, cc1, dd1, ee1] = rollNumber
console.log(aa1, bb1, cc1, dd1, ee1)

//2. nested array
let numbers = [[11, 22, 33], [44, 55, 66], [77, 88, 99]]
console.log(numbers[0]) //[11, 22, 33]
console.log(numbers[0][0]) //11

let [[q1, q2, q3], [w1, w2, w3], [r1, r2, r3]] = numbers
console.log(r2) //88
console.log(q3) //33

//3.with object
let person = {
    //keys:value
    firstName: "Pranali",
    lastName: "Joshi",
    rollNo: 23
}

let { firstName, lastName, rollNo } = person
console.log(firstName)
console.log(lastName)
console.log(rollNo)

let vehical = {
    color: 'red',
    wheel: 4
}
//object => custom name
let { color: a0, wheel: w0 } = vehical
console.log(a0)
console.log(w0)

//4. nested Object
let info = {
    firstName1: "Mayuri",
    family: {
        father: "Mahesh",
        mother: "Jaya"
    }
}
let { firstName1, family: { father, mother } } = info
console.log(firstName1)
console.log(mother)



