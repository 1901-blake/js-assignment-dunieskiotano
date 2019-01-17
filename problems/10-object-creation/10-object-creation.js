/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

//Create object using an object literal
let car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2018,
    color: 'Charcoal',
    engine: '6 cylinders',
    numberOfSeats: 8
}
//prints object car using destructuring
let { make, model, year, color, engine, numberOfSeats } = car;
console.log("======== Object Literal =========")
console.log(`
Make: ${make}
Model: ${model}
Year: ${year}
Color: ${color}
Engine: ${engine}
Number of Seats: ${numberOfSeats}`)


//Create object using a constructor
console.log();
console.log("======== Object with Constructor =========")
function Person(firstName, lastName, age, degree, country, hometown) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.degree = degree;
    this.country = country;
    this.hometown = hometown
}
let person = new Person('Dunieski', 'Otano', 42, 'Software Engineering', 'USA', 'Pinar del Rio');
console.log();
//prints object from constructor using dot notation
console.log('First Name: ', person.firstName, '\n' +
    'Last Name: ', person.lastName, '\n' +
    'Age: ', person.age, '\n' +
    'Degree: ', person.degree, '\n' +
    'Country: ', person.country, '\n' +
    'Home Town: ', person.hometown);


//Creates an object using es6 class
class Animal {
    constructor(name, breed, height, mothersName, price) {
        this.name = name;
        this.breed = breed;
        this.height = height;
        this.mothersName = mothersName;
        this.price = price;
    }

}
let cat = new Animal('Goofy', 'Dog', '1 feet', 'Lucia', 950.00);

console.log();
console.log("======== Object with es6 class =========");
//prints object cat using bracket notation
console.log(`
Name: ${cat["name"]}
Breed: ${cat["breed"]}
Height: ${cat["height"]}
Mother's Name: ${cat["mothersName"]}
Price: $${cat["price"]}`)

