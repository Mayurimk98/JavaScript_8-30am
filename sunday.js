let mapA = new Map()
console.log(mapA)


let q1 = [1, 2, 3]
let q2={ a: 1, b: 2 }
let mapB = new Map([
    ['firstName', 'mayuri'],
    [q1, ['js', 'java', 'sql']],
    [q2, 'valuesOfObject']
])
console.log(mapB)


console.log(mapB.get('firstName'))
console.log(mapB.get(q1))
console.log(mapB.get(q2))


