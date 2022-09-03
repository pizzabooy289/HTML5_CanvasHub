const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

ctx.beginPath();

var centerX = canvas.width /4;
var centerY = canvas.height /4;

ctx.arc(centerX, centerY, 75, 0, Math.PI, false);

ctx.stroke();




