
// array with all lower, upper, letters, numbers, and special characters
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q", "R","S","T","U","V","W","X","Y","Z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

const lengthEl = document.getElementById("pass-length-input");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");

function getAllChars() {
    let allChars = lowerCase.concat(upperCase);
    if (numbersCheckbox.checked) {
        allChars = allChars.concat(numbers);
    }
    if (symbolsCheckbox.checked) {
        allChars = allChars.concat(symbols);
    }
    return allChars;
}


lengthEl.addEventListener("change", (e) => {
    //check if integer value is an integer
        

    if (!Number.isInteger(parseInt((e.target.value)))) {
        e.target.value = 8
        return
    } 

    // coerce to reasonable length values
    const length = parseInt(e.target.value);
    if (length < 6) {
        e.target.value = 6;
    } else if (length > 20) {
        e.target.value = 20;
    } else {
        e.target.value = length;
    }
});

//get content of lengthEl as integer
const length = parseInt(lengthEl.value);

const passwordEls = [document.getElementById("password1"), document.getElementById("password2")]
const generateBtn = document.getElementById("generate-btn");

function generatePassword(len) {
    let password = "";
    const allCharacters = getAllChars();
    for (let i = 0; i < len; i++) {
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
    return password;
}

generateBtn.addEventListener("click", function() {
    for (const el of passwordEls) {
        el.textContent = generatePassword(parseInt(lengthEl.value));
    }
})

function copyToClipboard(el) {
    navigator.clipboard.writeText(el.textContent);
    showBubbleDialog(el.parentElement)
  }

function showBubbleDialog(parent) {

    console.log(parent)
    var dialog = document.createElement('div');
    dialog.className = 'bubble-dialog';
    dialog.textContent = 'copied!';
    parent.appendChild(dialog);
    dialog.style.display = 'block';
    setTimeout(function() {
      parent.removeChild(dialog);
    }, 1500);
  }

// generate passwords on load
for (const el of passwordEls) {
    el.textContent = generatePassword(parseInt(lengthEl.value));
}

  
  

  





