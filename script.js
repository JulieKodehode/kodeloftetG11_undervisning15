// Green Square
// The following code fetches the HTML elements using document.querySelector for both the div element and the button element
// We attach a click event listener to the button element using the addEventListener method
// In the anonymous function, we toggle the "hidden" class on the div element to show or hide it
const squareGreenHide = document.querySelector("#squareGreenHide");

const squareGreenButton = document.querySelector("#squareGreenButton");

console.log(squareGreenHide, squareGreenButton);

squareGreenButton.addEventListener("click", function () {
    console.log("Button is clicked!");
    
    squareGreenHide.classList.toggle("hidden");
});

// UNDERVISNINGS OPPGAVE:
// Lag variabler som henter ID-ene som hører til red square
// Sett opp en event listener til red square knappen
// BONUS: Legg til funksjonalliteten til red square i den anonyme 'function'

// Red Square
// Fetch the HTML elements related to the red square (div element and button element) using querySelector
// Create a new <p> element and add text content to it
// Initially, the <p> element is hidden by adding the "hidden" class to it
// Append the new <p> element to the div element that holds the red square content
// Attach a click event listener to the red square button element, which toggles the "hidden" class on the <p> element
const squareRedShowText = document.querySelector("#squareRedShowText");

const squareRedButton = document.querySelector("#squareRedButton");

console.log(squareRedShowText, squareRedButton);

const squareRedText = document.createElement("p");
console.log(squareRedText);

squareRedText.textContent = "Jeg er tekst i en rød boks"; 

squareRedText.classList.add("hidden"); 

squareRedShowText.appendChild(squareRedText); 

squareRedButton.addEventListener("click", function () {
    console.log("Button is clicked");
    
    squareRedText.classList.toggle("hidden");
})

// Blue Square
// Fetch the HTML elements related to the blue square (div element and button element) using querySelector
// Create a new <img> element and set its source, alt text, and classes
// Initially, the image is hidden by adding the "hidden" class to it
// Append the new image to the div element that holds the blue square content
// Attach a click event listener to the blue square button element, which toggles the "hidden" class on the image
const squareBlueShowImg = document.querySelector("#squareBlueShowImg");

const squareBlueButton = document.querySelector("#squareBlueButton");

console.log(squareBlueShowImg, squareBlueButton);

const squareBlueImg = document.createElement("img");

squareBlueImg.src = "hamburger.png"; 
squareBlueImg.alt = "Hamburger icon"; 

squareBlueImg.classList.add("hidden");

// Added after lesson to resize the img
squareBlueImg.classList.add("hamburgerIcon"); 

squareBlueShowImg.appendChild(squareBlueImg); 

squareBlueButton.addEventListener("click", function () {
    console.log("Button is clicked!");
    
    squareBlueImg.classList.toggle("hidden");
});
