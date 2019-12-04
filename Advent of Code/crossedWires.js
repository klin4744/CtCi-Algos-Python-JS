class Line {
   constructor(coor1 = [0, 0], coor2 = [0, 0]) {
      this.coor1 = coor1; // (x,y)
      this.coor2 = coor2; // (x,y)
   }
   getSlope() {
      const [x1, y1] = this.coor1;
      const [x2, y2] = this.coor2;
      return (y2 - y1) / (x2 - x1);
   }
   getIntersection(line) {
      if (this.isParallel(line))
         throw new Error('Lines are parallel, they will NOT intersect');
      let x = Infinity,
         y = Infinity;
      if (
         this.getSlope() === 0 &&
         line.coor1[0] >= Math.min(this.coor1[0], this.coor2[0]) &&
         line.coor1[0] <= Math.max(this.coor1[0], this.coor2[0]) &&
         this.coor1[1] >= Math.min(line.coor1[1], line.coor2[1]) &&
         this.coor1[1] <= Math.max(line.coor1[1], line.coor2[1])
      ) {
         y = this.coor1[1];
         x = line.coor1[0];
      } else if (
         line.getSlope() === 0 &&
         this.coor1[0] >= Math.min(line.coor1[0], line.coor2[0]) &&
         this.coor1[0] <= Math.max(line.coor1[0], line.coor2[0]) &&
         line.coor1[1] >= Math.min(this.coor1[1], this.coor2[1]) &&
         line.coor1[1] <= Math.max(this.coor1[1], this.coor2[1])
      ) {
         y = line.coor1[1];
         x = this.coor1[0];
      }
      return [x, y];
   }
   isParallel(line) {
      if (Math.abs(this.getSlope()) === Math.abs(line.getSlope())) return true;
      return false;
   }
}
// Input:
// R75,D30,R83,U83,L12,D49,R71,U7,L72
// U62,R66,U55,R34,D71,R55,D58,R83
function crossedWires(directions1, directions2) {
   const lines1 = new Set();
   const lines2 = new Set();
   let currentMinDistance = Infinity;
   makeLines(directions1, lines1);
   makeLines(directions2, lines2);
   lines1.forEach(line1 => {
      lines2.forEach(line2 => {
         if (!line1.isParallel(line2)) {
            const [x, y] = line1.getIntersection(line2);
            const absoluteX = Math.abs(x);
            const absoluteY = Math.abs(y);
            if (
               absoluteX + absoluteY < currentMinDistance &&
               !(x === 0 && y === 0)
            ) {
               currentMinDistance = absoluteX + absoluteY;
            }
         }
      });
   });

   return currentMinDistance;
}
function makeLines(directions, lines) {
   let previousLocation = [0, 0];
   let currentLocation = [0, 0];
   for (let direction of directions) {
      currentLocation = moveCoordinates(direction, previousLocation);
      const newLine = new Line(previousLocation, currentLocation);
      lines.add(newLine);
      previousLocation = currentLocation;
   }
}
function moveCoordinates(directions, coordinates) {
   const [x, y] = coordinates;
   let newDirections = [x, y];
   const direction = directions[0];
   const distance = parseInt(directions.slice(1));
   switch (direction) {
      case 'R':
         newDirections = [x + distance, y];
         break;
      case 'L':
         newDirections = [x - distance, y];
         break;
      case 'U':
         newDirections = [x, y + distance];
         break;
      case 'D':
         newDirections = [x, y - distance];
         break;
      default:
         break;
   }
   return newDirections;
}

console.log(
   crossedWires(
      ['R75', 'D30', 'R83', 'U83', 'L12', 'D49', 'R71', 'U7', 'L72'],
      ['U62', 'R66', 'U55', 'R34', 'D71', 'R55', 'D58', 'R83'],
   ),
);
console.log(crossedWires(['R8', 'U5', 'L5', 'D3'], ['U7', 'R6', 'D4', 'L4']));
