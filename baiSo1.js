const rotate = (matrix, numberOfRotate) => {
  numberOfRotate = numberOfRotate%4;
  if (numberOfRotate !== 0 || numberOfRotate !== 4) {
    const lengthMatrix = matrix.length - 1;
    for (let i = 0; i < numberOfRotate; i += 1) {
        const result = matrix.map((row, r) => 
            row.map((val, c) => matrix[lengthMatrix - c][r])
        );
        matrix.length = 0;
        matrix.push(...result);
    }
  }
  return matrix;
};

module.exports = {
  rotate
};
