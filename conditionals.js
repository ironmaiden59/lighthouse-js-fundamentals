var age = 15

function whichSchool(age) {
  return (age < 13) ? "Elementary School"
  :      (age >= 13 && age <= 18 ) ? "Secondary"
  :      (age > 18) ? "Lighthouse labs"
  : "None"
}  
console.log(whichSchool(20));

  
