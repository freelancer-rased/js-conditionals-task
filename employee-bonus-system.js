// Write a program that calculates an employee’s bonus:

// If work experience is more than 5 years, bonus is 15% of salary.
// If experience is 3-5 years, bonus is 10% of salary.
// Otherwise, bonus is 5% of salary.

let salary = 10000;
let experience = 2;
let bonus = 0;

if ( experience > 5){
    bonus = salary * 15 / 100;
}

else if (experience >=3 && experience <=5){
    bonus = salary * 10 / 100;
}

else {
    bonus = salary * 5 / 100;
}

console.log(bonus)