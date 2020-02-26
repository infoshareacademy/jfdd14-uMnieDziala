const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const scale = 50;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
const startButton = document.querySelector("button");

class Enemy {
    constructor () {
        this.create();
    }
    width = scale;
    height = scale;
    color = ctx.createPattern(document.getElementById("seagull"), "repeat");
    x = (Math.floor(Math.random()*columns - 1) + 1)*scale;
    y = 0;
    velY = scale;
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

function newEnemies () {
    startGame = setInterval ( () => {
        enemies.push(new Enemy);
        enemies.push(new Enemy);
        if( enemies.length > 20 ){
            enemies.push(new Enemy);
        }
        if( enemies.length > 40 ){
            enemies.push(new Enemy);
        }
    }, 2800 );
}

function moving () {
    moveEnemies = setInterval ( () => {
        console.log(enemies);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        enemies.forEach( el => {
            el.create();
            el.update();
        } )

    }, 700 );
}

startButton.addEventListener("click", () => {
    clearInterval(startGame);
    clearInterval(moveEnemies);
    enemies = [];
    enemies.push(new Enemy);
    newEnemies();
    moving();
} );