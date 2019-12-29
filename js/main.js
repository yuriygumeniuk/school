var canvas = document.getElementById("myCanvas"), 
    context = canvas.getContext("2d");
context.beginPath();
context.moveTo(30, 20);
context.lineTo(100, 80);
context.lineTo(150, 30);
context.closePath();