const beatles = ["john", "paul", "george", "ringo"];
for (let i = 0; i < beatles.length; i += 2) {
  console.log(beatles[i]);
}

let sayHello = function () {
  alert ("Hello");
}
setTimeout(sayHello, 3000);