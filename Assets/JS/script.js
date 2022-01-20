// Assignment code here





var numArr = [0,1,2,3,4,5,6,7,8,9];
var charArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialArr = "!#$%&'()*+,-./:;<=>?@[\^_`{|}~";

function generatePassword() {
  var length;
  var password=[];
  //Get password length between 8-128
 
  length = parseInt(prompt('How long would you like the password to be? It can be from 8-128 characters.'));
  while(!length){
    alert("Please enter a number")
    generatePassword();
  }
  //check if a correct length
  if(length>128){
    alert("Password can not be greater than 128 characters. Enter a correct length.");
    generatePassword();
  }else if(length<8){
    alert("Password can not be less than 8 characters. Enter a correct length");
    generatePassword();
  }else{
    alert("Your password will be "+length+ " long.");
  };

  var inNumber = window.confirm("Do you want numbers in your password?");
  var inSpecial = window.confirm("Do you want special characters in your password?");
  var inLower = window.confirm("Do you want a lowercase characters in your password?");
  var inUpper = window.confirm("Do you want Uppercase characters in your password?");


for(let i=0;i<length;){

    if(inNumber&&i<length){
      password.push(numArr[Math.floor(Math.random()*numArr.length)])
      i++;
    }

    if(inSpecial&&i<length){
      password.push(specialArr[Math.floor(Math.random()*specialArr.length)])
      i++;
    }

    if(inLower&&i<length){
      password.push(charArr[Math.floor(Math.random()*charArr.length)])
      i++;
    }

    if(inUpper&&i<length){
      let upperChar = charArr[Math.floor(Math.random()*charArr.length)]
      upperChar=upperChar.toUpperCase();
      password.push(upperChar);
      i++;
    }
  } 

  shuffleArray(password); 
  var endPass=password.join("")
  return endPass;
  
};

//Fisher-Yates shuffle
function shuffleArray(array){
  var shuf = array.length 
  var t;
  var i;

  // While there remain elements to shuffle…
  while (shuf) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * shuf--);

    // And swap it with the current element.
    t = array[shuf];
    array[shuf] = array[i];
    array[i] = t;
  }

  return array;
};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var finalPass = generatePassword();
  var passwordText = document.querySelector("#password");
  debugger;
  passwordText.value = finalPass;

};

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);