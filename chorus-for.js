// function expression catSays
var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

function helloCat(callbackFunct) {
  return "Hello " + callbackFunct(4);
}
console.log(helloCat(catSays));
