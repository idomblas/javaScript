// 1. TDD: fizzBuzz
// Your task is to write a function, fizzBuzz, that accepts a number and returns a string:

// 'fizz' if the number is divisible by 3;
// 'buzz' if the number is divisible by 5;
// 'fizzbuzz' if the number is divisible by both 3 and 5.
// '{number}' if the number doesn't fulfil any of the above conditions.
// As you create the function in fizzbuzz.js, you should also write tests in index.test.js. You'll need to create your own test cases as you go.

// Edge cases to consider:

// what should fizzbuzz(0) return?
// what should happen if the function is passed a string?

// A -> exception
// B -> "error" -> THE WINNER
// C -> ""

const utils = require('./fizzBuzz');

test('fizzBuzz returns "fizz" when number is divisible by 3', () => {
    expect(utils.fizzBuzz(3)).toMatch('fizz');
    expect(utils.fizzBuzz(12)).toMatch('fizz');
    expect(utils.fizzBuzz(1343 * 3)).toMatch('fizz');
    expect(utils.fizzBuzz(-12)).toMatch('fizz');
});

test('fizzBuzz returns "buzz" when number is divisible by 5', () => {
    expect(utils.fizzBuzz(5)).toMatch('buzz');
    expect(utils.fizzBuzz(20)).toMatch('buzz');
    expect(utils.fizzBuzz(1345 * 5)).toMatch('buzz');
    expect(utils.fizzBuzz(-25)).toMatch('buzz');
});

test('fizzBuzz returns "fizzbuzz" when number is divisible by 3 and 5', () => {
    expect(utils.fizzBuzz(15)).toMatch('fizzbuzz');
    expect(utils.fizzBuzz(45)).toMatch('fizzbuzz');
    expect(utils.fizzBuzz(1345 * 15)).toMatch('fizzbuzz');
    expect(utils.fizzBuzz(-90)).toMatch('fizzbuzz');
    expect(utils.fizzBuzz(0)).toMatch('fizzbuzz');
});

test('fizzBuzz returns {number} when number is not divisible by 3 neither 5', () => {
    expect(utils.fizzBuzz(2)).toMatch('2');
    expect(utils.fizzBuzz(23)).toMatch('23');
    expect(utils.fizzBuzz(8)).toMatch('8');
});

test('fizzBuzz returns "error" when input is not a number', () => {
    expect(utils.fizzBuzz('hola')).toMatch('error');
    expect(utils.fizzBuzz('2')).toMatch('error');
});

test('dummy tests', () => {
    expect('hola').toBe('hola');
    expect('hola').not.toBe('holas');
    expect(2).not.toBe('2');

    expect([1, 2]).toContain(2);
    expect([1, 2]).not.toBe([1, 2]);
    expect([1, 2]).toEqual([1, 2]);

    expect({ a: 2 }).not.toBe({ a: 2 });
    expect({ a: 2 }).toEqual({ a: 2 });
});
