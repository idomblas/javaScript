const { SuperArray } = require("./ejercicio_2_itziar_domblas");

describe("SuperArray.snail()", () => {
  test("Ejemplo del enunciado (5x4)", () => {
    const nums = [
      19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15,
    ];
    const superArr = new SuperArray(nums);
    const result = superArr.snail(5, 4);

    const expected = [
      [19, 17, 16, 15],
      [10, 1, 14, 4],
      [3, 2, 12, 20],
      [7, 5, 18, 11],
      [9, 8, 6, 13],
    ];

    expect(result).toEqual(expected);
  });

  test("Caso pequeño (2x3)", () => {
    const nums = [1, 2, 3, 4, 5, 6];
    const superArr = new SuperArray(nums);
    const result = superArr.snail(2, 3);

    const expected = [
      [1, 4, 5],
      [2, 3, 6],
    ];

    expect(result).toEqual(expected);
  });

  test("Caso cuadrado (3x3)", () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const superArr = new SuperArray(nums);
    const result = superArr.snail(3, 3);

    const expected = [
      [1, 6, 7],
      [2, 5, 8],
      [3, 4, 9],
    ];

    expect(result).toEqual(expected);
  });

  test("Entrada inválida devuelve []", () => {
    const nums = [1, 2, 3, 4, 5];
    const superArr = new SuperArray(nums);
    const result = superArr.snail(2, 3);
    expect(result).toEqual([]);
  });

  test("Una sola columna (4x1)", () => {
    const nums = [10, 20, 30, 40];
    const superArr = new SuperArray(nums);
    const result = superArr.snail(4, 1);

    const expected = [[10], [20], [30], [40]];

    expect(result).toEqual(expected);
  });

  test("Una sola fila (1x4)", () => {
    const nums = [1, 2, 3, 4];
    const superArr = new SuperArray(nums);
    const result = superArr.snail(1, 4);

    const expected = [[1, 2, 3, 4]];

    expect(result).toEqual(expected);
  });

  test("Input array vacío (0 elementos) devuelve []", () => {
    const superArr = new SuperArray([]);
    expect(superArr.snail(0, 0)).toEqual([]);
  });

  test("Input array con más de 250 elementos devuelve []", () => {
    const nums = Array.from({ length: 251 }, (_, i) => i + 1);
    const superArr = new SuperArray(nums);
    expect(superArr.snail(1, 251)).toEqual([]);
  });

  test("Input array con valor <1 devuelve []", () => {
    const nums = [0, 2, 3];
    const superArr = new SuperArray(nums);
    expect(superArr.snail(1, 3)).toEqual([]);
  });

  test("Input array con valor >1000 devuelve []", () => {
    const nums = [1, 1001, 3];
    const superArr = new SuperArray(nums);
    expect(superArr.snail(1, 3)).toEqual([]);
  });

  test("Output con más de 250 filas devuelve []", () => {
    const nums = Array.from({ length: 251 }, (_, i) => i + 1);
    const superArr = new SuperArray(nums);
    expect(superArr.snail(251, 1)).toEqual([]);
  });

  test("Output con más de 250 columnas devuelve []", () => {
    const nums = Array.from({ length: 251 }, (_, i) => i + 1);
    const superArr = new SuperArray(nums);
    expect(superArr.snail(1, 251)).toEqual([]);
  });

  test("Fila o columna igual a 0 devuelve []", () => {
    const nums = [1, 2, 3];
    const superArr = new SuperArray(nums);
    expect(superArr.snail(0, 3)).toEqual([]);
    expect(superArr.snail(3, 0)).toEqual([]);
  });

  test("Matriz de 250x1 con 250 elementos", () => {
    const nums = Array.from({ length: 250 }, (_, i) => i + 1);
    const superArr = new SuperArray(nums);
    const result = superArr.snail(250, 1);
    expect(result.length).toBe(250);
    expect(result[0][0]).toBe(1);
    expect(result[249][0]).toBe(250);
  });
});
