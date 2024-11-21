// Green Square
const squareGreenHide = document.querySelector("#squareGreenHide");

const squareGreenButton = document.querySelector("#squareGreenButton");

console.log(squareGreenHide, squareGreenButton);

squareGreenButton.addEventListener("click", function () {
    console.log("Button is clicked!");
    
    squareGreenHide.classList.toggle("hidden");
});


// Red Square
// Lag variabler som henter ID-ene som hører til red square
// Sett opp en event listener til red square knappen
// BONUS: Legg til funksjonalliteten til red square i den anonyme 'function'

const squareRedShowText = document.querySelector("#squareRedShowText");

const squareRedButton = document.querySelector("#squareRedButton");

console.log(squareRedShowText,squareRedButton);

const squareRedText = document.createElement("p");
console.log(squareRedText);

squareRedText.textContent = "Jeg er tekst i en rød boks";

squareRedText.classList.add("hidden");

squareRedShowText.appendChild(squareRedText);

squareRedButton.addEventListener("click", function () {
    console.log("Button is clicked");
    squareRedText.classList.toggle("hidden");
})

// Blue square
const squareBlueShowImg = document.querySelector("#squareBlueShowImg");

const squareBlueButton = document.querySelector("#squareBlueButton");

console.log(squareBlueShowImg, squareBlueButton);

const squareBlueImg = document.createElement("img");

squareBlueImg.src = "hamburger.png";
squareBlueImg.alt = "Hamburger icon";

squareBlueImg.classList.add("hamburgerIcon");
squareBlueImg.classList.add("hidden");

squareBlueShowImg.appendChild(squareBlueImg);

squareBlueButton.addEventListener("click", function () {
    console.log("Button is clicked!");
    
    squareBlueImg.classList.toggle("hidden");
});