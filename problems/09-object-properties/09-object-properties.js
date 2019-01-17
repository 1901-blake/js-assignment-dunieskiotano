/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
    //I am using destructuring here for my convenience
    let { firstName, lastName, age, degree, homecity, countryOfCitizenship, countryOfOrigin } = someObj;
    //This is one way to access the properties of the object person
    console.log();
    console.log("========= One Way using Destructuring =============");
    console.log(`
    First Name: ${firstName}
    Last Name: ${lastName}
    Age: ${age}
    Degree: ${degree}
    Home City: ${homecity}
    Country of Citizenship: ${countryOfCitizenship}
    Country of Origin: ${countryOfOrigin}`)

    console.log();
    console.log("========= Another way using Dot Notation =============");
    console.log();
    console.log(
        '\xa0\xa0\xa0\ First Name: ', someObj.firstName, '\n' +
        '\xa0\xa0\xa0\ Last Name: ', someObj.lastName, '\n' +
        '\xa0\xa0\xa0\ Age: ', someObj.age, '\n' +
        '\xa0\xa0\xa0\ Degree: ', someObj.degree, '\n' +
        '\xa0\xa0\xa0\ Home City: ', someObj.homecity, '\n' +
        '\xa0\xa0\xa0\ Country of Citizenship: ', someObj.countryOfCitizenship, '\n' +
        '\xa0\xa0\xa0\ Country of Origin: ', someObj.countryOfOrigin, '\n' +
        '\xa0\xa0\xa0\ Function details: ', someObj.whatIdo
    )
}

let person = {
    firstName: 'Dunieski',
    lastName: 'Otano',
    age: 42,
    degree: 'Software Engineering',
    homecity: 'Miami, FL',
    countryOfCitizenship: 'U.S.A',
    countryOfOrigin: 'Cuba',
    whatIdo: function () { console.log("I study programming") }
}
objectProperties(person);