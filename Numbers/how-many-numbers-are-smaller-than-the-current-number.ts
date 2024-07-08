// leetcode  .../problems/how-many-numbers-are-smaller-than-the-current-number/


function smallerNumbersThanCurrent(nums: number[]): number[] {
   const n = nums.length;
      const res: number[] = [];

      for (let i = 0; i < n; i++) {
          let count = 0;

          for (let j = 0; j < n; j++) {
              if (nums[i] > nums[j] ) {
                  count++;
              }
          }

          res[i] = count;
      }

      return res;
};