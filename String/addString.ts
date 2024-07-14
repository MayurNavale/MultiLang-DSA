// leecode https://leetcode.com/problems/add-strings/description/

class Solution {
    addStrings(num1: string, num2: string): string {
        let i: number = num1.length - 1;
        let j: number = num2.length - 1;
        let res: string = "";
        let sum: number = 0;
        let rem: number = 0;
        let div: number = 0;

        while (i >= 0 || j >= 0) {
            let d1: number = i < 0 ? 0 : parseInt(num1.charAt(i));
            let d2: number = j < 0 ? 0 : parseInt(num2.charAt(j));

            sum = d1 + d2 + rem;
            div = sum % 10;
            rem = Math.floor(sum / 10);
            res = div.toString() + res;
            i--;
            j--;
        }

        return rem === 0 ? res : rem.toString() + res;
    }
}

const solution = new Solution();
console.log(solution.addStrings("123", "456")); 
// Output: "579"
