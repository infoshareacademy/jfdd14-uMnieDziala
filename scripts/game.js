const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const scale = 50;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
const startButton = document.querySelector("button");
const modalOnGame = document.querySelector(".onGame-modal");
const scoreOnGame = document.querySelector('.onGame-modal__score');
const theBestScore = document.getElementById('score');
let motivationText = document.querySelector('.onGame-modal__motivation');



//HEADER SCORE
if (localStorage.getItem("score")){
    theBestScore.innerHTML = `Twój najlepszy wynik: ${localStorage.getItem('score')}`
}

//GAME
class Swimmer {
    constructor() {
        this.draw();
    }
    width = scale;
    height = scale;
    x = Math.floor(columns / 2) * scale;
    y = canvas.height - (this.height * 2);
    velX = 0;
    velY = 0;
    color = "red";

    draw = () => {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, scale, scale);
    }

    update = () => {
        this.x += this.velX;
        this.y += this.velY;
    }
}

const swimmer = new Swimmer();

class Enemy {
    constructor() {
        this.create();
    }
    width = scale;
    height = scale;
    color = "white";
    x = (Math.floor(Math.random() * columns - 1) + 1) * scale;
    y = 0;
    velY = scale / 8;
    create = () => {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };
    update = () => {
        this.y += this.velY;
    };
}

let enemies = [];
let startGame;
let moveEnemies;


function checkCollision() {
    enemies.forEach((el) => {
        const topEnemy = el.y - el.height / 2
        const bottomEnemy = el.y + el.height / 2
        const swimmerTop = swimmer.y - swimmer.height / 2;
        const swimmerBottom = swimmer.y + swimmer.height / 2;
        
        const leftEnemy = el.x - el.width / 2
        const rightEnemy = el.x + el.width / 2
        const swimmerLeft = swimmer.x - swimmer.width / 2;
        const swimmerRight = swimmer.x + swimmer.width / 2;
        
        if (bottomEnemy > swimmerTop && 
            topEnemy < swimmerBottom &&
            leftEnemy < swimmerRight && 
            rightEnemy > swimmerLeft) {
            moveEnemies.clearInterval;
            clearInterval(1);
            clearInterval(2);;
            getScore();
            getMotivated();
            modalOnGame.classList.add("onGame-modal--active")
        }    
    })
};

function getScore() {
    let score = enemies.length;
    if (!localStorage.getItem('score')){
        localStorage.setItem('score', score)
    }
    else if (localStorage.getItem('score') > enemies.length) {
        scoreOnGame.innerHTML = `Twój wynik to: ${score}`
    } else {
        localStorage.setItem('score', score)
        scoreOnGame.innerHTML = `Twój wynik to: ${score}`
    }   
}

function getMotivated() {
    if (enemies.length > 1 && enemies.length < 40) {
        motivationText.innerHTML = 'Super, tak trzymaj a dopłyniesz na Hel!'
    } else if (enemies.length >= 40 && enemies.length < 100) {
        motivationText.innerHTML = 'Wow! Dobrze Ci idzie! Płyń dalej!'
    } else if (enemies.length >= 100) {
        motivationText.innerHTML = 'Fantastycznie! Już widać Hel na horyzoncie!'
    }
}

function newEnemies() {
    startGame = setInterval(() => {
        enemies.push(new Enemy);
        enemies.push(new Enemy);
        checkCollision();
        if (enemies.length > 20) {
            enemies.push(new Enemy);
        }
        if (enemies.length > 40) {
            enemies.push(new Enemy);
        }
    }, 2000);
}

function moving() {
    moveEnemies = setInterval(() => {
        checkCollision();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        swimmer.draw();
        swimmer.update();
        enemies.forEach(el => {
            el.create();
            el.update();
        })
    }, 100);
}

startButton.addEventListener("click", () => {
    clearInterval(startGame);
    clearInterval(moveEnemies);
    enemies = [];
    enemies.push(new Enemy);
    newEnemies();
    moving();
});



window.addEventListener('keydown', function (event) {
    event.preventDefault();
    if (event.key === "ArrowLeft") { 
        if (swimmer.x > 0) {
            swimmer.velX = (scale * -1) / 4
        } else if (swimmer.x === 0) {
            swimmer.velX = 0
        } 
    }
    if (event.key === "ArrowRight") {
        if (swimmer.x < 600) {
            swimmer.velX = (scale * 1) / 4
        } else if (swimmer.x === 600) {
            swimmer.velX = 0
        }
    }
    if (event.key === "ArrowUp") {
        if (swimmer.y > 0) {
            swimmer.velY = (scale * -1) / 4
        } else if (swimmer.y === 0) {
            swimmer.velY = 0
        }
    }
    if (event.key === "ArrowDown") {
        if (swimmer.y < 600) {
            swimmer.velY = (scale * 1) / 4;
        } else if (swimmer.y === 600) {
            swimmer.velY = 0
        }
    }
})
/window.addEventListener('keyup', function (event) {
    event.preventDefault();
    if (event.key === "ArrowLeft") {
        swimmer.velX = 0;
    } else if (event.key === "ArrowRight") {
        swimmer.velX = 0;
    } else if (event.key === "ArrowUp") {
        swimmer.velY = 0;
    } else if (event.key === "ArrowDown") {
        swimmer.velY = 0;
    }
}) 

//////MODAL

const btnPlayAgain = document.querySelector(".onGame-modal__btn--play-again")

btnPlayAgain.addEventListener('click', ( ) => {
    modalOnGame.classList.remove(".onGame-modal--active")
})






