// Given an image represented by an N x N matrix, where each pixel in the image is represented by an integer, write a method to rotate the image by 90 degrees. Can you do this in place?

// [ [0,0] [0,2]
//    [1,0,3],
//    [0,0,0],
//    [7,0,9]
// [2,0]   [2,2]
// ]
// newIndex = currentIndex Math abs(N - currentIndex)
// 0,0 =>
function swap(matrix, pos1, pos2) {
   const { row: r1, col: c1 } = pos1;
   const { row: r2, col: c2 } = pos2;
   temp = matrix[r1][c1];
   matrix[r1][c1] = matrix[r2][c2];
   matrix[r2][c2] = temp;
}

function rotateBy90(matrix) {
   for (let i = 0; i <= Math.floor(matrix.length / 2); i++) {
      const temp = matrix[0][i];
      matrix[0][i] = matrix[matrix.length - 1][matrix.length - 1 - i];
      matrix[matrix.length - 1][matrix.length - 1 - i] = temp;
   }
}
