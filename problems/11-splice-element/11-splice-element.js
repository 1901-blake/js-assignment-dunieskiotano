/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
let arr = [3, 6, 7, 1, 2, 3, 4, 5, 10, 12];//array arr is declared
spliceElement(arr, 4);//spliceElement function is called and the array arr and index 4 are passed
function spliceElement(someArr, index) {
    let newElement = 'Eggs';
    let newNumber = 4;
    let elementMoved = someArr[index];
    console.log("-------------------------------------------")
    console.log("Original Array: ");
    console.log(someArr);
    console.log("-------------------------------------------")
    let itemInserted = someArr.splice(index, 0, newNumber);//Here no element of the array is replaced, just inserts element '4' at index 4
    console.log(`
    Element ${newNumber} is inserted at index ${index}. 
    Element ${elementMoved} that was previously at index ${index} is moved to the right at index ${index +1}. See array bellow`);
    console.log(someArr);
    console.log("-------------------------------------------")
    let itemRemoved = someArr.splice(index, 1, newElement);//Here 1 element is replaced with element 'Eggs' at index '4'
    console.log(`
    Element '${newElement}' is inserted at index ${index}. 
    Element ${itemRemoved} that was previously at index ${index} is replaced with '${newElement}'. See array bellow`);
    console.log(someArr);
    console.log("-------------------------------------------")
}


