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
            console.log("kolizja");

            moveEnemies.clearInterval;
            clearInterval(1);
            clearInterval(2);
        }    
    })
};


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
            swimmer.velX = (scale * -1) / 4;
        } else if (swimmer.x === 0) {swimmer.velX = 0}
    }
    if (event.key === "ArrowRight" && event.key !== "ArrowLeft") {
        if (swimmer.x < 600) {
            swimmer.velX = (scale * 1) / 4
        } else if (swimmer.x === 600) {
            {swimmer.velX = 0}
        }
    }
    if (event.key === "ArrowUp") {
        if (swimmer.y > 0) {
            swimmer.velY = (scale * -1) / 4;
        } else if (swimmer.y === 0) {swimmer.velY = 0}
    }
    if (event.key === "ArrowDown") {
        if (swimmer.y < 600) {
            swimmer.velY = (scale * 1) / 4;
        } else if (swimmer.y === 600) {
            {swimmer.velY = 0}
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

///////////////////////COLLISION


/* 
function collision() {
    setInterval(() => {
        for(let i = 0; i < enemies.length; i++) {
            if (swimmer.x === enemies[i].x && swimmer.y === enemies[i].y) {
                console.log("kolizja")
        }
        }
    },1000)
   
}
 */

/* function collision() {
    setInterval(() => {
        for(let i = 0; i < enemies.length; i++) {
            if (swimmer.x === enemies[i].x && swimmer.y === enemies[i].y) {
                console.log("kolizja")
        }
        }
    },1000)
   
}
 */



