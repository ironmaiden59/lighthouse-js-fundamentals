// class Person{
//   constructor(name, quirkyFact){
//     this.name = name;
//     this.quirkyFact = quirkyFact
//   }
//   bio(){
//     return `My name is ${this.name} and here's my quirky fact: ${this.quirkyFact}`
//   }
// }

// class Student extends Person{
//   enroll(cohort){
//     this.cohort = cohort
//   }
//   bio(){
//    return `I'm a student at Lighthouse Labs (aka Labber). ${super.bio()}`
//   }
// }

// class Mentor extends Person{
//   goOnShift(){
//     this.onShift = true
//   }
//   goOffShift(){
//     this.onShift = false
//   }
//   bio(){
//     return `I'm a mentor at Lighthouse Labs. ${super.bio()}`
//   }
// }

// const bob = new Mentor('Bob Ross', 'I like mountains way too much')
// console.log(bob.bio());
// const ralph = new Student('Ralph D', 'I like walking')
// console.log(ralph.bio());

class Pizza {

  constructor(size, crust) {
    this.size = size;
    this.crust = crust;
    this.toppings = ["cheese"];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

}

let pizza = new Pizza('large', 'thin');
pizza.addTopping('mushrooms');
console.log(pizza.toppings);