const button = document.querySelector(".form__button");
const input = document.querySelector(".form__input");


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
    if (!inputValue) {
        alert("podaj maila")
    }
    let isEmail = validateEmail(inputValue);
    if (!isEmail) {
        alert("Adres email jest niepoprawny.")
    } else {
        localStorage.setItem("email", inputValue);
        alert("Dziękujemy :)")

    } 
}

button.addEventListener("click", emailToStorage);


