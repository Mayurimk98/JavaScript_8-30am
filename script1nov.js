//destructure
//array
let numbers = [1, 2, 3, 4, 5, 6]
let [el1, el2, el3] = numbers
console.log(el1, el2, el3)


//nested array
let num1 = [[1, 2, 3], [4, 5, 6]]
let [[a, b, c], [d, e, f]] = num1
console.log(e)

//object
let car = {
    model: 'audi',
    color: 'white'
}
let { model, color } = car
console.log(model, color)

let student = {
    firstName: "Mayuri",
    classInfo: {
        std: 'KG',
        rollNumber: 20
    }
}
let { classInfo: { rollNumber: rn } } = student
console.log(rn)


//array inside object
let employee = {
    fullName: "Ramesh batra",
    roll: 'manager',
    skills: ['java', 'devops', 'nodeJS']
}

let { fullName: fn, roll: r, skills: [s1, s2, s3] } = employee
console.log(s2)
console.log(r)

//object inside array
let student1 = [
    {
        firstName: 'vaibhav',
        lastName: 'Katwe'
    },
    {
        firstName: 'Rihan',
        lastName: 'rao',
        rollNumber: 36
    }
]
let [{ firstName: f1, lastName: l1 }, { firstName: f2, lastName: l2, rollNumber }] = student1
console.log(l2)


let person = {
    firstName: 'shubham',
    family: {
        father: 'Mahesh',
        mother: 'shubhangi',
        sister: [
            {
                name1: 'rohini',
                age: 12
            },
            {
                name1: 'kaveri',
                age: 32
            },
            {
                name1: 'shilpa',
                age: 20,
                skills: ['selenium', 'python']
            }
        ]
    }
}
// let { family: { sister: [{ name1: n1 }, { name2: n2 }, { name3: n3, skills: [x1, y1] }] } } = person
// console.log(x1)


let { family: { sister: [{ }, { }, { skills: [r0, s0] }] } } = person
console.log(r0)
console.log(s0)