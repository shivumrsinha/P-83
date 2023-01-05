var mouseEvent = "empty";
var color = "pink";
var width = 5;
var canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
var lastPostionOfX, lastPositionOfY;

canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown(e) {
    mouseEvent = "mousedown"
    width = document.getElementById("input1").value;
    color = document.getElementById("input2").value;
}

canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp(e) {
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", myMouseLeave);
function myMouseLeave(e) {
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e) {
    currentPositionOfX = e.clientX - canvas.offsetLeft;
    currentPositionOfY = e.clientY - canvas.offsetTop;
    if (mouseEvent = "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(lastPostionOfX, lastPositionOfY);
        ctx.lineTo(currentPositionOfX, currentPositionOfY);
        lastPostionOfX = currentPositionOfX;
        lastPositionOfY = currentPositionOfY;

    }
}

canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e) {
    lastPositionOfX = e.touches[0].clientX - canvas.offsetLeft;
    lastPositionOfY = e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e) {
    currentPositionOfX = e.touches[0].clientX - canvas.offsetLeft;
    currentPositionOfY = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.moveTo(lastPostionOfX, lastPositionOfY);
    ctx.lineTo(currentPositionOfX, currentPositionOfY);
    lastPostionOfX = currentPositionOfX;
    lastPositionOfY = currentPositionOfY;
}




