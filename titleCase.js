// const titleCase = function(str) {
//   return str.toLowerCase().split(' ').map(function(word) {
//     return (word.charAt(0).toUpperCase() + word.slice(1));
//   }).join(' ');
// };
// console.log(titleCase("this is an example"));
// console.log(titleCase("test"));
// console.log(titleCase("i r cool"));
console.log(titleCase(" "));
console.log(titleCase("A"));
  

const fs = require('fs');

console.log('Starting main thread');

const intervalReference = setInterval(() => {
  process.stdout.write('.');
}, 30);

const whenDoneReading = (error, data) =>{
  if (error) {
    console.log('error', error);
    return;
  }
  clearInterval(intervalReference)
  console.log();
  console.log('file read successfully');
  console.log('data sample: ', data.slice(0, 50));
}

fs.readFile('large-text-file.txt', 'utf8', whenDoneReading)

console.log('ending main thread');

