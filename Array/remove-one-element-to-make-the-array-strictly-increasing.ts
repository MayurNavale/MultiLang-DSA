//https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/
function canBeIncreasing(nums: number[]): boolean {
     let remove = false;
        
        for(let i = 1; i < nums.length; i++){
            if(nums[i - 1] >= nums[i]){
                if(remove)return false;
                remove = true;
                
                if(i > 1 && nums[i - 2] > nums[i])nums[i] = nums[i - 1];
            }
        }
        return true;
};
