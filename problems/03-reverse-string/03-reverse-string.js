/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */

function reverseStr(someStr) {
    let newString="";
    let srtLength = someStr.length;
    for (let i = srtLength - 1; i >= 0; i--) {
        newString += someStr[i];
        
    }
    return newString;
}

console.log(reverseStr("Dunieski"));