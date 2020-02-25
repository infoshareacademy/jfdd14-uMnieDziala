const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const scale = 50;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

class Enemy {
    constructor () {
        this.create();
    }
    width = scale;
    height = scale;
    color = "white";
    x = (Math.floor(Math.random()*columns - 1) + 1)*scale;
    y = 0;
    velY = 0;
    create = () => {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };
    update = () => {
        this.y += this.velY;
    };
}

const mewa = new Enemy;