const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d",
"e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~",
"`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let firstPasswordEl = document.getElementById("firstPassword-el")
let secondPasswordEl = document.getElementById("secondPassword-el")
let passwordLenghtEL = document.getElementById("passwordLength-el")
let passwordGenerated = false

function generatePasswords() {
    if (passwordGenerated === false) {
        for (let i = 0; i < passwordLenghtEL.value; i++) {
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