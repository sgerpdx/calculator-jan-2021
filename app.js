// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

console.log('Hello World!');

const welcomeElement = document.getElementById('welcome');
const mainAreaElement = document.getElementById('main-area');
const logoElement = document.getElementById('logo');


// Plan: Add a button
// When the user clicks, change the style and text content of the welcomeElement

const myButton = document.getElementById('change-button');

// 'getElementById' is a function, above; 'change-button' is an argument
// add an event listener to activate button

myButton.addEventListener('click', () => {
    welcomeElement.textContent = 'YOU HAVE ATTAINED POWER EXTREME';
    welcomeElement.style.background = 'gold';
    mainAreaElement.style.backgroundImage = 'url("https://d2j8c2rj2f9b78.cloudfront.net/uploads/poster-images/ONLYINCLT_MINE.jpg")';

});



