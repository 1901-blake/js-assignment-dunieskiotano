/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
let arr = [4, 3, 13, 2, 8, 10, 11, 1, 5];
bubbleSort(arr);
function bubbleSort(numArray) {
    let i; let j = 0; temp = 0;
    console.log('----- Original Array -----');
    console.log(arr);
    for (i = 0; i < numArray.length - 1; i++) {
        for (j = 0; j < numArray.length - 1; j++) {
            if (numArray[j] > numArray[j + 1]) {
                temp = numArray[j];
                numArray[j] = numArray[j + 1];
                numArray[j + 1] = temp;
            }

        }
    }
    console.log('----- Sorted Array -----');
    return console.log(numArray);

}