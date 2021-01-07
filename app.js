



// calculator #1: addition --

const addInputOne = document.getElementById('add-one');
const addInputTwo = document.getElementById('add-two');
const addButton = document.getElementById('add-button');
const addResult = document.getElementById('add-result');

console.log(addInputOne);
console.log(addInputTwo);

addButton.addEventListener('click', () => {
    const sum = addInputOne.valueAsNumber + addInputTwo.valueAsNumber;

    console.log('sum');

    addResult.textContent = sum;
});


// #2: subtraction --

const subInputOne = document.getElementById('sub-one');
const subInputTwo = document.getElementById('sub-two');
const subButton = document.getElementById('sub-button');
const subResult = document.getElementById('sub-result');

console.log(subInputOne);
console.log(subInputTwo);

subButton.addEventListener('click', () => {
    const diff = subInputOne.valueAsNumber - subInputTwo.valueAsNumber;

    console.log(diff);

    subResult.textContent = diff;
});


// #3: multiplication --

const multInputOne = document.getElementById('mult-one');
const multInputTwo = document.getElementById('mult-two');
const multButton = document.getElementById('mult-button');
const multResult = document.getElementById('mult-result');

console.log(multInputOne);
console.log(multInputTwo);

multButton.addEventListener('click', () => {
    const product = multInputOne.valueAsNumber * multInputTwo.valueAsNumber;

    console.log(product);

    multResult.textContent = product;
});



// #4: division --

const divInputOne = document.getElementById('div-one');
const divInputTwo = document.getElementById('div-two');
const divButton = document.getElementById('div-button');
const divResult = document.getElementById('div-result');

console.log(divInputOne);
console.log(divInputTwo);

divButton.addEventListener('click', () => {
    const solution = divInputOne.valueAsNumber / divInputTwo.valueAsNumber;

    console.log(solution);

    divResult.textContent = solution;
});
