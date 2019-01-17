/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
    if (someStr == '') {
        throw new customException("Incorrect string. String is empty");
    }

    else if (endIndex > someStr.length) {
        throw new customException(`End index ${endIndex} is out of bounds exceptions`);
    }
    else if (startIndex < 0 ) {
        throw new customException(`End index ${startIndex} is out of bounds exceptions`);
    }
    else if (someStr == null) {
        throw new customException("Incorrect string. Entry is null");
    }
    else if (someStr == undefined) {
        throw new customException("Incorrect string. Entry is undefined");
    } else if (someStr == true || someStr == false) {
        throw new customException("Incorrect string. Entry is a boolean, not a string");
    }
    else if (typeof (someStr) == 'number') {
        throw new customException("Incorrect string. Entry is a number, not a string");
    }
    else if (typeof (someStr) == 'object') {
        throw new customException("Incorrect string. Entry is an object, not a string");
    }
    else
        return someStr.substring(startIndex, endIndex);
}

function customException(message) {
    const error = new Error(message);
    return error;
}
console.log(substring('hello', 0, 3));

//These are test entries to test function. 
//console.log(substring('Duni', 0, 15));
//console.log(substring({ a: 5 }, 0, 3));
//console.log(substring(null, 2, 5));