pistolLevel = 1;
pistolUpgradeCost = 50;
pistolRechargeTime = 1;
bulletLevel = 1;
bulletUpgradeCost = 50;
bulletWidth = 4;
damageLevel = 1;
damageUpgradeCost = 100;
enemySpawnTime = 180;
spawnCD = 180;
laserPointer = false;
weaponDamage = 15;

document.addEventListener("keydown", keyDown2)

function keyDown2(evt) {
  switch(evt.keyCode){
    case 49:
      upgradePistol()
      break
    case 50:
      upgradeBullet()
      break
    case 51:
      upgradeDamage()
      break
    case 52:
      buyLaserPointer()
      break
  }
}

function game(){
  if (left && xpos >= 0) {
    xpos -= 6;
  }
  if (right && xpos <= 700) {
    xpos += 6;
  }

  if (space) {
    shoot();
  }

  if(CDCount>0) CDCount--;

  for (x of shots){
    x.ypos -= 10;
  }

  for (x of enemies){
    switch(x.type){
      case 1:
        x.ypos += 3
        break;
      case 2:
        x.ypos += 2
        break;
    }
  }

  for(shotId of shots){
    if(collidesWithY(shotId, {height: 0, ypos: 0})) shotId.alive = 0; //WHENEVER A SHOT EXITS THE MAP
    for(enemyId of enemies){
      if(enemyId.ypos>=670){ //WHENEVER ENEMY HITS THE PLAYER
        enemyId.alive = 0;
        switch(enemyId.type){
          case 1:
            health -= 10;
            break;
          case 2:
            health -= 20;
            break;
        }
        document.getElementById("health").innerHTML = "Health: " + health
      }
      if(collidesWith(shotId,enemyId)) { //WHENEVER COLLIDES WITH BULLET
        if(enemyId.health<weaponDamage){ //IF HEALTH IS LOWER THAN WEAPON DAMAGE -> KILL
          shotId.alive = 0
          enemyId.alive = 0
          switch(enemyId.type){
            case 1:
              money += 5;
              score += 5;
              break;
            case 2:
              money += 15;
              score += 15;
              break;
          }
          document.getElementById("money").innerHTML = "Money: " + money
        } else{
          enemyId.health -= weaponDamage;
          shotId.alive = 0;
        }
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

  enemySpawn()
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
  if(spawnCD <= 0){
    enemyType = Math.floor(Math.random() * 100);
    if (enemyType > 75){
      enemies.push({
        xpos: Math.floor(Math.random() * 700),
        ypos: 0,
        width: 30,
        height: 30,
        id: enemies.length,
        type: 2,
        alive: 1,
        health: 20
      })
    } else if(enemyType <= 75){
      enemies.push({
        xpos: Math.floor(Math.random() * 700),
        ypos: 0,
        width: 20,
        height: 20,
        id: enemies.length,
        type: 1,
        alive: 1,
        health: 10
      });
    }

    enemySpawnTime *= 0.995
    spawnCD = enemySpawnTime

  }
  spawnCD--
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
        pistolUpgradeCost = "MAX" //R5
        document.getElementById("pistolIcon").src = "pistolIconMax.png"
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
        bulletUpgradeCost = "MAX" //R5
        document.getElementById("bulletIcon").src = "bulletIconMax.png"
        break
    }
    bulletWidth++
    document.getElementById("money").innerHTML = "Money: " + money
    document.getElementById("bulletLevel").innerHTML = "Level " + bulletLevel
    document.getElementById("bulletUpgradeCost").innerHTML = "$" + bulletUpgradeCost
    document.getElementById("bulletWidth").innerHTML = "Width:<br>" + bulletWidth + "px"

  }
}

function upgradeDamage() { 
  if(damageLevel<5 && money>=damageUpgradeCost){
    money-= damageUpgradeCost
    damageLevel++
    switch(damageUpgradeCost){
      case 100:
        damageUpgradeCost = 150;
        weaponDamage += 5
        break
      case 150:
        damageUpgradeCost = 200
        weaponDamage += 7
        break
      case 200:
        damageUpgradeCost = "MAX"
        weaponDamage += 10
        document.getElementById("bulletDamageIcon").src = "bulletDamageIconMax.png"
        break
    }
    document.getElementById("money").innerHTML = "Money: " + money
    document.getElementById("bulletDamageLevel").innerHTML = "Level " + damageLevel
    document.getElementById("bulletDamageUpgradeCost").innerHTML = "$" + damageUpgradeCost
    document.getElementById("bulletDamage").innerHTML = "Damage:<br>" + weaponDamage
  }
}

function buyLaserPointer(){
  if(money>=100){
    laserPointer = true;
    money -= 100
  }
  document.getElementById("scopeIcon").src = "scopeIconPurchased.png"
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
    switch(index.type){
      case 1:
        ctx.fillStyle = "yellow";
        ctx.fillRect(index.xpos - 10, index.ypos, 20, 20);
        break;
      case 2:
        ctx.fillStyle = "blue";
        ctx.fillRect(index.xpos - 15, index.ypos, 30, 30);
        break;
    }
  }

  if(laserPointer){
    ctx.strokeStyle = "#ff5900";
    ctx.beginPath();
    ctx.moveTo(xpos, 670)
    ctx.lineTo(xpos, 0)
    ctx.stroke();
  }
}

function updateTime() {
  if (gamerunning) {
    inc++;
    sec = inc;
    if (sec == 60) {
      sec -= 60;
      inc -= 60;
      min++;
    }
    if (min.toString().length == 1) {
      min = "0" + min;
    }
    if (sec.toString().length == 1) {
      sec = "0" + sec;
    }

    document.getElementById("cas").innerHTML = min + ":" + sec;
  }
}

setInterval(() => {
  if(gamerunning) game()
}, 1000/60);
setInterval(updateTime, 1000);