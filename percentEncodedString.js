const urlEncode = function(text) {
  let x = text.trim();
  let string = x.split(" ").join("%20");
  return string
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));