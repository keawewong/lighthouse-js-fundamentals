var raining = true;
var temperature = 5;
var stayHome;

if (temperature < -40 || temperature > 40){
  stayHome = true;
  console.log("Maybe going outside isn't such a great idea...");
}  else if (temperature < 0 ) {
  console.log("Make sure you pick out a scarf");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it");
} else {
    console.log("Short sleeves are fine.");
}

if (raining && !stayHome) {
  console.log("Don't forget your umbrella!");
} else if (!raining && !stayHome) {
  console.log("Leave your umbrella at home!");
}

if (!stayHome){
  console.log("Now you're ready to go outside");
}