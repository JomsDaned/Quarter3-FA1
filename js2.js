var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var birthyear = parseInt(prompt("Enter your birth year:"));

var currentyear = 2025;
var age = currentyear - birthyear;

document.getElementById("output").innerHTML = 
    "Hello " + firstName + " " + lastName + "! How does it feel to be " + age + " years old?";