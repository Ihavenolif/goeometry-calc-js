var direction = null;
var XPos = 950;
var YPos = 475;
var velocity = 5;

function keyPush(evt) {
  switch (evt.keyCode) {
    case 37:
      direction = "L";
      break;
    case 38:
      direction = "U";
      break;
    case 39:
      direction = "R";
      break;
    case 40:
      direction = "D";
      break;
  }
}
function keyRelease(evt) {
  switch (evt.keyCode) {
    case 37:
      direction = null;
      break;
    case 38:
      direction = null;
      break;
    case 39:
      direction = null;
      break;
    case 40:
      direction = null;
      break;
  }
}
function move() {
  switch (direction) {
    case null:
      break;
    case "L":
      if (XPos == 0) {
        XPos = 1900;
      } else {
        XPos -= velocity;
      }
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canv.width, canv.height);
      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.arc(XPos, YPos, 30, 0, 2 * Math.PI);
      ctx.fill();
      break;
    case "U":
      if (YPos == 0) {
        YPos = 950;
      } else {
        YPos -= velocity;
      }
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canv.width, canv.height);
      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.arc(XPos, YPos, 30, 0, 2 * Math.PI);
      ctx.fill();
      break;
    case "R":
      if (XPos == 1900) {
        XPos = 0;
      } else {
        XPos += velocity;
      }
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canv.width, canv.height);
      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.arc(XPos, YPos, 30, 0, 2 * Math.PI);
      ctx.fill();
      break;
    case "D":
      if (YPos == 950) {
        YPos = 0;
      } else {
        YPos += velocity;
      }
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canv.width, canv.height);
      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.arc(XPos, YPos, 30, 0, 2 * Math.PI);
      ctx.fill();
      break;
  }
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
  ctx.arc(950, 475, 30, 0, 2 * Math.PI);
  ctx.fill();
};
