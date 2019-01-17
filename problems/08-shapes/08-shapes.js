/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  let str;
  newChar = '';
  let space = ' ';
  switch (shape) {
    case 'Square':
      console.log("===== Square =====");
      console.log();
      for (let i = 0; i < height; i++) {
        let arr = [];
        for (let j = 0; j < height; j++) {
          arr.push(character);
        }
        console.log(arr.join(''));
      }
      console.log();
      break;

    case 'Triangle':
      console.log("===== Triangle =====");
      console.log();
      for (let i = 0; i < height; i++) {
        console.log(newChar += character);
      }
      console.log();
      break;

    case 'Diamond':
      console.log("===== Diamond =====");
      console.log();
      let halfHeight = Math.ceil(height / 2);
      for (let i = 0; i < height; i++) {

        str = ' ';
        for (let j = 1; j < height - i; j++) {
          str = str + ' ';
        }
        for (let k = 1; k <= (2 * i + 1); k++) {
          str = str + '*';

        }
        if (i < halfHeight)
          console.log(str)
        else
          break;
      }


      for (let i = 1; i <= halfHeight - 1; i++) {
        console.log(space.repeat(i + (halfHeight - 1)), character.repeat(2 * (halfHeight - i) - 1));
      }
      console.log();
      break;
  }
}
printShape("Square", 3, "%");
printShape("Triangle", 3, "$");
printShape("Diamond", 5, "*");