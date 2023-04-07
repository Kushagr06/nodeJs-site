const person=require('./person');
const Person=require('./constructor');


console.log(person);
console.log(person.name);

const person1=new Person('John',30);
person1.greeting();