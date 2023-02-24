var digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCaseList = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCaseList = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var specialCharList = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

var list = [];

// Assignment Code

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var newPassword = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = newPassword;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var userLength = Number(
    prompt("What is the length of the desired password?")
  );

  if (isNaN(userLength)) {
    alert("Invalid. Must enter a number for the length.");
    return null;
  }

  if (userLength < 8 || userLength > 128) {
    alert("Invalid. The length is between 8 and 128 characters.");
    return null;
  }

  var lowerCase = confirm(
    "Do you want the password to contain lowercase letters? Click OK for yes and Cancel for no."
  );

  var upperCase = confirm(
    "Do you want the password to contain uppercase letters? Click OK for yes and Cancel for no."
  );

  var numeric = confirm(
    "Do you want the password to contain numbers? Click OK for yes and Cancel for no."
  );

  var specialChar = confirm(
    "Do you want the password to contain special characters? Click OK for yes and Cancel for no."
  );

  if (!lowerCase && !upperCase && !numeric && !specialChar) {
    alert("Invalid. Must select at least one type.");
    return null;
  }

  if (lowerCase) {
    list = list.concat(lowerCaseList);
  }
  if (upperCase) {
    list = list.concat(upperCaseList);
  }
  if (numeric) {
    list = list.concat(numeric);
  }
  if (specialChar) {
    list = list.concat(specialCharList);
  }

  var password = "";

  for (var i = 0; i < userLength; i++) {
    var randomNumber = Math.floor(Math.random() * list.length);

    password += list[randomNumber];
  }

  return password;
}
