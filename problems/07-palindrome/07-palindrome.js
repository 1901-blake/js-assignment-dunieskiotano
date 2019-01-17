/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
    let isPalindrome = false;
    let removeChar = someStr.replace(/[^A-Z0-9]/ig, "").toLowerCase();//eliminates special characters and spaces and changes to lower case

    let checkPalindrome = removeChar.split('').reverse().join('');//reverses removeChar to go ahead and compare

    if (removeChar !== checkPalindrome) {//compares, if it evaluates to false, then the word is not a palindrome
        isPalindrome = false;
        return console.log(`${someStr} ---Palindrome: ${isPalindrome}`);

    }
    else {//otherwise the word is palindrome
        isPalindrome = true;
        return console.log(`${someStr} ---Palindrome: ${isPalindrome}`);

    }
}

isPalindrome("Bob");
isPalindrome("Table");
isPalindrome("Madam");
isPalindrome("Lucia");
isPalindrome("Ana");
isPalindrome("Julio");
isPalindrome("Nurses run");