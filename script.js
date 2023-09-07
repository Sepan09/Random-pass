// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCaseletters = () => {
  var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
  return lowercase[Math.floor(Math.random() * lowercase.length)];
}
var upperCaseletters = () => {
  var uppercase = ["A",'B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
  return uppercase[Math.floor(Math.random() * uppercase.length)];
} 
var numbers = () => {
  var num = [0,1,2,3,4,5,6,7,8,9,];
  return num[Math.floor(Math.random() * num.length)];
}
var symbols = () => {
  var sym = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.',
  ];
  return sym[Math.floor(Math.random()* sym.length)];
}

function generatePassword() {
  var optionsArr = [];
  var password = '';

  var passwordLength = parseInt(prompt('Password Length'));
  if (passwordLength < 8) {
    alert ("Incorrect amount, password must be at least 8 characters");
    return null
  }
  if (passwordLength > 128) {
    alert ("Incorrect amount, password can not exceed 128 characters");
    return null
  }

  var haveLowerCase = confirm("Include Lowercase?");

  if(haveLowerCase) {
    optionsArr.push('lowerCaseletters')
  }

  var haveUpperCase = confirm("Include Uppercase?");
  if(haveUpperCase) {
    optionsArr.push('upperCaseletters')
  }

  var haveNumbers = confirm("Include Numbers?");
  if(haveNumbers) {
    optionsArr.push('numbers')
  }

  var haveSpecial = confirm("Include Special Characters?");
  if(haveSpecial) {
    optionsArr.push('symbols')
  }


  for (var i = 0; i < passwordLength; i++) {
    var randomchoice = optionsArr[Math.floor(Math.random() * optionsArr.length)];

    if (randomchoice === "lowerCaseletters") {
      var value = lowerCaseletters();
      password = password + value;
    } 

    if (randomchoice === "upperCaseletters") {
      var value = upperCaseletters();
      password = password + value;
    } 

    if (randomchoice === "numbers") {
      var value = numbers();
      password = password + value;
    } 

    if (randomchoice === "symbols") {
      var value = symbols();
      password = password + value;
    } 
  }
  
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
