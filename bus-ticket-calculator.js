/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/


let age = 45;
let isStudent = true;

let fare = 800;

if (age < 10){
    fare = "free"
}
else if (isStudent) {
    fare = fare * 0.5;
}
else if (age >= 60){
    fare = fare *.85
}


  console.log(fare);
