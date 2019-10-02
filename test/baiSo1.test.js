const { rotate } = require('../baiSo1');

describe('TEST - Rotate matrix', () => {
  test('Rotate matrix 1 time with 3x3 matrix', async () => {
    const matrix = [
      [0, 16, 255],
      [8, 128, 32],
      [0, 0, 0]
    ];
    const numberOfRotate = 1;

    const result = rotate(matrix, numberOfRotate);
    expect(result).toEqual([
      [0, 8, 0],
      [0, 128, 16],
      [0, 32, 255]
    ]);
  });

  test('Rotate matrix 2 time with 3x3 matrix', async () => {
    const matrix = [
      [0, 4, 5],
      [8, 9, 2],
      [0, 1, 7]
    ];
    const numberOfRotate = 2;

    const result = rotate(matrix, numberOfRotate);
    expect(result).toEqual([
      [7, 1, 0],
      [2, 9, 8],
      [5, 4, 0]
    ]);
  });

  test('Rotate matrix 3 time with 3x3 matrix', async () => {
    const matrix = [
      [0, 4, 5],
      [8, 9, 2],
      [0, 1, 7]
    ];
    const numberOfRotate = 3;

    const result = rotate(matrix, numberOfRotate);
    expect(result).toEqual([
      [5, 2, 7],
      [4, 9, 1],
      [0, 8, 0]
    ]);
  });

  test('Rotate matrix 1 time with 4x4 matrix', async () => {
    const matrix = [
      [10, 4, 5, 25],
      [8, 59, 42, 23],
      [50, 31, 7, 33],
      [0, 31, 255, 73]
    ];
    const numberOfRotate = 1;

    const result = rotate(matrix, numberOfRotate);
    expect(result).toEqual([
      [0, 50, 8, 10],
      [31, 31, 59, 4],
      [255, 7, 42, 5],
      [73, 33, 23, 25]
    ]);
  });

  test('Rotate matrix 2 time with 4x4 matrix', async () => {
    const matrix = [
      [10, 4, 5, 25],
      [8, 59, 42, 23],
      [50, 31, 7, 33],
      [0, 31, 255, 73]
    ];
    const numberOfRotate = 2;

    const result = rotate(matrix, numberOfRotate);
    expect(result).toEqual([
      [73, 255, 31, 0],
      [33, 7, 31, 50],
      [23, 42, 59, 8],
      [25, 5, 4, 10]
    ]);
  });

  test('Rotate matrix 3 time with 4x4 matrix', async () => {
    const matrix = [
      [10, 4, 5, 25],
      [8, 59, 42, 23],
      [50, 31, 7, 33],
      [0, 31, 255, 73]
    ];
    const numberOfRotate = 3;

    const result = rotate(matrix, numberOfRotate);
    expect(result).toEqual([
      [25, 23, 33, 73],
      [5, 42, 7, 255],
      [4, 59, 31, 31],
      [10, 8, 50, 0]
    ]);
  });

  test('Rotate matrix 400003 time with 4x4 matrix', async () => {
    const matrix = [
      [10, 4, 5, 25],
      [8, 59, 42, 23],
      [50, 31, 7, 33],
      [0, 31, 255, 73]
    ];
    const numberOfRotate = 400003;

    const result = rotate(matrix, numberOfRotate);
    expect(result).toEqual([
      [25, 23, 33, 73],
      [5, 42, 7, 255],
      [4, 59, 31, 31],
      [10, 8, 50, 0]
    ]);
  });
});
