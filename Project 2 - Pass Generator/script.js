let inputSlider = document.getElementById("inputSlider");
let slideValue = document.getElementById("slideValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");

// Showing the slider value
slideValue.textContent = inputSlider.value;
inputSlider.addEventListener("input", () => {
  slideValue.textContent = inputSlider.value;
});

let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let allNumber = "0123456789";
let allSymbols = " ~!`@#$%^&*_";

// Function to genereate the Password
function generatePassword() {
  let genPassword = "";
  let allChars = "";

  allChars += lowercase.checked ? lowerChars : "";
  allChars += uppercase.checked ? upperChars : "";
  allChars += numbers.checked ? allNumber : "";
  allChars += symbols.checked ? allSymbols : "";

  if (allChars == "" || allChars.length == 0) {
    return genPassword;
  }

  let i = 1;
  while (i <= inputSlider.value) {
    genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
    i++;
  }
  return genPassword;
}

genBtn.addEventListener("click", () => {
  passBox.value = generatePassword();
});

copyIcon.addEventListener("click", () => {
  if (passBox.value != "" || passBox.value.length >= 1) {
    navigator.clipboard.writeText(passBox.value); // this the code for the copying something.
    copyIcon.innerText = "check"; // to have the sign of Tick
    copyIcon.title = "Password Copied!"; // this will be shown after the password got copied.

    setTimeout(() => {
      copyIcon.innerHTML = "content_copy";
      copyIcon.title = "";
    }, 2000);
  } else {
  }
});
