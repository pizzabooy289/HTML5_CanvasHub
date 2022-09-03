const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');


var circle = {
    x:100, //x-axis starting position
    y:0, //y-axis starting position
    size:30, //The radius of the circle
    dx:5, //Distance the circle is going to move
    dy:4 //Not used
};

function drawCircle(){

    ctx.beginPath();

    //Drawing a circle
    ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI*2);

    ctx.fillStyle = 'purple';

    ctx.fill();

};

function updateScreen(){

    //Clear the screen
    ctx.clearRect(0,0, canvas.width, canvas.height);

    drawCircle();

    //Changing the x and y and position the the circle
    circle.x += circle.dx;
    circle.y += circle.dy;

    //Detect side walls
    if( circle.x + circle.size > canvas.width){

        circle.dx*=-1;
    }

    //Calls the updateScreen() method at certain speed  
    requestAnimationFrame(updateScreen);
};

updateScreen();




