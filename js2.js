var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var birthYear = parseInt(prompt("Enter your birth year:"));

var currentYear = 2025;
var age = currentYear - birthYear;

document.getElementById("output").innerHTML = 
    "Hello " + firstName + " " + lastName + "! How does it feel to be " + age + " years old?";