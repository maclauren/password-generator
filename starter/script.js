// Array of special characters to be included in password
var specialCharacters = [
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
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  let length = parseInt(
    prompt("How long does the password need to be? (10-64 characters)")
  )

  if(isNaN(length) === true){
    alert(`Password length must be a number`)
    return;
  }

  if(length < 10){
    alert(`Must be minimum 10 characters`)
    return;
  }

  if(length > 64){
    alert(`Must be maximum 64 characters`);
    return;
  }

  let hasSpecialCharacters = confirm(
    "Press OK to include special characters"
  )

  let hasNumericCharacters = confirm(
    "Press OK to include numeric characters"
  )

  let hasLowerCasedCharacters = confirm(
    "Press OK to include lower case characters"
  )

  let hasUpperCasedCharacters = confirm(
    "Press OK to include upper case characters"
  )

  if(hasSpecialCharacters === false && 
    hasNumericCharacters === false && 
    hasLowerCasedCharacters === false && 
    hasUpperCasedCharacters === false) {
      alert(`Must select at least one character type`);
      return;
    }

    let passwordOptions = {
      length: length,
      hasNumericCharacters: hasNumericCharacters,
      hasSpecialCharacters: hasSpecialCharacters,
      hasLowerCasedCharacters: hasLowerCasedCharacters,
      hasUpperCasedCharacters: hasUpperCasedCharacters,
    }

    console.log(passwordOptions);

    return passwordOptions;

}


// Function for getting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length)
  let randomElement = arr[randomIndex];

  return randomElement;
}

// Function to generate password with user input
function generatePassword() {
  let options = getPasswordOptions();
  console.log(options);
  let result = []

  let possibleCharacter = []

  let guaranteedCharacter = []

  if(options.hasNumericCharacters) {
    possibleCharacter = possibleCharacter.concat(numericCharacters);
    guaranteedCharacter.push(getRandom(numericCharacters))
  }

  if(options.hasSpecialCharacters) {
    possibleCharacter = possibleCharacter.concat(specialCharacters);
    guaranteedCharacter.push(getRandom(specialCharacters))
  }

  if(options.hasLowerCasedCharacters){
    possibleCharacter = possibleCharacter.concat(lowerCasedCharacters);
    guaranteedCharacter.push(getRandom(lowerCasedCharacters));
  }

  if(options.hasUpperCasedCharacters){
    possibleCharacter = possibleCharacter.concat(upperCasedCharacters);
    guaranteedCharacter.push(getRandom(upperCasedCharacters));
  }

  for(let index = 0; index < options.length; index++){
    var generated = getRandom(possibleCharacter);
    console.log(generated)
    result.push(generated);
  }

  console.log(result);

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);