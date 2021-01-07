
// calculator #1: addition --

const addInputOne = document.getElementById('input-one');
const addInputTwo = document.getElementById('input-two');
const addButton = document.getElementById('add-button');
const addResult = document.getElementById('result');

console.log(addInputOne);
console.log(addInputTwo);

addButton.addEventListener('click', () => {
    const sum = addInputOne.valueAsNumber + addInputTwo.valueAsNumber;

    console.log('sum');

    addResult.textContent = sum;
});


