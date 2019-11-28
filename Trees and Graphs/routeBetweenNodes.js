// Route between two routes: Given a directed graph and two nodes (S and E), design an algorithm to find out whether there is a route from S to E

function hasRoute(graph, start, end) {
   const visited = new Set();
   const nodesToVisit = [];
   nodesToVisit.push(start);
   visited.add(start);
   while (nodesToVisit.length) {
      const node = nodesToVisit.shift();
      if (node === end) return true;
      for (let newNode of graph[node]) {
         if (newNode === end) return true;
         if (!visited.has(newNode)) {
            nodesToVisit.push(newNode);
            visited.add(newNode);
         }
      }
   }
   return false;
}

const graph = {
   A: ['B', 'C'],
   B: ['C', 'A'],
   C: ['E', 'B'],
   E: ['C'],
};

console.log(hasRoute(graph, 'A', 'E'));
