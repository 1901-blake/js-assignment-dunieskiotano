/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(someNum) {
    let productFactorial = someNum;
    if (someNum == 1 ) {
     return 1;
    }
    return productFactorial*= factorial(someNum - 1);
   // return productFactorial;
}

//pass numbers from 1 to 5 to the function factorial
for (let i = 1; i <=5; i++) {
    console.log(factorial(i));
}