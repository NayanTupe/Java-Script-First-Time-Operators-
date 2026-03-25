/**                             FUNCTIONS CONCEPTS */

function myFunction() {
    console.log("I am learning JS");
    console.log("learn Function");
}
myFunction();


function newFunction (msg) {    // function ke age msg he o parameter he 
    // parameter --> input
    console.log(msg)
}

newFunction("I love JS"); // argument   aur  function ke baad he o argument he jese ki I love JS


// function --> 2 numbers, sum

function sum(x, y) {
    console.log(x + y);
}

sum(4, 6);


// first class functions --> functions ko values ki tarah treat kar sakte hai

// closures --> ek function jo return kare ek aur function aur return hone wala functionn hamesha use kare ga parent function ka koi varaible

// Ex.
function abcd() {     // first (parent) function
    let a = 12;          // parent function variable     
    return function() {
        console.log(a)    // return function me use huva parent function ka varible
    }
}

// IIFE Function  automatic run program immedietly invoked function expression
(function() {
    console.log("Nayan");
})()



// what does the ... opertor mean in parameters

function abcde(a, b, c, ...val) {  // ... is rest opertor
  console.log(a, b, c, val);   
  }
  abcde(1,2,3,4,5,6);

  // Q1. Pass a function into another function and excute it inside ?

  function abcdef(val) {      // first create function variable
    val();
  }

  abcdef(function(){     // then pass kela function abcdef function varabile mhade like this ---> abcdef(function(){
    console.log("Hii");

  });


  // Arrow Functions 

  const arrowSum =(a, b) => {
    console.log(a + b);   // return a + b; esa bhi likh ke arrow function likh sakte hai
  };

  arrowSum(3 ,9)

  // Practice Que
  // Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string. [a, e, i, o, u]

  function countVowels(str) {
    let count = 0;
    for (const char of str) {
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    return count;
  }

  console.log(countVowels( "nayan mahendra tupe"));

  // Practice Que 2
  // create an arrow function to perform the same Task ?

  const countVow = (str) => {                // => This symbol Arrow operator 
     function countVowels(str) {
    let count = 0;
    for (const char of str) {
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    return count;
  }
  }
  console.log(countVowels( "aeiou"));


// forEach() method work karte pratek elemnt var jaun code run karte

  // practice Que 3  
  // For Given array of numbers, print the square of each value using the forEach loop ?

  let nums = [558, 488, 577, 677, 344]; //let → declare a variable nums → variable name = → assign value
    nums.forEach((num) => {    //.forEach() → method that runs code for each element in array      => → this symbol arrow function (short function syntax)
    console.log(num * num);  // num**2  → comment (another way to write square using **)
  });


 // Map array Method
 
 let num = [67, 78, 89];

 let newArr = num.map((val) => {   // newArr → new array (result)     (val) → parameter (each element from array one by one)  
    return val;   // and val* 2 bhi likh sakte he    return → send value back    val → return same value (no change)
 });
 
 console.log(newArr);

 // filter array Method
 // Ex 

 let arr = [1, 2, 3, 4, 5, 6, 7];

 let evenArr = arr.filter((val) => {   //arr.filter() → filter() method (selects some elements)    (val) →parameter (each value one by one)
   
    return val % 2 === 0;   // return → send result (true/false)   val % 2 → remainder when divided by 2  === 0 → check if remainder is 0
 
    // and odd array chaiye to simple return val % 2 !== 0; kar sakte means not eual to 

}) 
  console.log(evenArr);

  // Practice Que 

  // We are given array of marks of students. Filter out of the marks of students that scored 90+
  
  let marks = [95, 56, 76, 90, 99, 93, 56];

  let toppers = marks.filter((val) => {
    return val > 90;
});

console.log(toppers);


// Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
//  Use the reduce method to calculate sum of all numbers in the array. 
// Use the reduce method to calculate product of all numbers in the array. ?

// Take input from user
let n = Number(prompt("Enter a number:"));

// Create array from 1 to n
let array = [];
for (let i = 1; i <= n; i++) {
  array.push(i);
}

console.log("Array:", array);

// Calculate sum using reduce
let summ = array.reduce((acc, val) => {
  return acc + val;
}, 0);

console.log("Summ:", summ);

// Calculate product using reduce
let product = array.reduce((acc, val) => {
  return acc * val;
}, 1);

console.log("Product:", product);