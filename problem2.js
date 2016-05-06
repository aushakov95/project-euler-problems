/* Finding the sum of the even-valued numbers in a Fibonnacci sequence:
           1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
*/
var sum = 2;
var previousNum = 1;
var currentNum = 2;
var nextNum;
var tempNum;

while (currentNum < 4000000){            // Example:
  nextNum = previousNum + currentNum;    // nextNum = 1 + 2
  tempNum = currentNum;                  // temp = 2
  currentNum = nextNum;                  // currentNum = 3
  previousNum = tempNum;                 // previousNum = 2
  if (nextNum % 2 === 0) {
   sum += nextNum;                       //sum = 2
  }
}
console.log("The sum of the even-valued numbers in a Fibonnacci sequence is " + sum);
