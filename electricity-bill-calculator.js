// Create a program where:

// If the units consumed are less than 100, the rate is 5 tk per unit.
// If the units are between 100 and 300, the rate is 8 tk per unit.
// If the units are more than 300, the rate is 10 tk per unit.

let units = 1;
let unitPrice = 0;

if (units < 100){
    unitPrice = units * 5;
}
else if (units >=100 && units <=300){
    unitPrice = units * 8;
}
else if (units > 300){
    unitPrice = units * 10;
}

console.log(unitPrice)