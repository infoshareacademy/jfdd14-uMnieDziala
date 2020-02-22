const storageKey = 'cookieAccept'

function cookieSaveToLocalStorage() {
    localStorage.setItem(storageKey, 'true');
    tryCloseCookieBar();
}

function isCookieAccepted() {
    const cookieClicked = localStorage.getItem(storageKey);
    return cookieClicked;
}

function tryCloseCookieBar() {
    if (isCookieAccepted() === 'true') {
        let coookieElement = document.getElementById('cookie');
        coookieElement.style.display = 'none';
    }
}
tryCloseCookieBar();