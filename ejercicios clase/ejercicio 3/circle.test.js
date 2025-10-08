// 1.9 Crea una clase llamada Circle que tenga como entrada el radio en el
// constructor. Debería tener dos métodos, uno para calcular el perímetro
// (get_perimeter) y otro para calcular el área (get_area). También debería
// poder calcular el volumen del cilindro que quedaría dada una altura
// (get_volume_by_height).

let circle = require("./circle.js");


describe("Circle Class", () => {

    test("should calculate the perimeter", () => {
        const circle_five = new circle.Circle(5);
        expect(circle_five.calculatePerimeter()).toBeCloseTo(31.42, 2);

        const circle_zero = new circle.Circle(0);
        expect(circle_zero.calculatePerimeter()).toBe(0);
    });

    test("should calculate the area", () => {
        const circle_five = new circle.Circle(5);
        expect(circle_five.calculateArea()).toBeCloseTo(78.54, 2);

        const circle_zero = new circle.Circle(0);
        expect(circle_zero.calculateArea()).toBe(0);
    });

});