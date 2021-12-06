const canvas = document.getElementById('canvas'); 
const image = document.getElementById('source');
const ctx = canvas.getContext('2d');

const Foygo = {
    w: 70,
    h: 70,
    x: 20,
    y: 200,
    speed: 6,
    dx: 5,
    dy: 3
};

function drawFoygo(){
    ctx.drawImage(image, Foygo.x, Foygo.y, Foygo.w, Foygo.h);
}

function clear(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function newPos(){
    Foygo.x += Foygo.dx;
    Foygo.y += Foygo.dy;

    detectWalls();
}

function detectWalls(){
    if(Foygo.x  + Foygo.w > canvas.width || Foygo.x < 0){
        Foygo.dx *= -1;
    }

    if(Foygo.y + Foygo.h > canvas.height || Foygo.y < 0){
        Foygo.dy *= -1;
    }
}

function update(){
    clear();

    drawFoygo();

    newPos();

    requestAnimationFrame(update);
};

update();