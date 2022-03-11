// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const specialcharacters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~" + '"';
const numbers = "0123456789";

function generatePassword(){
  var length = askLength();
  var password ="";
//0 to not include uppercase 0.5 to include
  var lowercaseThreshold = 0;
//1 to not include uppercase 0.5 to include
var uppercaseThreshold = 0.5;
//generate possible characters
var characterPool = "";
if(window.confirm("Should the password contain letters?")){
  characterPool += alphabet;

  if(window.confirm("Should the password contain lowercase letters?"))
    lowercaseThreshold = 0.5;
  if(window.confirm("Should the password contain uppercase letters?"))
   uppercaseThreshold = 1;
}
if(window.confirm("Should the password contain special characters?"))
  characterPool+=specialcharacters;
if(window.confirm("Should the password contain numbers?"))
  characterPool+=numbers;
//fills password with possible characters
  for(i=0;i<length;i++){
    var charPos = Math.floor(Math.random() * characterPool.length);
    var newChar = characterPool.charAt(charPos);
    var caseChanceResult = Math.random();
    console.log(caseChanceResult);
    console.log(lowercaseThreshold);
    console.log(uppercaseThreshold);
    if(caseChanceResult>lowercaseThreshold&&caseChanceResult<uppercaseThreshold)
      newChar= newChar.toUpperCase();
    password += newChar;
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function askLength(){
  length = prompt("How long do you want your password? (must be between 8 and 128 characters)");
  if (length<8||length>128){
    alert("Password must be between 8 and 128 characters!")
    length = askLength();
  }
  return length;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
