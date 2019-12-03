// You are given a list of projects and a list of dependencies (which is a list of pairs of projects), where the second project is dependent on the first project. All project's dependencies must be built before the project is. Find the build order that will alllow the project to be built . If there is no valid build order, return an error

// O(pd) space (projects * dependencies) to store into a graph
// O(p^2) time (projects * projects) to ensure all the projects have been covered
function buildOrder(projects, dependencies) {
   const graph = new Map();
   const path = new Set();
   for (let project of projects) {
      graph.set(project, new Array());
   }
   for (let pair of dependencies) {
      const [dependency, project] = pair;
      graph.get(project).push(dependency);
   }
   for (let project of projects) {
      graph.forEach((projectDendencies, key) => {
         if (hasAllDependencies(path, projectDendencies)) {
            path.add(key);
         }
      });
   }
   if (path.size !== projects.length) {
      throw new Error(
         'Cannot make all projects with the given dependency list',
      );
   }
   return Array.from(path);
}
function hasAllDependencies(path, projectDendencies) {
   for (let dependency of projectDendencies) {
      if (!path.has(dependency)) return false;
   }
   return true;
}

console.log(
   buildOrder(
      ['a', 'b', 'c', 'd', 'e', 'f'],
      [
         ['a', 'd'],
         ['f', 'b'],
         ['b', 'd'],
         ['f', 'a'],
         ['d', 'c'],
      ],
   ),
);
console.log(
   buildOrder(
      ['a', 'b', 'c', 'd', 'e', 'f'],
      [
         ['a', 'd'],
         ['f', 'b'],
         ['b', 'd'],
         ['f', 'a'],
         ['d', 'c'],
         ['a', 'f'],
      ],
   ),
);
