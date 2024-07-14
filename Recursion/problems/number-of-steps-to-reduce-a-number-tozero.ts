//https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
function numberOfSteps(num: number): number {
    if(num <= 1)
    return num;
    let count = 0;
    if((num & 1) == 1){
        num -= 1;
        count++
    }
    return count + 1 + numberOfSteps(num/2)
};
