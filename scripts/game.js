const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const scale = 50;
const rows = canvas.height / scale;
const columns = canvas.width / scale;
const startButton = document.querySelector("button");

class Swimmer {
    // pozycja głowy
    x = Math.floor(columns/2) * scale ;
    y = 0;
    // prędkosć głowy
    velX = scale * 1;
    velY = 0;
    // kolor węa
    color = "#fff";
    // długość ogona (czyli długość węza nie licząc głowy)
    total = 0;
    // elementy ogona, kazdy z nich ma x i y
    tail = [];


    draw = () => {
        ctx.fillStyle = this.color;
        // Rysujemy kazdy element ogona (bez głowy!)
        this.tail.forEach(item => ctx.fillRect(item.x, item.y, scale, scale));
        // Rysujemy głowę
        ctx.fillRect(this.x, this.y, scale, scale);
    }

    update = () => {
        // Kazdemu elementowi ogona przypisujemy pozycję następnego elementu ogona (od końcówki do początku ogona, ale od początku do końcówki tablicy!)
        this.tail.forEach((item, i) => {
            if (i < this.tail.length - 1) {
                this.tail[i] = this.tail[i + 1];
            }
        });

        // Do ostatniego elementu tablicy (element ogona przy głowie), przypisujemy wartość pozycji głowy
        this.tail[this.total - 1] = { x: this.x, y: this.y };

        // Zmieniamy pozycję głowy (teraz juz mozemy, bo została przypisana do części ogona zaraz za głową)
        this.x += this.velX;
        this.y += this.velY;
    }

    changeDir = (btn) => {
        switch (btn) {
            case "w":
                this.velX = 0;
                this.velY = -(scale * 1);
                break;
            case "s":
                this.velX = 0;
                this.velY = scale * 1;
                break;
            case "a":
                this.velX = -(scale * 1);
                this.velY = 0;
                break;
            case "d":
                this.velX = scale * 1;
                this.velY = 0;
                break;
        }
    }
}

const swimmer = new Swimmer();

class Enemy {
    constructor () {
        this.create();
    }
    width = scale;
    height = scale;
    color = "white";
    x = (Math.floor(Math.random()*columns - 1) + 1)*scale;
    y = 0;
    velY = scale/8;
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
    }, 2000 );
}

function moving () {
    moveEnemies = setInterval ( () => {
        console.log(enemies);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        enemies.forEach( el => {
            el.create();
            el.update();
            swimmer.update();
        } )

    }, 100 );
}

<<<<<<< HEAD
function setup() {
    // Dodanie event listenera na wciśnięcie przycisku
    window.addEventListener("keydown", event => swimmer.changeDir(event.key));

    // Nasza "klatka" gry, elementy które mają wykonać się cyklicznie są wkładane tutaj
        window.setInterval(() => {
        swimmer.update();
        swimmer.draw();
    }, 250);
}

newEnemies();
moving();
setup();
=======
startButton.addEventListener("click", () => {
    clearInterval(startGame);
    clearInterval(moveEnemies);
    enemies = [];
    enemies.push(new Enemy);
    newEnemies();
    moving();
} );
>>>>>>> 42a972172c89f43baf3814978fddfcbd7a2d0d1c
