// Dom Part - 1 Start 

// 4 Pillars of DOM 

// 1. Selection of an Element ==> This Part  - let a = document.querySelector("h1");
// 2. Changing HTML ==> This Part - a.innerHTML = "Change HTML ANY THING"; 
//3. Changing CSS   ==> This Part - // .style → HTML एलिमेंटच्या style किंवा CSS properties वापरण्यासाठी.
//4. Event Listener 



// let a = document.querySelector("h1")    // document → represents the entire webpage (HTML document) in JavaScript.    .querySelector("h1") → a method that selects the first HTML element matching the CSS selector "h1". 
// console.log(a)

  let a = document.querySelector("h1");
  a.innerHTML = "Change IN HTML ANY THING using This command ";     // a.innerHTML Gets the current content of <h1>.
  a.innerHTML = a.innerHTML.toUpperCase();
  a.style.color = "yellow"        // .style → HTML एलिमेंटच्या style किंवा CSS properties वापरण्यासाठी.   .color -→ CSS property, जी टेक्स्टचा रंग बदलते.
  a.style.backgroundColor = "Black"

//4. Event Listener 

// “जेव्हा वापरकर्ता a element वर click करतो, तेव्हा **console मध्ये ‘Hii’ दाखव आणि popup alert देखील दाखव.”

a.addEventListener("click", function(){   // .addEventListener() → A method that attaches an “event listener” to an element. It “listens” for something to happen on that element.   "click" → The type of event we are listening for.

// Here it’s a mouse click on the element.  function(){ → callback function.

// जे काही { } मध्ये लिहिलं आहे ते केवळ element क्लिक झाल्यावरच चालेल
    console.log("Hii")      
    alert("Hii")  // alert() → browser मध्ये popup box दाखवते.
})

