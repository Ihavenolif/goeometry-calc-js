left = up = right = down = false;
var XPos = 720;
var YPos = 405;
var velocity = 5;

function gotoMain() {
  window.location = "../index.html";
}

function keyPush(evt) {
  switch (evt.keyCode) {
    case 37:
      left = true;
      break;
    case 38:
      up = true;
      break;
    case 39:
      right = true;
      break;
    case 40:
      down = true;
      break;
  }
}
function keyRelease(evt) {
  switch (evt.keyCode) {
    case 37:
      left = false;
      break;
    case 38:
      up = false;
      break;
    case 39:
      right = false;
      break;
    case 40:
      down = false;
      break;
  }
}
function move() {
  if (left || up || right || down) {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canv.width, canv.height);
    if (left) moveLeft();
    if (up) moveUp();
    if (right) moveRight();
    if (down) moveDown();
  }
}

function moveLeft() {
  if (XPos <= 0) {
    XPos = canv.width;
  } else XPos -= velocity;
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(XPos, YPos, 30, 0, 2 * Math.PI);
  ctx.fill();
}

function moveUp() {
  if (YPos <= 0) YPos = canv.height;
  else YPos -= velocity;
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(XPos, YPos, 30, 0, 2 * Math.PI);
  ctx.fill();
}

function moveRight() {
  if (XPos >= canv.width) XPos = 0;
  else XPos += velocity;
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(XPos, YPos, 30, 0, 2 * Math.PI);
  ctx.fill();
}

function moveDown() {
  if (YPos >= canv.height) YPos = 0;
  else YPos += velocity;
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(XPos, YPos, 30, 0, 2 * Math.PI);
  ctx.fill();
}

window.onload = function() {
  document.addEventListener("keydown", keyPush);
  document.addEventListener("keyup", keyRelease);
  canv = document.getElementById("cvs");
  ctx = canv.getContext("2d");
  setInterval(move, 1000 / 60);
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canv.width, canv.height);
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(canv.width / 2, canv.height / 2, 30, 0, 2 * Math.PI);
  ctx.fill();
};
