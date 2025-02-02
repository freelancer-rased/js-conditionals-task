// Create a program where:

// If a customer buys more than 3 cups of coffee, they get a 10% discount.
// If they buy more than 5 cups, they get a 20% discount.
// Otherwise, they pay the full price of 100 tk per cup.

let coffeePrice = 100;
let cupOfCoffee = 2
if (cupOfCoffee >=3 && cupOfCoffee <= 5) {
    coffeePrice = coffeePrice * .90;
}
else if (cupOfCoffee >=6 ) {
    coffeePrice = coffeePrice * .80
}
console.log(coffeePrice)