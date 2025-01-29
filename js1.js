var name = prompt("Enter your nickname:");
var height = parseInt(prompt("Enter your height in inches:")); 
var weight = parseFloat(prompt("Enter your weight in kg:"));

var feet = height / 12;  
var Feet = height - (height % 12);  
feet = feet / 12;  
var inches = height % 12;  

var weight = (weight * 2.20462).toFixed(3);  

alert("Name: " + name + "\n" +   "Height: " + Feet + "’" + inches + "”\n" + "Weight: " + weight + " lbs");
