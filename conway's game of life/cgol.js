var vyska;
var sirka;
var pole = [];
var gameRunning = false;

function gotoMain() {
  window.location = "../index.html";
}

function generateTable() {
  vyska = document.forms["input"]["vyska"].value;
  sirka = document.forms["input"]["sirka"].value;
  var table = document.getElementById("table");
  table.innerHTML = "";
  table.style.border = "2px solid #4caf50";
  for (var i = 0; i < vyska; i++) {
    pole[i] = [];
    var row = table.insertRow(i);
    for (var ii = 0; ii < sirka; ii++) {
      pole[i][ii] = row.insertCell(ii);
      pole[i][ii].innerHTML =
        "<div class=policko id=" +
        i +
        "," +
        ii +
        " onclick=toggleAlive(" +
        "pole[" +
        i +
        "][" +
        ii +
        "]" +
        "," +
        i +
        "," +
        ii +
        ")></div>";
      pole[i][ii].alive = false;
    }
  }
  document.getElementById("startButtonDiv").innerHTML =
    "<button class=btn onclick=startGame()>Začít Hru</button>" +
    "<button class=btn id=pauseButton onclick=pauseGame()>Zastavit Hru</button>";
}

function toggleAlive(policko, i, ii) {
  if (!gameRunning) {
    if (policko.alive) {
      policko.alive = false;
      document.getElementById(i + "," + ii).style.backgroundColor = "black";
    } else {
      policko.alive = true;
      document.getElementById(i + "," + ii).style.backgroundColor = "white";
    }
  }
}

function pauseGame() {
  if (gameRunning) {
    document.getElementById("pauseButton").innerHTML = "Spustit Hru";
    gameRunning = false;
  } else {
    document.getElementById("pauseButton").innerHTML = "Zastavit Hru";
    gameRunning = true;
  }
}

function startGame() {
  gameRunning = true;
  setInterval(game, 1000 / 5);
}

function game() {
  if (gameRunning) {
    for (var i = 0; i < vyska; i++) {
      for (var ii = 0; ii < sirka; ii++) {
        var aliveCount = 0;
        try {
          if (pole[i + 1][ii - 1].alive) {
            aliveCount++;
          }
        } catch (error) {}
        try {
          if (pole[i + 1][ii].alive) {
            aliveCount++;
          }
        } catch (error) {}
        try {
          if (pole[i + 1][ii + 1].alive) {
            aliveCount++;
          }
        } catch (error) {}
        try {
          if (pole[i][ii + 1].alive) {
            aliveCount++;
          }
        } catch (error) {}
        try {
          if (pole[i - 1][ii + 1].alive) {
            aliveCount++;
          }
        } catch (error) {}
        try {
          if (pole[i - 1][ii].alive) {
            aliveCount++;
          }
        } catch (error) {}
        try {
          if (pole[i - 1][ii - 1].alive) {
            aliveCount++;
          }
        } catch (error) {}
        try {
          if (pole[i][ii - 1].alive) {
            aliveCount++;
          }
        } catch (error) {}

        if (pole[i][ii].alive) {
          if (aliveCount < 2 || aliveCount > 3) pole[i][ii].nextTurn = false;
          else pole[i][ii].nextTurn = true;
        } else {
          if (aliveCount == 3) pole[i][ii].nextTurn = true;
          else pole[i][ii].nextTurn = false;
        }
      }
    }

    for (var i = 0; i < vyska; i++) {
      for (var ii = 0; ii < sirka; ii++) {
        if (pole[i][ii].nextTurn) {
          pole[i][ii].alive = true;
          document.getElementById(i + "," + ii).style.backgroundColor = "white";
        } else {
          pole[i][ii].alive = false;
          document.getElementById(i + "," + ii).style.backgroundColor = "black";
        }
      }
    }
  }
}
