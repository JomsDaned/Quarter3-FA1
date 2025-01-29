var name = prompt("Enter your nickname:");
var height = parseInt(prompt("Enter your height in inches:"));
var weight = parseFloat(prompt("Enter your weight in kg:"));

var wholeFeet = parseInt(height / 12);
var inches = height % 12;
var weightInLbs = weight * 2.20462;

alert("Name: " + name + "\n" +  "Height: " + wholeFeet + "'" + inches + "\"\n" +  "Weight: " + weightInLbs + " lbs");