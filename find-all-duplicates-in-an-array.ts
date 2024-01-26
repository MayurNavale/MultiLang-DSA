// leetcode  .../problems/find-all-duplicates-in-an-array/

function findDuplicates(nums: number[]): number[] {
   const result: number[] = [];

   for (const val of nums) {
       const index = Math.abs(val) - 1;

       if (nums[index] < 0) {
           result.push(index + 1);
       } else {
           nums[index] = -nums[index];
       }
   }

   return result;
};