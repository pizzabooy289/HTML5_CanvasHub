const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

const image = document.getElementById("source");

var player = {
    w:60, //width
    h: 80, //height
    x: 20,
    y: 200,
    speed:5,
    dx: 0,
    dy:0
};

function drawPlayer(){

    ctx.drawImage(image, player.x, player.y, player.w, player.h);

};

function clearScreen(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

};

function newPos(){

    player.x += player.dx;
    player.y += player.dy;

    detectWalls();

};

function detectWalls(){

    //Left wall
    if(player.x <0){
        player.x=0;
    };

    //Right wall
    if(player.x + player.w > canvas.width){
        player.x = canvas.width - player.w;
    }

    //Top wall
    if(player.y <0){
        player.y=0;
    };

    //Bottom wall
    if(player.y + player.h > canvas.height){
        player.y = canvas.height - player.h;
    }

};

function updateScreen(){

    clearScreen();
    drawPlayer();


    newPos()

    requestAnimationFrame(updateScreen);

};

function moveRight(){
    player.dx = player.speed;
};

function moveLeft(){
    player.dx = -player.speed;
};

function moveUp(){
    player.dy = -player.speed;
};

function moveDown(){
    player.dy = player.speed;
};

function keyDown(e){
    console.log(e.key);

    if (e.key === 'ArrowRight' || e.key === 'Right'){
        moveRight();
    }else if (e.key === 'ArrowLeft' || e.key === 'Left'){
        moveLeft();
    } else if (e.key === 'ArrowUp' || e.key === 'Up'){
        moveUp();
    } else if (e.key === 'ArrowDown' || e.key === 'Down'){
        moveDown();
    }

};

function keyUp(e){
    console.log(e.key);

    if(
        e.key === 'ArrowRight' ||
        e.key === 'Right' ||
        e.key === 'ArrowLeft' || 
        e.key === 'Left' ||
        e.key === 'ArrowUp' || 
        e.key === 'Up' ||
        e.key === 'ArrowDown' || 
        e.key === 'Down'

    ){
        player.dx = 0;
        player.dy = 0;
    };

};


updateScreen();

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp)








