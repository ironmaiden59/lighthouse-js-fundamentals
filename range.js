// online store
// name(string) the name of a product
// price(number) the price of the product
// quantity(mumber) the quantity sold.




const calculateTotalRevenue = function(array){
  let totalRevenue = 0
// loop through the products
for (const product of array) {
  let totalPrice;

  totalPrice = product.price * product.quantity
  totalRevenue = totalRevenue + totalPrice
}


  return totalRevenue;
}


const example = [
  {name:'keyboard', price: 20.00, quantity: 2},
{ name:'Mouse', price: 15.00, quantity: 1},
{name: 'Coffee mug', price: 4.50, quantity: 8}
]

const result = calculateTotalRevenue(example)
console.log('Result:', result);