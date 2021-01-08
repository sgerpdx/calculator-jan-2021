
import { getSum, getDiff, getProd, getSolution } from './mathUtils.js';

// Addition:

const addInputOne = document.getElementById('add-one');
const addInputTwo = document.getElementById('add-two');
const addResult = document.getElementById('add-result');

export function addClickHandler() {

    const sum = getSum(addInputOne.valueAsNumber, addInputTwo.valueAsNumber);

    addResult.textContent = sum;
}

// export function testGetSum(addInputOne, addInputTwo) {
//     return addInputOne + addInputTwo;
// }


// Subtraction:

const subInputOne = document.getElementById('sub-one');
const subInputTwo = document.getElementById('sub-two');
const subResult = document.getElementById('sub-result');

export function subClickHandler() {

    const diff = getDiff(subInputOne.valueAsNumber, subInputTwo.valueAsNumber);

    subResult.textContent = diff;
}


// Multiplication:

const multInputOne = document.getElementById('mult-one');
const multInputTwo = document.getElementById('mult-two');
const multResult = document.getElementById('mult-result');

export function multClickHandler() {

    const product = getProd(multInputOne.valueAsNumber, multInputTwo.valueAsNumber);

    multResult.textContent = product;
}


// Division:

const divInputOne = document.getElementById('div-one');
const divInputTwo = document.getElementById('div-two');
const divResult = document.getElementById('div-result');

export function divClickHandler() {

    const solution = getSolution(divInputOne.valueAsNumber, divInputTwo.valueAsNumber);

    divResult.textContent = solution;
}
