const passwordLength = document.getElementById("password-length");
const includeUppercase = document.getElementById("uppercase-letters");
const includeLowercase = document.getElementById("lowercase-letters");
const includeNumbers = document.getElementById("numbers");
const includeSymbols = document.getElementById("symbols");

const generatePasswordBtn = document.querySelector(".btn-main");
const copyBtn = document.querySelector(".btn-copy");

const passwordText = document.getElementById("password-text");

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()";

function generatePassword() {
  let password = "";
  while (password.length < passwordLength.value) {
    if (includeLowercase.checked)
      password += getRandomElement(lowercaseLetters);
    if (includeUppercase.checked)
      password += getRandomElement(uppercaseLetters);
    if (includeNumbers.checked) password += getRandomElement(numbers);
    if (includeSymbols.checked) password += getRandomElement(symbols);
  }

  passwordText.value = password;
}

function getRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

function copy() {
  passwordText.select();
  if (!navigator.clipboard.writeText) {
    document.execCommand("copy");
  } else {
    navigator.clipboard.writeText(passwordText.value);
  }
  alert("Password copied to clipboard!");
}

copyBtn.addEventListener("click", copy);
generatePasswordBtn.addEventListener("click", generatePassword);
