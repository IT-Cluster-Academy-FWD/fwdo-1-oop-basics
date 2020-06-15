// es6
class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  sayHello() {
    return `Hello my name is ${this.name}, I'm ${this.age} years old, here's my email address ${this.email}`;
  }
}

const john = new User('John', 22, 'john@gmail.com');
const bob = new User('Bob', 26, 'bob@gmail.com');
const mike = new User('Mike', 70, 'mike@gmail.com');

//es5
function Animal(name, age, numberOfLegs) {
  this.name = name;
  this.age = age;
  this.numberOfLegs = numberOfLegs;

  this.sayHello = () => {
    return 'Hello, my name is ' + this.name + ', I\'m ' + this.age + ' years old, I have ' + this.numberOfLegs + ' legs.';
  }
}

const fluffy = new Animal('Fluffy', 2, 4);
const hatiko = new Animal('Hatiko', 6, 4);


console.log(fluffy.sayHello());
console.log(hatiko.sayHello());