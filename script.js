// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Create Arrays to use for password generator
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Declare variables 
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumber;
var confirmUpper;
var confirmLower;


//write a function that asks how long the user would like the password

function generatePassword() {
  var confirmLength = (prompt("How many characters would you like in your password?"));
}

//write a loop in case their answer is outside of the parameters 

while (confirmLength <= 7 || confirmLength >= 51) {
  alert("Password must be between 8-50 characters. Please enter a different length.");
  var confirmLength = (prompt("How many characters would you like in your password?"));
}

alert(`Great! Your password will contain ${confirmLength} characters.`);


//determine characteristics of password

var confirmSpecialCharacter = confirm("Click OK to add a special character to your password.");
var confirmNumber = confirm("Click OK to add a number to your password.");
var confirmUpper = confirm("Click OK to an upper case letter to your password");
var confirmLower = confirm("Click OK to add a lower case letter to your password");

//loop to confirm they chose at least one parameter

while (confirmLower === false && confirmUpper === false && confirmNumber === false && confirmSpecialCharacter === false) {
  alert("You must choose at least one parameter.");
  var confirmSpecialCharacter = confirm("Click OK to add a special character to your password.");
  var confirmNumber = confirm("Click OK to add a number to your password.");
  var confirmUpper = confirm("Click OK to an upper case letter to your password");
  var confirmLower = confirm("Click OK to add a lower case letter to your password");
}



var passwordCharacters = []

if (confirmSpecialCharacter){
  passwordCharacters = passwordCharacters.concat(number)
}

if (confirmSpecialCharacter){
  passwordCharacters = passwordCharacters.concat(specialCharacter)
}

if (confirmUpper){
  passwordCharacters = passwordCharacters.concat(upper)
}

if (confirmLower){
  passwordCharacters = passwordCharacters.concat(lower)
}

console.log(passwordCharacters)
  

//create empty string 

var randomPassword = ""
for (var i = 0; i < confirmLength; i++) {
  randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  console.log(randomPassword)
}
return randomPassword;


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

  
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);