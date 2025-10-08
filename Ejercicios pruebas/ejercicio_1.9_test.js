let Circle = require("./ejercicio_1.9").Circle;

test("Circle class test", () => {
  let circle = new Circle(3);
  expect(circle.calculate_perimeter()).toBeCloseTo(18.84955592153876);
  expect(circle.calculate_area()).toBeCloseTo(28.274333882308138);
  expect(circle.getVolumeByHeight(5)).toBeCloseTo(141.3716694115407);
});

test("Circle class with decimal radius", () => {
  let circle = new Circle(1.5);
  expect(circle.calculate_perimeter()).toBeCloseTo(9.42477796076938);
  expect(circle.calculate_area()).toBeCloseTo(7.0685834705770345);
  expect(circle.getVolumeByHeight(2)).toBeCloseTo(14.137166941154069);
});

test("Circle class with 0 radius", () => {
  let circle = new Circle(0);
  expect(circle.calculate_perimeter()).toBeCloseTo(0);
  expect(circle.calculate_area()).toBeCloseTo(0);
  expect(circle.getVolumeByHeight(10)).toBeCloseTo(0);
});

test("Circle class with negative radius", () => {
  let circle = new Circle(-2);
  expect(circle.calculate_perimeter()).toBeCloseTo(-12.566370614359172);
  expect(circle.calculate_area()).toBeCloseTo(12.566370614359172);
  expect(circle.getVolumeByHeight(4)).toBeCloseTo(50.26548245743669);
});
