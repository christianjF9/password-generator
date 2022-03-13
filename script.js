// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const specialcharacters = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~" + String.fromCodePoint(92,34);;
const numbers = "0123456789";

function generatePassword(){
  var length = askLength();
  //generate possible characters
  var characterPool = "";
  while (characterPool == ""){
    var hasLowerCase = window.confirm("Should the password contain lowercase letters?");
    var hasUpperCase = window.confirm("Should the password contain uppercase letters?");
    var uppercaseChance = 0;
 
    if(hasLowerCase||hasUpperCase){
      characterPool += alphabet;
      uppercaseChance = hasUpperCase*(1 - (hasLowerCase *0.5));
    }
    if(window.confirm("Should the password contain special characters?"))
      characterPool+=specialcharacters;
    if(window.confirm("Should the password contain numbers?"))
      characterPool+=numbers;
    else if(characterPool == "")
      window.alert("please pick at least one set of characters to generate your password")
  }

//fills password with possible characters
  var password ="";
  for(i=0;i<length;i++){
    var charPos = Math.floor(Math.random() * characterPool.length);
    var newChar = characterPool.charAt(charPos);
    var caseChanceResult = Math.random();
    if(caseChanceResult<uppercaseChance)
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
  if (isNaN(length)){
    alert("Please enter a number");
    length = askLength();
  } else if (length<8||length>128){
    alert("Password must be between 8 and 128 characters")
    length = askLength();
  }
  return length;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
