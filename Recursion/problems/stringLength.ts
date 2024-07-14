// https://www.geeksforgeeks.org/program-for-length-of-a-string-using-recursion/

function stringLengthFn(inputElement: string): number {
    if (inputElement == '') return 0;
    return stringLengthFn(inputElement.substring(1)) + 1;
}


const inputString = 'mayur';
const result = stringLengthFn(inputString);
console.log(result);
