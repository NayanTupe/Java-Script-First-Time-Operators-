// Strings

// let str = "Nayan Tupe";

// console.log(str[6]); 

// Templates Literals

// let obj = {
//     item: "Pen",
//     price: 10,
// };

// let output = `the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);

// console.log("the cost of", obj.item, "is", obj.price, "rupees");

// let specialString = 'This is a template literal ';
// console.log(typeof specialString);

// console.log("Nayan\nTupe");    // \n use for string next line print 
// console.log("Nayan\nTupe");       // \t use for stings space crete   like Nayan       Tupe this and string  space length calculate singal  


// let str = "Nayan Tupe";
// let reversed = "";
// // console.log(str.length)
// for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
// }   

// console.log(reversed); 

// let str = "Nayan";

// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }

// String Methods in JS 

// str.toUpperCase()

// let str = "NayanTupe"   //let A keyword in JavaScript Used to declare (create) a variable
// let newStr = str.toUpperCase(); //  newStr create beacause of orginal string variable not change (immatable)That's why new varibable create let newStr Creating another variable called newStr
// console.log(newStr);

let str = "     Nayan  Tupe    21    "
console.log(str.trim());    // Remove all space starting and last using .trim()

let x = "0123456789";
console.log(x.slice(2, 5));    // string part return using .slice()


let str1 = "Nayan"
let str2 = "Tupe"
let res = str1.concat(str2);    //concat use for 2 other variable string mix like output :- NayanTupe 
console.log(res);


let fullName = prompt("enter your fullname without space");

let username = "@" + fullName + fullName.length;

console.log(username);
