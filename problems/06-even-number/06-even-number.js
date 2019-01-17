/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
    let isEven = false;
    if ((someNum & 1) === 0) {
        isEven = true;
    }
    else { isEven = false };

    return console.log(`Is number '${someNum}' even? The answer is ${isEven}`);
}

//passes values from 1 to 10 to the function isEven to check if they are even or odd
for (let i = 0; i <= 10; i++) {
    isEven(i)
}
