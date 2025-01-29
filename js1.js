var name = prompt("Enter your nickname:");
var height = parseInt(prompt("Enter your height in inches:"));
var weight = parseFloat(prompt("Enter your weight in kg:"));

var Feet = parseInt(height / 12);
var inches = height % 12;
var weight = weight * 2.20462;

alert("Name: " + name + "\n" +  "Height: " + Feet + "'" + inches + "\"\n" +  "Weight: " + weight + " lbs");