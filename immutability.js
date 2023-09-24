// //Objects
// const object = {
//   key: "Value of Key",
// };

// const copyOfObject = object;

// //Arrays
// const arrayOfNumbers = [1, 2, 3, 4, 5];

// const copyArrayOfNumbers = [...arrayOfNumbers];

// const arrayOfNumbers = [1, 2, 3, 4, 5];
// const doubleArray = arrayOfNumbers.map((element) => element * 2)
// console.log(doubleArray);

function GroceryList() {
  const groceryListArray = [
    {
        id: 1,
        item: "Bread",
        quantity: 1
    }, 
    {
        id: 2,
        item: "Eggs",
        quantity: 12
    }, 
    {
        id: 3,
        item: "Milk",
        quantity: 2
    }, 
    {
        id: 4,
        item: "Snacks",
        quantity: 100
    }
];

  return (
    <ul>

    </ul>
  );
}

export default GroceryList;