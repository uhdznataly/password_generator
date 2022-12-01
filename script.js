// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Create Arrays to use for password generator
var number = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacter = ["!","@","#","$","%","^","&","*","?"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Declare variables 
 var confirmLength = "";
 var confirmSpecialCharacter;
 var confirmNumber;
 var confirmUpper;
 var confirmLower;


//write a function that asks how long the user would like the password

function generatePassword(){
  var confirmLength = (prompt("How many characters would you like in your password?"));
}












// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);