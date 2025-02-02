// Write a program that suggests what to wear based on temperature:

// If temperature >= 30°C, suggest "Wear light clothes".
// If 20-29°C, suggest "Wear normal clothes".
// If 10-19°C, suggest "Wear warm clothes".
// If < 10°C, suggest "Wear heavy winter clothes".

let temperature = 21;

if (temperature >= 30){
    console.log("wear light clothes")
}
else if (temperature >= 20 && temperature <=29){
    console.log("wear normal clothes")
}
else if (temperature >= 10 && temperature <=19){
    console.log("wear warm clothes")
}
else{
    console.log("wear heavy winter clothes")
}