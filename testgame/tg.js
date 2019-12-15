pistolLevel = 1;
pistolUpgradeCost = 50;
pistolRechargeTime = 1;
bulletLevel = 1;
bulletUpgradeCost = 50;
bulletWidth = 4;

function game(){
  if (left) {
    if (xpos != 0) {
      xpos -= 6;
    }
  }
  if (right) {
    if (xpos != 700) {
      xpos += 6;
    }
  }

  if (space) {
    shoot();
  }

  if(CDCount>0) CDCount--;

  for (x of shots){
    x.ypos -= 10;
  }

  for (x of enemies){
    x.ypos += 3;
  }

  for(shotId of shots){
    if(collidesWithY(shotId, {height: 0, ypos: 0})) shotId.alive = 0; //WHENEVER A SHOT EXITS THE MAP
    for(enemyId of enemies){
      if(enemyId.ypos>=670){ //WHENEVER ENEMY HITS THE PLAYER
        enemyId.alive = 0;
        health -= 10;
        document.getElementById("health").innerHTML = "Health: " + health
      }
      if(collidesWith(shotId,enemyId)) { //WHENEVER ENEMY DIES
        shotId.alive = 0;
        enemyId.alive = 0;
        money += 5;
        score += 5;
        document.getElementById("money").innerHTML = "Money: " + money
      }
    }
  }

  shots = filter_array2(shots)
  enemies = filter_array2(enemies)


  if(health <= 0){
    gamerunning = false;
    lost = true;
    alert("You Lost! Total score: " + score)
  }

  draw()
}

function shoot(){
  if (CDCount == 0){
    shots.push({
      xpos: xpos,
      ypos: 650,
      width: bulletWidth,
      height: 20,
      id: shots.length,
      alive: 1
    });
    CDCount = pistolRechargeTime * 60;
  }
}

function enemySpawn() {
  enemies.push({
    xpos: Math.floor(Math.random() * 700),
    ypos: 0,
    width: 20,
    height: 20,
    id: enemies.length,
    type: 1,
    alive: 1
  });
}

function filter_array2(test_array) {
  result = []
  for(x=0;x<test_array.length;x++){
    if(test_array[x].alive == 1){
      result.push(test_array[x])
    }
  }
  return result;
}

function upgradePistol(){
  if(pistolLevel<5 && money>=pistolUpgradeCost){
    money -= pistolUpgradeCost
    pistolLevel++
    switch(pistolUpgradeCost){
      case 50:
        pistolUpgradeCost = 80 //R2
        break
      case 80:
        pistolUpgradeCost = 110 //R3
        break
      case 110:
        pistolUpgradeCost = 150 //R4
        break
      case 150:
        pistolUpgradeCost = 200 //R5
        break
    }
    pistolRechargeTime = Math.round((pistolRechargeTime - 0.1) * 10) / 10 
    document.getElementById("money").innerHTML = "Money: " + money
    document.getElementById("pistolLevel").innerHTML = "Level " + pistolLevel
    document.getElementById("pistolUpgradeCost").innerHTML = "$" + pistolUpgradeCost
    document.getElementById("pistolRecharge").innerHTML = "Recharge:<br>" + pistolRechargeTime + "s"

  }
}

function upgradeBullet(){
  if(bulletLevel<5 && money>=bulletUpgradeCost){
    money -= bulletUpgradeCost
    bulletLevel++
    switch(bulletUpgradeCost){
      case 50:
        bulletUpgradeCost = 80 //R2
        break
      case 80:
        bulletUpgradeCost = 110 //R3
        break
      case 110:
        bulletUpgradeCost = 150 //R4
        break
      case 150:
        bulletUpgradeCost = 200 //R5
        break
    }
    bulletWidth++
    document.getElementById("money").innerHTML = "Money: " + money
    document.getElementById("bulletLevel").innerHTML = "Level " + bulletLevel
    document.getElementById("bulletUpgradeCost").innerHTML = "$" + bulletUpgradeCost
    document.getElementById("bulletWidth").innerHTML = "Width:<br>" + bulletWidth + "px"

  }
}

function draw(){
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

  for(index of shots){
    ctx.fillStyle = "red";
    ctx.fillRect(index.xpos - bulletWidth, index.ypos, bulletWidth * 2, 20);
  }

  for(index of enemies){
    ctx.fillStyle = "yellow";
    ctx.fillRect(index.xpos - 10, index.ypos, 20, 20);
  }
}

setInterval(() => {
  if(gamerunning) game()
}, 1000/60);
setInterval(() => {
  if(gamerunning) enemySpawn()
}, 3000);