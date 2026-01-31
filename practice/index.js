
// example of loop in javascript

// a. for loop
/*let i;
for(i=1; i<10; i++){
    console.log(i);
}*/

// b. while loop
/*let i=0;
while(i<=10){
    i++;
    console.log(i);
}*/



// function practice

// Write a function that takes two numbers and returns their sum.

// method 1 for creating function 
// function initialition
// function sumOfTwoNumber(a, b) {
//     return a + b;
// }
// function call 
// const sum = sumOfTwoNumber(50, 10);
// console.log(sum);

// method 2 for creation function 
// const sumOfTwoNumber = function(a, b){
//     // return a+b;
//     // const sum = a+b;
//     console.log(a+b);
// }
// // const sum= sumOfTwoNumber(10,20);
// // console.log(sum);
// sumOfTwoNumber(20,30);

// method 3 for creating function 
// const sumOfTwoNumber = (a, b) => {
//     return a + b;
// }
// const sum = sumOfTwoNumber(40,40);
// console.log(sum);


// Write a function that checks whether a number is even or odd.

// const evenOdd = (a) => {
//     if(a%2===0){
//         // console.log(`${a} is even number.`);
//         return `${a} is even number.`;
//     }else{
//         // console.log(`${a} is odd number.`);
//         return `${a} is odd number.`;
//     }
// }
// const check = evenOdd(415);
// console.log(check);

// Write a function that finds the maximum of three numbers.

// const maxi = (a, b, c) => {
//     if (a > b && a > c)
//         return `${a} is maximum number.`;
//     else if (b > a && b > c)
//         return `${b} is maximum number.`;
//     else
//         return `${c} is maximum number.`;
// }
// const maximum = maxi(20, 10, 50);
// console.log(maximum);


// Write a function that returns the factorial of a given number.

// const factorial = (n) => {
//     if(n<0) return 'undefined';
//     else if(n===0 || n===1) return 1;
//     let result = 1;
//     for(let i = 1; i<=n; i++){
//         result = result * i;
//     }
//     return result;
// }
// const finalResult = factorial(2);
// console.log(finalResult);

// Write a function that reverses a string. 

// const str = (strValue) => {
//     return strValue.split('').reverse().join('');
// }
// const sreverse = str('abhishek');
// console.log(sreverse);
