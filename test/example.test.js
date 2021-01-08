
import { getSum, getDiff, getProd, getSolution } from '../mathUtils.js';

const test = QUnit.test;

// tests for getSum addition:

test('function should return 30 for inputs 16 and 14', (expect) => {

    const expected = 30;

    const actual = getSum(16, 14);

    expect.equal(actual, expected);

});

test('function should return 15 for inputs 10 and 5', (expect) => {

    const expected = 15;

    const actual = getSum(10, 5);

    expect.equal(actual, expected);

});


// tests for getDiff subtraction:

test('function should return 4 for inputs 7 and 3', (expect) => {

    const expected = 4;

    const actual = getDiff(7, 3);

    expect.equal(actual, expected);

});

test('function should return 53 for inputs 80 and 27', (expect) => {

    const expected = 53;

    const actual = getDiff(80, 27);

    expect.equal(actual, expected);

});


// tests for getProd multiplication:

test('function should return 25 for inputs 5 and 5', (expect) => {

    const expected = 25;

    const actual = getProd(5, 5);

    expect.equal(actual, expected);

});

test('function should return 49 for inputs 7 and 7', (expect) => {

    const expected = 49;

    const actual = getProd(7, 7);

    expect.equal(actual, expected);

});


// tests for getSolution division:

test('function should return 6 for inputs 48 and 8', (expect) => {

    const expected = 6;

    const actual = getSolution(48, 8);

    expect.equal(actual, expected);

});

test('function should return 15 for inputs 60 and 4', (expect) => {

    const expected = 15;

    const actual = getSolution(60, 4);

    expect.equal(actual, expected);

});
