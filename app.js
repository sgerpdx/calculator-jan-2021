
console.log('hello world');

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


