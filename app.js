const passwordBox = document.getElementById("password");
const btn = document.querySelector('.container button');
const copy = document.querySelector('.container .display img');

const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "!@#$%^&*()_+-={}[]/><";

const allChars = upperCase + lowerCase + number + symbols;

// Random char
function getRandomChar(str) {
    return str[Math.floor(Math.random() * str.length)];
}

// Shuffle password
function shufflePassword(password) {
    return password.split('').sort(() => Math.random() - 0.5).join('');
}

// Generate password
function createPassword(){
    let password = "";

    password += getRandomChar(upperCase);
    password += getRandomChar(lowerCase);
    password += getRandomChar(number);
    password += getRandomChar(symbols);

    while(password.length < length){
        password += getRandomChar(allChars);
    }

    passwordBox.value = shufflePassword(password);
}

// Copy function (FIXED ✅)
function copyPassword(){
    if(!passwordBox.value) return;

    // Try modern API
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(passwordBox.value);
    } else {
        // Fallback (your old method)
        passwordBox.select();
        document.execCommand("copy");
    }

    // Animation
    copy.style.transform = "scale(1.4)";
    setTimeout(() => {
        copy.style.transform = "scale(1)";
    }, 200);
}

// Events
btn.addEventListener("click", createPassword);
copy.addEventListener("click", copyPassword);
