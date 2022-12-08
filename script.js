//> 1. Manipulation of the DOM (Basic)

const myHeading = document.querySelector(".main-heading");
myHeading.innerHTML = "I am learning JavaScript.";
myHeading.style.color = "red"; // for changing the color of the text
myHeading.style.fontFamily = "JetBrains Mono"; // It's a slightly different from the CSS font-family property, here we use camelCase instead of kebab-case
myHeading.style.fontSize = "2rem"; // for changing the font size of the text
myHeading.style.fontWeight = "bold"; // for changing the font weight of the text
myHeading.classList.add("title"); // for adding a class to the element
myHeading.classList.remove("main-heading"); // for removing a class from the element

//> 2. Manipulation of the DOM (Advanced)
// ^ 2.1. Creating an Element
const heading = document.createElement("p"); // for creating an element
heading.innerHTML = "I can Understand the DOM."; // for adding content to the element
const parent = document.querySelector(".parent"); //  for selecting the parent element
parent.appendChild(heading); // for appending the element to the parent element
// append add the element to the end of the parent element.
// if we want to add the element to the beginning of the parent element, we can use prepend instead of append.
// if we want to add the element to a specific position, we can use insertBefore instead of append.
parent.style.fontFamily = "JetBrains Mono";
parent.style.color = "purple";
parent.style.fontSize = "2rem";
parent.style.fontWeight = "bold";

// ^ 2.2. Removing an Element
const subHeading = document.querySelector(".remove");
subHeading.style.color = "orange";
subHeading.style.fontSize = "1.5rem";
subHeading.style.fontWeight = "bold";
subHeading.style.fontFamily = "JetBrains Mono";
subHeading.remove(); // for removing the element

// ^ 2.3. DOM Events
const button = document.querySelector("#main-btn");
const para = document.querySelector("#para");

button.addEventListener("click", (event) => {
  para.style.color = "#2cb92e";
  para.style.fontFamily = "JetBrains Mono";
  para.style.fontSize = "2rem";
  para.style.fontWeight = "bold";
  console.log("Button Clicked", event);
})
