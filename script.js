
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  let passwordLength = prompt("How many characters should we use? (8-20)");

  if (passwordLength >=8 && passwordLength <=20) {
    // empty password to append to
    let password = '';
    // list of available characters, upper, lower, numbers, and special.
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$'; // 65 characters long
  
    // loop through the characters and append a character 1 by 1 until the passwordlength (chosen above)
    for (let i = 1; i <= passwordLength; i++) {
        // for loop rounds down to lower integer (floor) after taking a random float from 0 to 1 (1 not inclusive) * 66.
        // having 66 will allow for the chance of getting $ (character 65, the last character in characters).
        let c = Math.floor(Math.random() * (characters.length + 1));

        // append password character 
        password += characters.charAt(c)
    }
    // return password.
    return password;
  } 
  
  else {
    // if out of range, return this message.
    return "The password length is out of range"
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
