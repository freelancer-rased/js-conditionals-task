/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

var studentScore = 69;
if (studentScore >= 90 && studentScore <= 100){
    console.log("You Got A")
}
else if (studentScore >= 80 && studentScore <= 89){
    console.log ("You Got B")
}
else if (studentScore >= 70 && studentScore <= 79){
    console.log ("You Got C")
}
else if (studentScore >= 60 && studentScore <= 69){
    console.log ("You Got D")
}
else if (studentScore >= 0 && studentScore <= 59){
    console.log ("You Got F")
}

else{
    console.log ("Please put the number upto 100")
}