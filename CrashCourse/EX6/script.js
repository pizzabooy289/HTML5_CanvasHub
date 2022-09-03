const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(50,50);//Starting Point
ctx.lineTo(150,50);
ctx.lineTo(100,200);
ctx.lineTo(50,50);
ctx.closePath();

ctx.fillStyle = 'coral';
ctx.fill();




