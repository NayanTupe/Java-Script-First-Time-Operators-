/**  Conditions Statements  (if) Statement **/

// let age = 25;

// if (age >= 18) {
//     console.log("You Can Vote");
// }


// let age = 16;
// if (age < 18) {
//     console.log("You CANNOT Vote");
// }


// let mode = "dark";
// let color;

// if(mode === "dark") {
//     color = "black";

// }

// if(mode === "light") {
//     color = "white";
    
// }

// console.log(color);

/** if-else Statement **/

let mode = "blue";
let color;

if(mode === "dark") {
    color = "black";

} else {
    color = "white";              //else not write without if (if important for else)
}
    
/** First Condition if-else Statement **/

// console.log(color);
// let age = 18;

// if(age >= 18){
//    console.log("Adult");
// }else{
//    console.log("Not Adult");     //condition → age >= 18 → true  &   so "Adult" prints
// } 

/** Secound Condition if-else Statement **/

let age = 15;

if(age >= 18){
   console.log("Adult");
}else{
   console.log("Not Adult");  /** if true → else will NOT run    &   if false → else will run */
}   

// odd or even   (odd = 1,3,5,...) & (even = 2,4,6,...)

let num = 10;

if(num % 2 === 0) {
    console.log("even");
} else {
    console.log("odd")
}
// alert("hello")    //  popup genrate

// let name = prompt("hello")  // popup genratebut temparory user can write input in popup
// console.log(name) 

/** Practice Q1 **/

// let num1 = prompt("enter A number:");

// if(num1 % 5 === 0) {
//     console.log(num1, "is multiple of 5")
// } else {
//     console.log(num1, "is NOT a multiple of 5")
// }

/** Practice Q2 **/

// let score = 75;  // This is only code 1 time use 

let score = prompt("Enter your score (0-100):")
let grade;

if (score >= 90 && score <= 100) {
    grade = "A"
}else if (score >= 70 && score <= 89) {
    grade = "B"
}else if (score >= 60 && score <= 69) {
    grade = "C"
}
else if (score >= 50 && score <= 59) {
    grade = "D"
}else if (score >= 0 && score <= 49) {
    grade = "E"
}

console.log("according to your scores, your grade was : ", grade)