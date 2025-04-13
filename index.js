const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d",
"e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~",
"`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let firstPasswordEl = document.getElementById("firstPassword-el")
let secondPasswordEl = document.getElementById("secondPassword-el")
let passwordLengthEL = document.getElementById("passwordLength-el")
let passwordGenerated = false
let passwordEl = document.querySelector(".password")

function generatePasswords() {
    if (passwordGenerated === false) {
        if (passwordLengthEL.value < 1) {
            alert("Please make sure to enter a length")
        }
        for (let i = 0; i < passwordLengthEL.value; i++) {
            firstPasswordEl.textContent += characters[generateRandomIndex()]
            secondPasswordEl.textContent += characters[generateRandomIndex()]
        }
        passwordGenerated = true
    } else {
        firstPasswordEl.textContent = ""
        secondPasswordEl.textContent = ""
        passwordGenerated = false
        generatePasswords()
    }
}

function generateRandomIndex() {
    return Math.floor(Math.random() * characters.length)
}

passwordEl.addEventListener("click", function() {
    navigator.clipboard.writeText(passwordEl.textContent)
    alert("Copied password to clipboard")
})