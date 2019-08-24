var canv = document.getElementById("canv");
var ctx = canv.getContext("2d");
canv.height = 700;
canv.width = 700;
ctx.fillStyle = "white";
xpos = canv.width / 2;
(left = false),
  (up = false),
  (right = false),
  (down = false),
  (space = false),
  (shots = []),
  (enemies = []),
  (CDCount = 0),
  (score = 0),
  (gameRunning = true);
canv.style.border = "2px solid #4caf50";
document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

setInterval(gameStarter, 1000 / 60);
setInterval(enemySpawn, 3000);

function keyDown(evt) {
  switch (evt.keyCode) {
    case 32:
      space = true;
      break;
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

function keyUp(evt) {
  switch (evt.keyCode) {
    case 32:
      space = false;
      break;
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

function enemySpawn() {
  enemies.push({
    xpos: Math.floor(Math.random() * 700),
    ypos: 0,
    id: enemies.length,
    type: 1
  });
}

function gameStarter() {
  if (gameRunning) game();
}

function game() {
  if (left) {
    if (xpos != 0) {
      xpos -= 5;
    }
  }
  if (right) {
    if (xpos != 700) {
      xpos += 5;
    }
  }

  if (space) {
    shoot();
  }

  function shoot() {
    if (CDCount == 0) {
      shots.push({
        xpos: xpos,
        ypos: 650,
        id: shots.length
      });
      CDCount = 60;
    }
  }

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 700, 700);
  ctx.beginPath();
  ctx.moveTo(xpos + 30, canv.height);
  ctx.lineTo(xpos, canv.width - 50);
  ctx.lineTo(xpos - 30, canv.height);
  ctx.lineTo(xpos + 30, canv.height);
  ctx.closePath();
  ctx.fillStyle = "#4caf50";
  ctx.fill();

  for (index in shots) {
    if (shots[index] == undefined) continue;
    shots[index].ypos -= 10;
    ctx.fillStyle = "red";
    ctx.fillRect(shots[index].xpos - 3, shots[index].ypos, 6, 15);
    if (shots[index].ypos < 0) {
    }
  }

  for (index in shots) {
    if (shots[index] == undefined) continue;
    for (index2 in enemies) {
      if (enemies[index2] == undefined) continue;
      if (
        shots[index].ypos - enemies[index2].ypos <= 24 &&
        shots[index].xpos - enemies[index2].xpos <= 12 &&
        shots[index].xpos - enemies[index2].xpos >= -12
      ) {
        shots[index] = undefined;
        enemies = [];
        score++;
      }
    }
  }

  for (index in enemies) {
    if (enemies[index] != undefined) {
      if (enemies[index].type == 1) {
        enemies[index].ypos += 4;
        ctx.fillStyle = "yellow";
        ctx.fillRect(enemies[index].xpos - 12, enemies[index].ypos, 24, 24);
      }
    }
    try {
      if (enemies[index].ypos >= 650) {
        alert("You lost! Total score: " + score);
        gameRunning = false;
      }
    } catch (error) {}
  }

  if (CDCount == 0) {
  } else CDCount--;
}
