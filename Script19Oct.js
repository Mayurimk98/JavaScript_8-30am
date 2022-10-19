
let firstName = "Mayuri" //String
let s = 10 //=> array

let a = [12, 34] //array => 

let b = {} //object

let student = ['ram', 'kedar', 23, 50] //array(store value with index)
student[0]//ram
student[3] //50

//=> object => more informative

let student1 = {
    firstName: "ram",
    lastName: 'kedar',
    rollNumber: 23,
    age: 50,
}
//key always unique
//key : value
//1. retrive => dot notation, bracket notation
console.log(student1.firstName) //ram
console.log(student1['lastName'])//kedar

//2.update => dot notation, bracket notation
student1.rollNumber = 35
console.log(student1)

student1['age'] = 78
console.log(student1)

//3. add(create) => dot notation, bracket notation
student1.language = "Marathi"
console.log(student1.language)
console.log(student1)

// student1.weight=45
// student1.skill="java"
// console.log(student1)
student1['skill'] = 'selenium'
console.log(student1)

student1['language'] = ['hindi', 'tamil', 'english']
console.log(student1)


//4. delete
delete student1.skill
console.log(student1)

delete student1['language']
console.log(student1)

// let marks = [12, 34, 56, 78] //index
// for (let i = 0; i < marks.length; i++) {
//     console.log(marks[i])
// }

//object loop
for (let key in student1) {
    //console.log(key)  => key 
    //console.log(student1[key]) => value
    console.log(key, student1[key])
}


let empolyee = {
    firstName: "mayuri",
    lastname: 'katwe',
    skills: ['java', 'js', 'cypress', 'python'],
    family: {
        father: "mahendra",
        mother: 'jyoti'
    }
}
//retrive
console.log(empolyee.family) //{ father: 'mahendra', mother: 'jyoti' }
console.log(empolyee.family.mother) //jyoti

empolyee['family']['brother'] = 'vaibhav'
console.log(empolyee)

// empolyee.skills='selenium'
// console.log(empolyee)  => not work

// empolyee.skills = ['selenium']
// console.log(empolyee) =>not work

empolyee.skills.push('selenium')
console.log(empolyee)












