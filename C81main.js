canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");
color = "red";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40, 0, 2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", draw);
function draw(e) {
    color = document.getElementById("usercolor").value;
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    console.log("mouse_x =" + mouse_x + "mouse_y = " + mouse_y)
    ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(mouse_x, mouse_y, 40, 0, 2*Math.PI);
ctx.stroke(); 
}
function clearArea(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}