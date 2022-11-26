// //inheritance
// //superclass /parentclass
// //subclass/childclass
// //extends

// class GrandFather {
//     surname = "Mule"
//     money = 2000
//     displayMoney() {
//         console.log(`I have ${this.money} rs`)
//     }
// }

// class Father extends GrandFather {
//     //2 property
//     //1 method
//     home = "shreeNivas"
//     displayHome() {
//         console.log(`I have my own home name as ${this.home}`)
//     }
// }

// class Son extends Father {
//     //3 property
//     //2 method
//     car = "Audi"
//     displayCar() {
//         console.log(`I have ${this.car}`)
//     }

// }
// let Yuvraj = new Son()
// console.log(Yuvraj)

// console.log(Yuvraj.car)
// console.log(Yuvraj.home)
// console.log(Yuvraj.surname)
// console.log(Yuvraj.money)
// Yuvraj.displayCar()
// Yuvraj.displayHome()
// Yuvraj.displayMoney()

// let Suresh = new Father()
// console.log(Suresh.surname)
// console.log(Suresh.money)
// console.log(Suresh.car) //undefined
// console.log(Suresh.home)

//===========================================================
// //parent having constructor and child dont have constructor

// class GrandFather {
//     constructor(surname, money) {
//         this.surname = surname
//         this.money = money
//     }
//     displayMoney() {
//         console.log(`I have ${this.money} rs`)
//     }
// }

// class Father extends GrandFather {
//     home = "ShreeNivas"
//     displayHome() {
//         console.log(`I have my own home name as ${this.home}`)
//     }
// }

// let Santosh = new Father("rao",30000)
// console.log(Santosh)  //3 property , 2 methods
// console.log(Santosh.surname)
// console.log(Santosh.money)
// console.log(Santosh.home)
// Santosh.displayHome()
// Santosh.displayMoney()

//==================================================================

//progarm 3 
//superclass having constructor and child/subclass also having constructor

class GrandFather {
    constructor(surname, money) {
        this.surname = surname
        this.money = money
    }
    displayMoney() {
        console.log(`i have ${this.money} rs`)
        //console.log('I have' , this.money, 'rs')
    }
}

class Father extends GrandFather {
    constructor(surname, money, home) {
        super(surname, money)
        this.home = home
    }
    displayHome(){
        console.log(this.home)
    }
}
let Ankush=new Father('Pathak',50000,"Nivas")
console.log(Ankush)
Ankush.displayHome()
Ankush.displayMoney()






