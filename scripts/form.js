const button = document.querySelector(".form__button");
const input = document.querySelector(".form__input");
const modal = document.querySelector('game-modal');


/* on preventDefault html email validation doesn't work, solution from:
https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
*/

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// our code:

function emailToStorage(event) {
    event.preventDefault();
    let inputValue = input.value;
    let isEmail = validateEmail(inputValue);
    if (!inputValue) {
        alert("Podaj adres email")
    }
    else if (!isEmail) {
        alert("Niepoprawny adres email")
    } else {
        localStorage.setItem("email", inputValue);
        //tu wstawic modal
    } 
}

button.addEventListener("click", emailToStorage);


