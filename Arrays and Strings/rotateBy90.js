// Given an image represented by an N x N matrix, where each pixel in the image is represented by an integer, write a method to rotate the image by 90 degrees. Can you do this in place?

// [ [0,0] [0,2]
//       *
//    [1,0,3],
//    [0,0,0],
//    [7,0,9]
// [0,0]   [2,0]
// [lastIndex -  col, row]
// row col
// [0,1]  [1,0]
// [2 - 1 , 0]
// [lastIndex - col, lastIndex - row]
// [2,0]   [2,2]
//           *
//    [13,15,5,1]  temp = 9
//    [14,6,7,2],
//    [15,10,11,3],
//    [16,12,8,4]

// [  (0,0) (0,1)
//    [1, 2],
//    [3, 4],
// ];

// [
//    [3, 1],
//    [4, 2],
// ];

// newIndex = currentIndex Math abs(N - currentIndex)
// 0,0 =>

function swap(matrix, temp, pos) {
   const [row, col] = pos;
   const newTemp = matrix[row][col];
   matrix[row][col] = temp;
   return newTemp;
}

function rotateBy90(matrix) {
   const fullIndex = matrix.length - 1;
   const length = Math.floor(matrix.length / 2);
   for (let row = 0; row <= length; row++) {
      for (let col = row; col <= length; col++) {
         // first corner
         // temp is what we're moving our first corner to
         let temp = matrix[col][fullIndex - row];
         matrix[col][fullIndex - row] = matrix[row][col];

         // second corner
         temp = swap(matrix, temp, [fullIndex - row, fullIndex - col]);

         // third corner
         temp = swap(matrix, temp, [fullIndex - col, row]);

         // last corner
         swap(matrix, temp, [row, col]);
      }
   }
   return matrix;
}

console.log(
   rotateBy90([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
   ]),
);

// [
//    [7, 4, 1],
//    [8, 5, 2],
//    [9, 6, 3],
// ];
