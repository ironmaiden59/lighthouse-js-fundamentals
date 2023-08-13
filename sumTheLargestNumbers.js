const sumLargestNumbers = function(data) {
  let largest = data[0];
  let secondlargest = data[1];

  if (largest > secondlargest) {
    largest = data[0];
    secondlargest = data[1]
  }
    for (let i = 0; i < data.length; i++) {
      if (data[i] > largest) {
        secondlargest = largest;
        largest = data[i]
      }
      
    }
  return largest
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));