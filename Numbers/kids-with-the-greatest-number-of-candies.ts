// leetcode  .../problems/kids-with-the-greatest-number-of-candies/

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
   let max = candies[0];

      const res: boolean[] = [];

      for (let i = 1; i < candies.length; i++) {
          max = Math.max(max, candies[i]);
      }
      for (let i = 0; i < candies.length; i++) {
          if (extraCandies + candies[i] < max) {
              res.push(false);
          } else {
              res.push(true);
          }
      }

      return res;
  
};