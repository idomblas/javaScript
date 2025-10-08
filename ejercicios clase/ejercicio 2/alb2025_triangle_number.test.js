// 2.12 Preguntar por pantalla un número entero y que se imprima por pantalla
// un triángulo tipo, siendo el número entero el número de líneas que se
// imprimen. Un ejemplo sería con el número 5:
// 1
// 3 1
// 5 3 1
// 7 5 3 1
// 9 7 5 3 1

const utils = require('./alb2025_triangle_number.js');

test('pyramid to return expected output', () => {
    expect(utils.pyramid(0)).toBe('');
    expect(utils.pyramid(1)).toBe('1 \n');
    expect(utils.pyramid(4)).toBe('1 \n3 1 \n5 3 1 \n7 5 3 1 \n');
});
