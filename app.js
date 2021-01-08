
import { addClickHandler, subClickHandler, multClickHandler, divClickHandler } from './handlers.js';


// #1: addition

const addButton = document.getElementById('add-button');

addButton.addEventListener('click', addClickHandler);



// #2: subtraction

const subButton = document.getElementById('sub-button');

subButton.addEventListener('click', subClickHandler);



// #3: multiplication

const multButton = document.getElementById('mult-button');

multButton.addEventListener('click', multClickHandler);



// #4: division

const divButton = document.getElementById('div-button');

divButton.addEventListener('click', divClickHandler);
