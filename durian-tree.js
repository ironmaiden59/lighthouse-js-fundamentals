class Employee {
  constructor(name, title, salary){
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.boss = null;
    this.subordinates = [];
  }
addSubordinates(subordinates){
  this.subordinates.push(subordinates);
  subordinates.boss = this;
}
get numberOfSubordinates(){
  return this.subordinates.length;
}
get numberOfPeopleToCEO(){
  let numberOfPeople = 0;
  let currentEmployee = this;

  while(currentEmployee.boss){
    currentEmployee = currentEmployee.boss;
    numberOfPeople++
  }
  return numberOfPeople;
}
hasSameBoss(Employee){
  return this.boss === Employee.boss
}
}



const ada = new Employee("Ada", "CEO", 3000000.00);

const craig    = new Employee("Craig", "VP Software", 1000000);
const arvinder = new Employee("Arvinder", "Chief Design Officer", 1000000);
const angela   = new Employee("Angela", "VP Retail", 1000000);
const phil     = new Employee("Phil", "VP Marketing", 1000000);

ada.addSubordinates(craig);
ada.addSubordinates(arvinder);
ada.addSubordinates(angela);
ada.addSubordinates(phil);


