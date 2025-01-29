var shareInfo = confirm("Do you agree to share your personal information?");

if (shareInfo) {
    console.log("User agreed to share information.");
    console.log("Name: " + name);
    console.log("Height: " + feet + "’" + inches + "”");
    console.log("Weight: " + weightLbs + " lbs");
} else {
    console.log("User does not wish to share his/her information.");
}