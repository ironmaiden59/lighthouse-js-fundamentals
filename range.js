function range(start, end, step) {
  let array = [];
  for (let i = start; i <= end; i+= step){
    array.push(i);
   
  }
  return array;
    
  };
  console.log(range(2, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
