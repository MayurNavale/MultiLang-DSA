// leetcode .../problems/build-array-from-permutation/

function buildArray(nums: number[]): number[] {
   let n = nums.length;
     let arr = new Array(n);
     
     for(let i = 0; i < n; i++){
         arr[i] = nums[nums[i]];
     }
     
     return arr;
};