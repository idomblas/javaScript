const isLeapYear = require("./ejercicio_1_itziar_domblas");

test("2024 es bisiesto", () => {
  expect(isLeapYear("2024")).toBe(true);
});

test("2023 no es bisiesto", () => {
  expect(isLeapYear("2023")).toBe(false);
});

test("2000 es bisiesto (divisible por 400)", () => {
  expect(isLeapYear("2000")).toBe(true);
});

test("1900 no es bisiesto (divisible por 100 pero no por 400)", () => {
  expect(isLeapYear("1900")).toBe(false);
});

test("no es un string", () => {
  expect(isLeapYear(1900)).toBe(false);
});
