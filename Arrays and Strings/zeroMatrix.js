// Write an algorithmn such that if an element is an M x N matrix is 0, its entire row and column are set to zero
// Shouldn't set rows and cols to zero, if the zero is in place due to the previous row and col swap

// helper functions
function makeRowZero(matrix, row) {
   for (let i = 0; i < matrix[row].length; i++) {
      if (matrix[row][i] !== 0) {
         matrix[row][i] = 0;
      }
   }
}
function makeColumnZero(matrix, col) {
   for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][col] !== 0) {
         matrix[i][col] = 0;
      }
   }
}
// [
//    [1, 2],
//    [0, 4],
//    [5, 6]
// ];
// [
//    [0, 2],
//    [0, 0],
//    [0, 6]
// ];
function zeroMatrix(matrix) {
   const zeroIndexes = [];
   for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[0].length; col++) {
         if (matrix[row][col] === 0) {
            zeroIndexes.push([row, col]);
         }
      }
   }
   for (let location of zeroIndexes) {
      const [row, col] = location;
      makeRowZero(matrix, row);
      makeColumnZero(matrix, col);
   }
   return matrix;
}

console.log(
   zeroMatrix([
      [1, 2],
      [0, 4],
      [5, 6],
   ]),
);
// [
//    [0, 2],
//    [0, 0],
//    [0, 6],
// ];

console.log(
   zeroMatrix([
      [1, 2, 3],
      [0, 4, 0],
      [5, 6, 3],
   ]),
);
// [
//    [0, 2],
//    [0, 0],
//    [0, 6],
// ];
