const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const scale = 50;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
const startButton = document.querySelector("button");

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

function newEnemies() {
    startGame = setInterval(() => {
        enemies.push(new Enemy);
        enemies.push(new Enemy);
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
    if (event.key === "ArrowLeft") {
        swimmer.velY = 0;
        swimmer.velX = (scale * -1) / 4;
    } else if (event.key === "ArrowRight") {
        swimmer.velY = 0;
        swimmer.velX = (scale * 1) / 4;
    } else if (event.key === "ArrowUp") {
        swimmer.velX = 0;
        swimmer.velY = (scale * -1) / 4;
    } else if (event.key === "ArrowDown") {
        swimmer.velX = 0;
        swimmer.velY = (scale * 1) / 4;
    }
})