var h = document.querySelectorAll("h1"); // All Select h1 tag to help (.querySelectorAll) and single (1) select h1 tag to help (.querySelector)
console.log(h); // h means variable name to defined upper line

h.forEach(function (e) {
  // forEach is a loop method || It runs for each item in array
  // (e) is a callback function || e = each element (one by one)
  // e फक्त एक variable नाव आहे // तो current element दर्शवतो // तुम्ही काहीही नाव वापरू शकता:

  console.log(e);
});
