function search(array, item) {
  let index = 0;

  for (let i = 0; i < array.length; i++) {
    if (item === array[i]) {
      index = i
      break
    }
    
  }
  return index
}

let number = [1,2,3,4,5,6,7,8,9]
console.log(search(number = [1,2,3,4,5,6,7,8,9], 9));
