
// let marks = [20, 35, 40, 100, 99, 85]
// //           0    1   2   3    4   5
// let a1 = marks[0]
// let b1 = marks[1]
// let c1 = marks[2]
// let d1 = marks[3]
// let e1 = marks[4]
// let f1 = marks[5]
// console.log(a1)
// console.log(b1)
// console.log(c1)
// console.log(d1)
// console.log(e1)
// console.log(f1)

// //destructuring
// //array ,object

// //1. array
// let marks1 = [20, 35, 40, 100, 99, 85]
// let [a, b, c, d, e, f] = marks1
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)

// let flower = ['jai', 'rose', 'sunflower']
// let [mayuri] = flower
// console.log(mayuri)

// //2. nested array
// let numbers = [[22, 33, 44], [55, 66, 77], [99, 11, 20]]
// console.log(numbers[1])// [55, 66, 77]
// console.log(numbers[1][1])

// let [[s1, s2, s3], [p1, p2, p3], [q1, q2, q3]] = numbers
// console.log(p1) // 55
// console.log(q2) // 11


// //3. object
// let book = {
//     title: "history",
//     page: 55,
//     writer: "ram Raja"
// }
// let { title, page, writer } = book
// console.log(title)
// console.log(page)
// console.log(writer)

// let vehical = {
//     wheel: 3,
//     color: 'black'
// }
// let { color: c0, wheel: w1 } = vehical
// console.log(w1)
// console.log(c0)


// //4. nested Object
// let person = {
//     fullName: "sathish rao",
//     family: {
//         father: "jayprakash",
//         mother: "kanchan"
//     }
// }
// let { fullName, family: { father, mother } } = person
// console.log(fullName)
// console.log(mother)

// //5. array inside object

// let student = {
//     firstName: "jaya",
//     rollnumber: 20,
//     skills: ['sql', 'jmeter', 'cypress']
// }
// let { firstName: F1, rollnumber: RN, skills: [A1, B1, C1] } = student
// console.log(F1)
// console.log(B1)

// //6. object inside array

// let info = [
//     {
//         firstName: "Mayuri"
//     },
//     {
//         lastName: "katwe"
//     }
// ]
// let [{firstName},{lastName}] =info
// console.log(firstName)
// console.log(lastName)


let student0 = {
    firstName: "Mayuri",
    family: {
        father: "kumar",
        mother: "shakti",
        sisters: [
            {
                fn: 'kaveri',
                age: 12,
                skill: ['python', 'selenium']
            }
        ]
    }
}

let { family: { sisters: [{ skill: [a1, b1] }] } } = student0
console.log(b1)
