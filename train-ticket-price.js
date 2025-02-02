// A train ticket price depends on the distance traveled:

// If distance <= 50 km, ticket price is 100 tk.
// If distance 51 - 150 km, ticket price is 250 tk.
// If distance > 150 km, ticket price is 500 tk.

let distance = 151;

if( distance <=50) {
    console.log("Your Ticket Price is: 100 tk")
}

else if (distance >=51 && distance <=150){
    console.log("Your Ticket Price is: 250 tk")
}

else if (distance > 150){
    console.log("Your Ticket Price is: 500 tk")
}