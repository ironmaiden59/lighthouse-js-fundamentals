const anArrayMixedElements = [1, "hello", 80, "world", 24, "javascript", 6, 99, "LHL", 12, "bootcamp", 45, 3];
let numbersOnly = (val) => {
  if (typeof(val) === 'number') {
    return val
  }
}
const filteredArray = anArrayMixedElements.filter(numbersOnly);

console.log(filteredArray);

const higherThanFifty = filteredArray.find(number => number > 50);

console.log(higherThanFifty);

const initalValue = 0;
const sumOfAllNumbers= filteredArray.reduce((a, c) => a + c, initalValue);

console.log(sumOfAllNumbers);