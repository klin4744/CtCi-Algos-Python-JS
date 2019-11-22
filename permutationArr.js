var permute = function(nums) {
   if (nums.length <= 1) return [[...nums]];
   const permutations = [];
   const lastNum = nums[nums.length - 1];
   const permutationsWithoutLastNum = permute(nums.slice(0, -1));
   for (let permutation of permutationsWithoutLastNum) {
      for (let i = 0; i <= permutation.length; i++) {
         if (i === permutation.length) {
            permutations.push([...permutation, lastNum]);
         } else {
            permutations.push([
               ...permutation.slice(0, i),
               lastNum,
               ...permutation.slice(i),
            ]);
         }
      }
   }
   return permutations;
};
