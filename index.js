// const person="abhishek raj rauniyar bad bad bada";
// console.log(person.at(9));
// console.log(person.charAt(1));
// console.log(person.concat(" i am coder").concat(' from sarlahi'));
// console.log("shyam".concat('-Dev').concat('-Jee'));
// console.log(person.toUpperCase());
// console.log(person.toLowerCase());
// console.log(person.endsWith('a'));
// console.log(person.includes('p'));
// console.log(person.indexOf('i'));
// console.log(person.isWellFormed());
// console.log(person.toWellFormed());
// console.log(person.length);
// console.log(person.padStart());
// let str = "A";
// console.log(str.padStart(7, "a")); // "005
// console.log(person.repeat(4));
// console.log(person.replace('bad','good'));
// console.log(person.replaceAll('bad','good'));
// console.log(person.slice(5,15));
// console.log(person.substring(1,5));
// console.log(person.split('a'));



// const personName="ram";
// const age=92;
// const job='dev';
// // template literals
// console.log(`he is good ${personName} ${age} ${job}`);
// console.log(`he is good ${personName} ${age} ${job}`);
// const str = 'Mohan is a good boy';
// console.log(`My friend ${str}`);

// console.log("abishek\"".length);
// console.log("abishek\"".toUpperCase());
// console.log("abishek\"".toLowerCase());


/*const text = "plese give me rs 1000";

const match = text.match(/\d+/);
const amount = match ? Number(match[0]) : null;

console.log(amount); // 1000*/

// console.log("Bibek");



/*const temperature = -8;
const value = 5;
const pizza = 'pizza';
const pasta = 'pasta';

console.log(`The temperature is ${temperature}C\n ${value} plus ${value} makes ${value+value}\n I like ${pizza} and ${pasta}.`);*/


// let a='9000';
// console.log(Number(a) + 50);
// console.log(Number.isNaN(Number(a)));

// const num = 300.21;
// console.log(Number.isInteger(num));


// const car = {
//     Name: "BMW",
//     color: "black",
//     model: 154215,
//     speed: function() {
//         console.log("the speed is 250km/h");
//     }
// }

// const bank ={
//     Name: 'Nepal Bank ltd',
//     location: 'Thapathali',
//     grade:'A',
//     funding:function() {
//         console.log("government funding")
//     }

// }
// // function calling inside object
// bank.funding();
// // value calling inside object 
// console.log(bank.grade);

// console.log(Math.pow(2, 4));
// console.log(Math.tan(45));

/*const rating = 8.25515;
console.log(Math.floor(rating));
console.log(Math.ceil(rating));
console.log(Math.round(rating));*/

/*const random = Math.random()*4;   
console.log(random);  */
// console.log(Math.floor(random));


/*let age = 20;
const result = age>50 ? 'senior': age<20 ? 'junior': 'regular';
console.log(result);*/

/*let age= 30;
if(age>50){
    console.log('senior');
} else if(age<20){
    console.log('junior');
}else{
    console.log('regular');
}
*/

/*let netsalary=8000;
let expanses = 5000;
if(netsalary>expanses){
    console.log(`you have saved ${netsalary-expanses} this month`)
} else if(netsalary<expanses){
    console.log(`you have lost ${expanses-netsalary} this month`);
}else{
    console.log('your balance has not changed');
}*/

/*let a = 51;
if(a%2==0){
    console.log('even number');
}else{
    console.log('odd number');
}*/

/*const weekDay = 'wednesday';
switch(weekDay){
    case 'sunday':
        console.log('you type sunday');
        break;
    case 'monday':
        console.log('you type monday');
        break;
    case 'tuesday':
        console.log('you type tuesday');
        break;
    case 'wednesday':
        console.log('you type wednesday');
        break;
    case 'thrisday': 
        console.log('you type thrisday');
        break;
    case 'friday':
        console.log('you type friday');
        break;
    case 'saturday':
        console.log('you type saturday');
        break;
        default:
            console.log('you donot type any day');
}*/


/*let a =20;
let b=30;
const calcu= a-b;
switch(calcu){
    case (a+b):
        console.log(`addition is ${calcu}`);
        break;
    case (a-b):
        console.log(`subtraction is ${calcu}`);
        break;
    case (a*b):
        console.log(`multiply is ${calcu}`);
        break;
    case (a/b):
        console.log(`division is ${calcu}`);
        break;
    case (a%b):
        console.log(`modules is ${calcu}`);
        break;
    default:
        console.log('don\'t perform any calculation');
}*/

/*let v1 = 7;
let v2 = 2;
const result = 'module';
switch(result){
    case'add':
        console.log(`Addition of ${v1} and ${v2} is ${(v1+v2)}.`);
        break;
    case'sub':
        console.log(`Subtraction of ${v1} and ${v2} is ${(v1-v2)}.`);
        break;
    case'multi':
        console.log(`Multiplication of ${v1} and ${v2} is ${(v1*v2)}.`);
        break;
    case'divide':
        console.log(`Division of ${v1} and ${v2} is ${(v1/v2)}.`);
        break;
    case'module':
        console.log(`Modules of ${v1} and ${v2} is ${(v1%v2)}.`);
        break;
    default:
        console.log('Expression is invalid');
}*/


// loops

/*let a = 0;
while(a<10){
    console.log(a);
    a++;
}*/

/*let a = 0;
while(a<10){
    console.log(a);
    if(a===0){
        console.log('is neither even nor odd number');
    }else if(a%2===0){
        console.log('is even number');
    }else{
        console.log('is odd number');
    }  
    a++;
}*/

/*let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);*/


/*let sum =0;
for (let i=1 ; i<=15;i++)
{
    console.log(i);
    sum = sum + i;
    // sum+=i;
}
console.log(`The sum of all number is ${sum}`);*/

/*
for(let i=1; i<=5; i++){
    
    if(i%3===0 && i%5===0){
        console.log(`${i} is fizz buzz`);
    }else if(i%3===0){
        console.log(`${i} is fizz`);
    }else if(i%5===0){
        console.log(`${i} is buzz`);
    }else{
        console.log(`${i}`);
    }
}*/




//for in -- for of
/*const persons = [11, 22, 33, 44, 55, 66, 77];

for (let i in persons) {
//   console.log('hello');
  console.log(i);
}

for (let i of persons) {
//   console.log('hello');
//   console.log(i);

}
*/

/*let sum = 0;
const person1 = [11,22,33,44,55,66];
for(let i of person1){
    // console.log('hello')
    console.log(i);
    sum = sum +i; 
}
console.log(`sum of array is ${sum}`);*/



// array method 
// const persons = [11, 22, 33, 44, 5, 15, 10];
// delete persons[2];
// persons.sort((a,b)=>a-b);
// persons.splice(1,2,55,80,98)
// console.log(persons[3]);
// persons.push(55);
// persons.pop();
// persons.shift();
// persons.unshift(9, 7);
// console.log(persons.toString());
// console.log(persons.concat(9, 7, 9).concat([3, 4, 5, 6]));
// console.log(persons.length);
// console.log(persons);


// fnctions

/*function greet(username){
    console.log(`Good morning ${username}`);
}
greet('Ram');*/

/*function giveSum(numbers) {
let sum=0;
 for(let i of numbers){
    sum = sum +i; 
}
console.log(`sum of array is ${sum}`);
}

giveSum([11,22,33,44,55,66]);*/


// function arry(numbers){
//     console.log(Math.max(...numbers));

// }
// arry([14,25,36,45]);

// l


// callback function 
// const parentFunc = (func) => {
//   func();
// }
// const childFunc = () => {
//   console.log('hello im child');
// }
// parentFunc(childFunc);


// const parentFunc = (func) => {
//   func(90);
// }

// const childFunc = () => {
//   console.log('hello im child');
// }

// parentFunc((m) => {
//   console.log(m);
//   console.log('hello jee')
// });



// array method :- foreach, Map, find, filter 


// const numbers = [11, 22, 33, 44, 55,66,77 ];

// numbers.forEach((a, i,array) => {
//   console.log(a, i,array);

// });



// let total=0;
// let evenTotal=0;
// let oddTotal=0;
// const numbers = [11, 22, 33, 44, 55,66,77 ];

// numbers.forEach((a, i) => {
// total+=a;
// if(a%2==0){
//     evenTotal+=a;
// }else{
//     oddTotal+=a;
// }
// });
// console.log(total);
// console.log(evenTotal);
// console.log(oddTotal);

// const numbers = [11, 22, 33, 44];
// const some = numbers.map((n, i) => {
//   return n===44?55:n;
// });
// console.log(some);


// const arr = [1,2,3];
// const N = arr.map((value, index, array) => {
//     return value * value;
// });
// console.log(N);




// // 👉 Use map() to create a new array where every number is doubled.
// const nums = [1, 2, 3, 4, 5];

// const square = nums.map((n,i) => {
//     return n*n;
// });
// console.log(square);



// // 👉 Use map() to make all strings UPPERCASE.
// const fruits = ["apple", "banana", "mango"];

// const upperCase = fruits.map((n,i) => {
//     return n.toUpperCase();
// });
// console.log(upperCase);



// // 👉 Return a new array where 10 is added to every value.
// const marks = [30, 45, 50, 60];

// const add = marks.map((n,i) => {
//     return n+10;
// });
// console.log(add);




// const numbers = [11, 22, 33, 44];
// const findJ = numbers.find((n, i) => {
//     return n > 20;
// });
// console.log(findJ);



// // Find the first even number

// const num = [1, 3, 5, 6, 8];
// const even = num.find((n,i) => {
//     return n%2===0;
// });
// console.log(even);


// // Find the first word with length > 4

// const animals = ["cat", "dog", "tiger", "lion"];
// const first = animals.find((n,i) => {
//     return n.length>4;
// });

// console.log(first);



// // Find the first number greater than 50

// const number = [10, 45, 60, 70];
// const fGreater = number.find((n,i) => {
//     return n>50;
// });
// console.log(fGreater);



// // Filter all odd numbers

// const num = [1, 2, 3, 4, 5, 6];
// const allOdd = num.filter((n, i) => {
//     return n % 2 != 0;
// });
// console.log(allOdd);



// // Filter words that contain "a"

// const srtArr = ["apple", "ball", "cat", "dog", "abhishek"];
// const containA = srtArr.filter((n,i) => {
//     return n.includes('a');
// });
// console.log(containA);



// const arr = ["Hello", " ", "World", "!"]
// const connect = arr.reduce((a, b,) => {

//   return a + b;
// });
// console.log(connect);



// array destructing

// const colors = ["red", "green", "blue"];
// Destructure and store values in variables: firstColor, secondColor, thirdColor

// const [firstColor, secondColor, thirdColor] = ['red', 'green', 'blue'];
// console.log(firstColor, secondColor, thirdColor);

// const numbers = [10, 20, 30, 40];
// Destructure to get only 10 and 30 (skip 20
// const [n1, ,n2] = [10,20,30,40,50];
// console.log(n1,n2);





// const persons = [
//     {
//         id: 1,
//         name: 'ram',
//         gender: 'male',
//         age: 99
//     },
//     {
//         id: 2,
//         name: 'rita',
//         gender: 'female',
//         age: 90
//     },
//     {
//         id: 3,
//         name: 'shyam',
//         gender: 'male',
//         age: 70
//     },
//     {
//         id: 4,
//         name: 'sita',
//         gender: 'female',
//         age: 60
//     }
// ];

// filter only female data from array object
// // const femalePersons = persons.filter(person => person.gender === 'female');

// // console.log(femalePersons);

// const female = persons.filter((person) =>{
//     return person.gender==='female';
// });
// console.log(female);


// 🔁 forEach Tasks
// Use forEach to print each person’s name in uppercase.

// persons.forEach((person) =>{
//     console.log(person.name.toUpperCase());
// });


// Use forEach to add a new property isSenior(true if age ≥ 60, otherwise false).

// persons.forEach((person) => {
//     const isSenior = person.age;
//     if(isSenior>=60){
//         console.log('true');
//     }else{
//         console.log('false');
//     }
// });


// Use forEach to log a sentence like: "Ram is 99 years old"

// persons.forEach((person) => {
//     if (person.name === 'ram') {
//         console.log(`${person.name} is ${person.age} years old`);
//     }
// });



// Use forEach to count how many males and females (store result in variables).

// let noOfMale = 0;
// let noOfFemale = 0;
// persons.forEach((person) => {
//     if(person.gender === 'male'){
//         noOfMale++;
//     }else if(person.gender==='female'){
//         noOfFemale++;
//     }
// });
// console.log(`Total number of Male is ${noOfMale}`);
// console.log(`Total number of Female is ${noOfFemale}`);



// 🔍 find Tasks

// Use find to get the person whose name is "shyam".

// const findName = persons.find((person) => {
//     return person.name === 'shyam';
// });
// console.log(findName);



// Use find to find the first female person.

// const fFemale = persons.find((person) => {
//     return person.gender === 'female';
// });
// console.log(fFemale);



// Use find to find the person with age greater than 80.

// const ageG = persons.find((person) => {
//     return person.age > 80;
// });
// console.log(ageG);



// Use find to find the person with id = 4.

// const pId = persons.find((person) => {
//     return person.id === 4;
// });
// console.log(pId);




// 🧹 filter Tasks

// Use filter to get all male persons.

// const allMale = persons.filter((person) => {
//     return person.gender === 'male';
// });
// console.log(allMale);



// Use filter to get all persons older than 65.

// const olderThan65 = persons.filter((person) => {
//     return person.age > 65;
// });
// console.log(olderThan65);



// Use filter to get all female persons under age 80.

// const allFUnder80 = persons.filter((person) => {
//     return person.gender === 'female' && person.age < 80;
// });
// console.log(allFUnder80);



// Use filter to get persons whose name length is more than 4 characters.

// const pLMT4 = persons.filter((person) => {
//     return person.name.length > 4;
// });
// console.log(pLMT4);



// ➕ reduce Tasks

// Use reduce to calculate total age of all persons.

// const ageP = persons.reduce((sum, person) => {
//     return sum + person.age;
// }, 0);
// console.log('Total age of all person is :', ageP);



// Use reduce to calculate average age.

// const averageAge = persons.reduce((average, person) => {
//     return average + person.age;
// },0) / persons.length;
// console.log(averageAge);



// Use reduce to count males and females in an object like:
// { male: 2, female: 2 }

// const genderCount = persons.reduce((acc, person) => {
//   acc[person.gender] = (acc[person.gender] || 0) + 1;
//   return acc;
// }, {});

// console.log(genderCount);



// Use reduce to create an array of all names.

// const names = persons.reduce((acc, person) => {
//   acc.push(person.name);
//   return acc;
// }, []);

// console.log(names);




// Use reduce to find the oldest person.

// const oldestPerson = persons.reduce((oldest, person) => {
//   return person.age > oldest.age ? person : oldest;
// });
// console.log(oldestPerson);






// some task 

// const user = {
//   name: "Rabin",
//   age: 22,
//   role: "Developer"
// };
// print name 
// console.log(user.name);

// print age 
// console.log(user.age);




// const product = {
//   id: 1,
//   name: "Laptop"
// };

// // Add `price`
// product.price = 25;

// // Update `name` to `"Gaming Laptop"`
// product.name = "Gaming Laptop"

// console.log(product);



// const student = {
//   name: "Ram",
//   grade: "A",
//   passed: true
// };
// // Remove `grade`
// delete student.grade;

// console.log(student);




// const person = {
//   name: "Sita",
//   age: 25,
//   city: "Kathmandu"
// };
// Print all keys
// for(let key in person){
//     console.log(key);
// }

// Print all values
// for(let value in person){
//     console.log(person[value]);
// }

// Print key-value pairs
// for(let key in person){
//     console.log(key + " : " + person[key]);
// }



// const car = {
//   brand: "Toyota",
//   model: "Corolla",
//   year: 2022
// };
// // Find how many properties the object has
// let count = 0;
// for(let c in car){
//     count++
// }
// console.log(count);


// const user = {
//   username: "admin",
//   password: "1234"
// };

// // Check if `email` exists
// console.log('email' in user);
// // Check if `username` exists
// console.log('username' in user);



// const company = {
//   name: "TechSoft",
//   address: {
//     city: "Lalitpur",
//     country: "Nepal"
//   }
// };

// Print city
// console.log(company.address.city);

// Add `postalCode` inside `address`
// company.address.postalCode = 235;
// console.log(company);




// const scores = {
//   math: 80,
//   science: 90,
//   english: 70
// };

// // Convert keys to array
// const keysArray = Object.keys(scores);
// console.log(keysArray);

// // Convert values to array
// const valuesArray = Object.values(scores);
// console.log(valuesArray);

// // Convert entries to array
// const entriesArray = Object.entries(scores);
// console.log(entriesArray);



// const calculator = {
//     a: 10,
//     b: 5,
// };
// // Add methods: `add`, `subtract`

// function add () {
//     return calculator.a + calculator.b;
// }
// const sum = add();
// console.log(sum);

// function subtract () {
//     return calculator.a - calculator.b;
// }
// const sub = subtract();
// console.log(sub);


// alternative method 
// const calculator = {
//     a: 10,
//     b: 5,

//     add() {
//         return this.a + this.b;
//     },
//   subtract() {
//         return this.a - this.b;
//     }
// };
// // Add methods: `add`, `subtract`
// console.log(calculator.add());
// console.log(calculator.subtract());



// const users = {
//   u1: { name: "Ram", age: 20 },
//   u2: { name: "Sita", age: 25 },
//   u3: { name: "Hari", age: 17 }
// };
// // Find users who are 18+

// // const adults = Object.values(users).filter((user) => {
// //     return  user.age>=18;
// // });
// // console.log(adults);

// // Count total users

// const totalUser = Object.keys(users).length;
// console.log(totalUser);

// // Change Hari’s age to `18`
// users.u3.age = 18;
// console.log(users.u3);





// creation of object using constructor 
// function Bank(name, address, type) {
//     this.name = name;
//     this.address = address;
//     this.type = type;
// }

// const bank1 = new Bank('nepal bank ltd', 'bagbazar', 'A');
// const bank2 = new Bank('Sanima bank ltd', 'chitwan', 'B');

// console.log(bank1, bank2);




// some constructor task

// function Person(name, age) {
//     // Assign name and age
//   this.username = name;
//   this.age = age;
// }
// // Create two objects using new

// const obj1 = new Person('Ahishek', 21);
// const obj2 = new Person('Bibek', 20);
// console.log(obj1, obj2);





// 2️⃣ Add Method  getInfo() Inside Constructor
// function Car(brand, year) {
//  this.brand = brand;
//  this.year = year;

//  this.getInfo = function () {
//     return `"Brand: ${this.brand} , Year: ${this.year}"`;
//  }
// }

// const car = new Car('Toyota', 2026);
// console.log(car.getInfo());






// 3️⃣ Default Value
// Task:

// Set default role as "user" if not provided
// function User(username, role) {
//   this.username = username;
//   this.role = role || "user";
// }
// const user1 = new User('Abhishek');
// const user2 = new User('Abhishek', 'programmer');
// console.log(user1, user2);



// javascript completed