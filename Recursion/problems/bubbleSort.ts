//https://www.geeksforgeeks.org/recursive-bubble-sort/

function bubbleSort2(inputArrayLength: number, inputElement: number[]) {
    if (inputArrayLength == 1) return ;

    for (let i = 0; i < inputArrayLength - 1; i++) {
        if (inputElement[i] > inputElement[i + 1]) {
            const temp = inputElement[i];
            inputElement[i] = inputElement[i + 1];
            inputElement[i + 1] = temp;
        }
    }
    bubbleSort2(inputArrayLength - 1, inputElement);
}

