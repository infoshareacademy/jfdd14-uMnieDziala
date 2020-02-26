const modalWIndow = document.querySelector('.game-modal');
const btnQuit = document.querySelector('.game-modal__btn--quit');
const btnPlay = document.querySelector('.game-modal__btn--play');

function closeModal(){
    modalWIndow.classList.remove('game-modal--active')
}



btnQuit.addEventListener('click', closeModal);
btnPlay.addEventListener('click', closeModal)