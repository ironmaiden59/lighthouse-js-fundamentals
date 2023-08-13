const somename = "mike";




try {
somename = "Jon"   
} catch (error) {
      console.log("There was an error", error.somename);
}
console.log(somename);