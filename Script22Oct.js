let students = [{
    firstName: "Mayuri",
    lastName: "Katwe",
    age: 24,
    city: "Nashik",
    skills: ["Javascript", "Cypress", "React"],
    marks: 30
}, {
    firstName: "Vaibhav",
    lastName: "Raut",
    age: 30,
    city: "Jalgoan",
    skills: ["SQL", "Selenium", "MangoDB"],
    marks: 80
}, {
    firstName: "Sweta",
    lastName: "Kulkarni",
    age: 32,
    city: "Sangamner",
    skills: ["Java", "Cypress", "Manual", "JS"],
    marks: 45
}, {
    firstName: "Sam",
    lastName: "Jain",
    age: 40,
    city: "Pune",
    skills: ["Java", "python", 'React'],
    marks: 70,
}, {
    firstName: "Malti",
    lastName: "sarode",
    age: 12,
    city: "Nashik",
    skills: ["c++", "sql", 'c#', 'Django', "MangoDB", "React"],
    marks: 50
}]

//Problem 11
//Except first and last element from skill array make all othere element as default
//["c++", "default", 'default', 'default', "default", "React"]
// students.forEach(function (el) {
//     el.skills.fill("default", 1, el.skills.length-1)
// })
// console.log(students)

//Problem 12
//CSS, HTML
//Repalce the 2 and 3 element of skill as CSS and HTML
//["c++", "CSS", 'HTML', 'Django', "MangoDB", "React"],
// students.forEach(function (el) {
//     el.skills.splice(1, 2, "CSS", "HTML")
// })
// console.log(students)

//Problem 13
//Add userName into the array and make it from firstchar of firstname and lastname 
// {
//     firstName: "Malti",
//     lastName: "sarode",
//     age: 12,
//     city: "Nashik",
//     skills: ["c++", "sql", 'c#', 'Django', "MangoDB", "React"],
//     marks: 50,
//     userName:Ms
// }

// students.forEach((function (el) {
//     //el.userName = el.firstName.split('')[0] + el.lastName.split("")[0]
//     //OR
//     el.userName = el.firstName[0] + el.lastName[0]
// }))

// console.log(students)
// let name1="mayuri"
// console.log(name1.split("")[0])

//Problem 14
//["MK","VR","MS"]
//flat()
//[[1,2,3],[4,5,6]] => [1,2,3,4,5,6]

// let arr = []
// students.forEach(function (el) {
//     arr.push(el.firstName[0] + el.lastName[0])
// })
// console.log(arr)

// let userNameArr = students.map(function (el) {
//     return el.firstName[0] + el.lastName[0]
// })
// console.log(userNameArr)









