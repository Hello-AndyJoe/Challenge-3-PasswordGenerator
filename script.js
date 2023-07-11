// Assignment Code
var generateBtn = document.querySelector("#generate");
var myGeneratedPassword = "";

function generatePassword() {

var passwordLengthNumber = 0;
var lowers = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var specials = ["!","@","#","$","%","^","&","*","(",")","+","-",".","`","~","|","<",">","=","-","_"];

promptOne();

function promptOne() {
  var passwordLength = prompt("Please input your desired lenth of password between the numbers of 8 and 128.", 12);
//Default number is 12 and made sure that user's input number is read by the script as a number
  if (passwordLength >= 8 && passwordLength <= 128) {
    passwordLengthNumber = parseInt(passwordLength);
    console.log(passwordLengthNumber);
    promptTwo();
  } else if (passwordLength === null) {
    return;
  } else {
    alert("Please make sure you select a number between 8 and 128.");
    promptOne();
  }
}

function promptTwo() {
  var useLowers = prompt("Use lowercase letters? (Yes or No)", "Yes").toLowerCase();
//Default value is yes for the prompt; users can answer yes, no, y, n in any caplization
  if (useLowers === "yes" || useLowers === "y") {
    console.log(lowers);
    promptThree();
  } else if (useLowers === "no" || useLowers === "n") {
    lowers = [];
    console.log(lowers);
    promptThree();
  } else if (useLowers === null) {
    return;
  } else {
    alert("Please make sure you answer yes or no.");
    promptTwo();
  }
}

function promptThree() {
  var useUppers = prompt("Use UPPERCASE letters? (Yes or No)", "Yes").toLowerCase();
//Default value is yes for the prompt; users can answer yes, no, y, n in any caplization
  if (useUppers === "yes" || useUppers === "y") {
    console.log(uppers);
    promptFour();
  } else if (useUppers === "no" || useUppers === "n") {
    uppers = [];
    console.log(uppers);
    promptFour();
  } else if (useUppers === null) {
    return;
  } else {
    alert("Please make sure you answer yes or no.");
    promptThree();
  }
}

function promptFour() {
  var useNumbers = prompt("Use numbers? (Yes or No)", "Yes").toLowerCase();
//Default value is yes for the prompt; users can answer yes, no, y, n in any caplization
  if (useNumbers === "yes" || useNumbers === "y") {
    console.log(numbers);
    promptFive();
  } else if (useNumbers === "no" || useNumbers === "n") {
    numbers = [];
    console.log(numbers);
    promptFive();
  } else if (useNumbers === null) {
    return;
  } else {
    alert("Please make sure you answer yes or no.");
    promptFour()
  }
}

function promptFive() {
  var useSpecials = prompt("Use special characters? (Yes or No)", "Yes").toLowerCase();
//Default value is yes for the prompt; users can answer yes, no, y, n in any caplization
  if (useSpecials === "yes" || useSpecials === "y") {
    console.log(specials);
    criteriaCheck()
  } else if (useSpecials === "no" || useSpecials === "n") {
    specials = [];
    console.log(specials);
    criteriaCheck()
  } else if (useSpecials === null) {
    return;
  }else {
    alert("Please make sure you answer yes or no.");
    promptFive()
  }
}

function criteriaCheck() {

  var passwordRequiredCharArray = [];
  var passwordRemainder = "";
  var masterArray = lowers.concat(uppers,numbers,specials);
  var masterCharacters = masterArray.join("");

  console.log(masterCharacters);

  if (masterArray.length === 0) {
    alert("Please make sure to say yes to at least one of the password criteria:\n\nLowercase Characters\nUppercase Characters\nNumbers\nSpecial Characters");
    generatePassword();
  } else {
    createPassword();
//There are two parts of the password; passwordRequired and passwordRemainder; the passwordRequired makes sure that atleast one of each selected criteria character is in the password
    function createPassword() {
      if (lowers.length !== 0) {
        var randomLower = lowers[Math.floor(Math.random() * lowers.length)];

        passwordRequiredCharArray.push(randomLower);
        console.log(randomLower);
      }
      if (uppers.length !== 0) {
        var randomUpper = uppers[Math.floor(Math.random() * uppers.length)];

        passwordRequiredCharArray.push(randomUpper);
        console.log(randomUpper);
      } 
      if (numbers.length !== 0) {
        var randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

        passwordRequiredCharArray.push(randomNumber);
        console.log(randomNumber);
      } 
      if (specials.length !== 0) {
        var randomSpecials = specials[Math.floor(Math.random() * specials.length)];

        passwordRequiredCharArray.push(randomSpecials);
        console.log(randomSpecials);
      }

      var passwordRequiredChar = passwordRequiredCharArray.join("");

      console.log(passwordRequiredChar);

      for (var i = 0; i < (passwordLengthNumber - (passwordRequiredChar.length)); i++) {
        var randomSetup = Math.floor(Math.random() * masterCharacters.length);
        
        passwordRemainder += masterCharacters.substring(randomSetup, randomSetup +1);
//the creation of the remainding part of the password after passwordRequired by looping a random character being selected with additional ones being added to the previous one
        console.log(randomSetup);
        console.log(passwordRemainder);
      }

      myGeneratedPassword = passwordRequiredChar + passwordRemainder;
      }
    }
  }
  return myGeneratedPassword;
}

// Write password to the #password input
//CODE BELOW PROVIDE BY INSTRUCTOR
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);