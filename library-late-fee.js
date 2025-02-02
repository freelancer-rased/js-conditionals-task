// Write a program that calculates the fine for returning a book late:

// If returned within 5 days, no fine.
// If returned within 10 days, fine is 5 tk per day.
// If returned after 10 days, fine is 10 tk per day.
// If returned after 30 days, the membership is canceled.

let returnedFee = 0;
let duration = 31

if ( duration <= 5 ) {
    returnedFee = "free"
}
else if (duration >=6 && duration <=10){
    returnedFee = duration * 5
}
else if (duration > 10 && duration <= 30){
    returnedFee = duration * 10
}
else if (duration > 30){
    console.log ("your membership cancelled")
    returnedFee = "N/A";
}

console.log(returnedFee)