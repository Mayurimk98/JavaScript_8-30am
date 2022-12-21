// //Ajax
// //Asynch javascript

// //Api async => execution sync

// //a api => b api

// //getuser() => id => getsingleuser(id) => info

// //callBackhell=>
// //promise(pending, resolve,reject)
// //.then()
// //Async await
// //promises Parallel combination 

// //1 api => 2min
// //2 api => 3 min
// //3 api => 2 min 
// //total time=> 7 min

// //parallel
// //1 api => 2min
// //2 api => 3 min
// //3 api => 2 min
// //total time=> 3 min

// //promise.all
// //promise.allSettled
// //promise.race
// //promise.any


// //1. promise.all
// // async function getUser() {
// //     let result = await Promise.all([
// //         Promise.resolve('hi'),
// //         Promise.resolve('hello'),
// //         Promise.resolve('hey')
// //     ])
// //     console.log(result)
// // }
// // getUser()

// //disadvantage
// // async function getUser() {
// //     let result = await Promise.all([
// //         Promise.resolve('hi'),
// //         Promise.reject('Bye'),
// //         Promise.resolve('hey')
// //     ])
// //     console.log(result)
// // }
// // getUser()

// //2. promise.allSettled
// // async function getUser() {
// //     let s1 = await Promise.allSettled([
// //         Promise.resolve('hii'),
// //         Promise.resolve('hello'),
// //         Promise.reject('Bye'),
// //         Promise.reject('see you')
// //     ])
// //     console.log(s1)
// // }
// // getUser()

// //3. promise.race()

// //time less => 

// // async function getUser() {
// //     let result = await Promise.race([
// //         new Promise(function (resolve) {
// //             setTimeout(function () {
// //                 resolve('hello')
// //             }, 2000)
// //         }),
// //         new Promise(function (reject) {
// //             setTimeout(function () {
// //                 reject('bye')
// //             }, 1000)
// //         }),
// //         new Promise(function (reject) {
// //             setTimeout(function () {
// //                 reject('goodMorning')
// //             })
// //         }),

// //     ])
// //     console.log(result)
// // }
// // getUser()

// //4. promise.any() => reject state execution

// async function getUser() {
//     let y1 = await Promise.any([
//         new Promise(function (reject) {
//             setTimeout(function () {
//                 reject('bye')
//             }, 1000)
//         }),
//         new Promise(function ( reject) {
//             setTimeout(function () {
//                 reject('see u')
//             }, 2000)
//         }),
//         new Promise(function (resolve) {
//             setTimeout(function () {
//                 resolve('hello')
//             }, 3000)
//         }),
//         new Promise(function (resolve) {
//             setTimeout(function () {
//                 resolve('hiii')
//             }, 4000)
//         })
        
//     ])
//     console.log(y1)
// }
// getUser()



