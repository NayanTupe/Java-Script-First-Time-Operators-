// let friends = ["Nayan", "Roshan", "Rupesh", "Narayan", "Aniket", "Bhaven"]

// for(let i=0; i<friends.length; i++) {     // using loop in array 
//     console.log(friends[i]);
// }

/** Practice Q1*/

let marks = [87,76,78,98,76,76,78];

let sum = 0;

for (let val of marks) {
    sum += val;
}

let avg = sum / marks.length;
console.log(`avg marks of the class = ${avg}`);



