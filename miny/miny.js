var vyska;
var sirka;
var pocetMin;
var pocetZivotu;
var pole = [];
var mode = "Cursor";
var poziceMin = [];
var odhaleneMiny = 0;
var oznaceneMiny = 0;
var gameRunning = false;
var lost = false;

function activateCursor() {
  mode = "Cursor";
  document.getElementById("cursor").src = "cursorActive.png";
  document.getElementById("flag").src = "flag.jpg";
}

function activateFlag() {
  mode = "Flag";
  document.getElementById("cursor").src = "cursor.png";
  document.getElementById("flag").src = "flagActive.jpg";
}

function gotoMain() {
  window.location = "../index.html";
}

function odhaleni(policko, i, ii, final = false) {
  if (mode == "Cursor" && lost == false) {
    switch (policko.cislo) {
      case 0:
        odhaleniNuly(i, ii);
        break;
      case "M":
        document.getElementById(i + "," + ii).innerHTML =
          "<img src=exploded.jpg width=50px height=50px>";
        if (pocetZivotu <= 1) {
          alert(
            "Boom! You managed to lose in " +
              document.getElementById("cas").innerHTML +
              "!"
          );
          gameRunning = false;
          lost = true;
          sec = 0;
          min = 0;
        } else {
          pocetZivotu--;
        }
        break;
      case 1:
        document.getElementById(i + "," + ii).innerHTML = "1";
        document.getElementById(i + "," + ii).style.color = "#4d91ff";
        break;
      case 2:
        document.getElementById(i + "," + ii).innerHTML = "2";
        document.getElementById(i + "," + ii).style.color = "red";
        break;
      case 3:
        document.getElementById(i + "," + ii).innerHTML = "3";
        document.getElementById(i + "," + ii).style.color = "yellow";
        break;
      case 4:
        document.getElementById(i + "," + ii).innerHTML = "4";
        document.getElementById(i + "," + ii).style.color = "green";
        break;
    }
    policko.odhaleny = true;
  } else if (mode == "Flag" && lost == false) {
    if (policko.flag == false) {
      policko.flag = true;
      document.getElementById(i + "," + ii).innerHTML =
        "<img src=flag.jpg width=50px height=50px>";
      oznaceneMiny++;
    } else {
      policko.flag = false;
      document.getElementById(i + "," + ii).innerHTML = "";
      oznaceneMiny--;
    }
  }

  for (var i = 0; i < vyska; i++) {
    for (var ii = 0; ii < sirka; ii++) {
      if ((pole[i][ii].odhaleny = true)) {
        odhaleneMiny++;
      }
    }
  }

  /*if(odhaleneMiny == vyska * sirka){
        alert("Congratulations! You Won!");
    }*/

  if (oznaceneMiny == pocetMin) {
    var index = 0;
    for (var i = 0; i < vyska; i++) {
      for (var ii = 0; ii < sirka; ii++) {
        if (pole[i][ii].cislo == "M" && pole[i][ii].flag == true) {
          index++;
        }
      }
    }
    if (index == pocetMin) {
      alert(
        "Congratulations! You finished the game in " +
          document.getElementById("cas").innerHTML +
          "!"
      );
      gameRunning = false;
      sec = 0;
      min = 0;
    }
  }
}

function odhaleniFinal() {
  for (var i = 0; i < vyska; i++) {
    for (var ii = 0; ii < sirka; ii++) {
      switch (pole[i][ii].cislo) {
        case "M":
          pole[i][ii].innerHTML =
            "<img src=exploded.jpg width=50px height=50px>";
        case 0:
          pole[i][ii].innerHTML = "";
          pole[i][ii].style.backgroundColor = "white";
        case 1:
          pole[i][ii].innerHTML = "1";
          pole[i][ii].style.color = "#4d91ff";
        case 2:
          pole[i][ii].innerHTML = "2";
          pole[i][ii].style.color = "red";
        case 3:
          pole[i][ii].innerHTML = "3";
          pole[i][ii].style.color = "yellow";
        case 4:
          pole[i][ii].innerHTML = "1";
          pole[i][ii].style.color = "green";
      }
    }
  }
}

function odhaleniNuly(i, ii) {
  document.getElementById(i + "," + ii).innerHTML = "";
  document.getElementById(i + "," + ii).style.backgroundColor = "white";
  try {
    if (pole[i + 1][ii - 1].cislo == 0) {
      pole[i + 1][ii - 1].cislo = "O";
      odhaleniNuly(i + 1, ii - 1);
    } else {
      switch (pole[i + 1][ii - 1].cislo) {
        case 1:
          document.getElementById(i + 1 + "," + ii - 1).innerHTML = "1";
          document.getElementById(i + 1 + "," + ii - 1).style.color = "#4d91ff";
          break;
        case 2:
          document.getElementById(i + 1 + "," + ii - 1).innerHTML = "2";
          document.getElementById(i + 1 + "," + ii - 1).style.color = "red";
          break;
        case 3:
          document.getElementById(i + 1 + "," + ii - 1).innerHTML = "3";
          document.getElementById(i + 1 + "," + ii - 1).style.color = "yellow";
          break;
        case 4:
          document.getElementById(i + 1 + "," + ii - 1).innerHTML = "4";
          document.getElementById(i + 1 + "," + ii - 1).style.color = "green";
          break;
      }
    }
  } catch (error) {}
  try {
    if (pole[i + 1][ii].cislo == 0) {
      pole[i + 1][ii].cislo = "O";
      odhaleniNuly(i + 1, ii);
    } else {
      switch (pole[i + 1][ii].cislo) {
        case 1:
          document.getElementById(i + 1 + "," + ii).innerHTML = "1";
          document.getElementById(i + 1 + "," + ii).style.color = "#4d91ff";
          break;
        case 2:
          document.getElementById(i + 1 + "," + ii).innerHTML = "2";
          document.getElementById(i + 1 + "," + ii).style.color = "red";
          break;
        case 3:
          document.getElementById(i + 1 + "," + ii).innerHTML = "3";
          document.getElementById(i + 1 + "," + ii).style.color = "yellow";
          break;
        case 4:
          document.getElementById(i + 1 + "," + ii).innerHTML = "4";
          document.getElementById(i + 1 + "," + ii).style.color = "green";
          break;
      }
    }
  } catch (error) {}
  try {
    if (pole[i + 1][ii + 1].cislo == 0) {
      pole[i + 1][ii + 1].cislo = "O";
      odhaleniNuly(i + 1, ii + 1);
    } else {
      switch (pole[i + 1][ii + 1].cislo) {
        case 1:
          document.getElementById(i + 1 + "," + ii + 1).innerHTML = "1";
          document.getElementById(i + 1 + "," + ii + 1).style.color = "#4d91ff";
          break;
        case 2:
          document.getElementById(i + 1 + "," + ii + 1).innerHTML = "2";
          document.getElementById(i + 1 + "," + ii + 1).style.color = "red";
          break;
        case 3:
          document.getElementById(i + 1 + "," + ii + 1).innerHTML = "3";
          document.getElementById(i + 1 + "," + ii + 1).style.color = "yellow";
          break;
        case 4:
          document.getElementById(i + 1 + "," + ii + 1).innerHTML = "4";
          document.getElementById(i + 1 + "," + ii + 1).style.color = "green";
          break;
      }
    }
  } catch (error) {}
  try {
    if (pole[i][ii + 1].cislo == 0) {
      pole[i][ii + 1].cislo = "O";
      odhaleniNuly(i, ii + 1);
    } else {
      switch (pole[i][ii + 1].cislo) {
        case 1:
          document.getElementById(i + "," + ii + 1).innerHTML = "1";
          document.getElementById(i + "," + ii + 1).style.color = "#4d91ff";
          break;
        case 2:
          document.getElementById(i + "," + ii + 1).innerHTML = "2";
          document.getElementById(i + "," + ii + 1).style.color = "red";
          break;
        case 3:
          document.getElementById(i + "," + ii + 1).innerHTML = "3";
          document.getElementById(i + "," + ii + 1).style.color = "yellow";
          break;
        case 4:
          document.getElementById(i + "," + ii + 1).innerHTML = "4";
          document.getElementById(i + "," + ii + 1).style.color = "green";
          break;
      }
    }
  } catch (error) {}
  try {
    if (pole[i - 1][ii + 1].cislo == 0) {
      pole[i - 1][ii + 1].cislo = "O";
      odhaleniNuly(i - 1, ii + 1);
    } else {
      switch (pole[i - 1][ii + 1].cislo) {
        case 1:
          document.getElementById(i - 1 + "," + ii + 1).innerHTML = "1";
          document.getElementById(i - 1 + "," + ii + 1).style.color = "#4d91ff";
          break;
        case 2:
          document.getElementById(i - 1 + "," + ii + 1).innerHTML = "2";
          document.getElementById(i - 1 + "," + ii + 1).style.color = "red";
          break;
        case 3:
          document.getElementById(i - 1 + "," + ii + 1).innerHTML = "3";
          document.getElementById(i - 1 + "," + ii + 1).style.color = "yellow";
          break;
        case 4:
          document.getElementById(i - 1 + "," + ii + 1).innerHTML = "4";
          document.getElementById(i - 1 + "," + ii + 1).style.color = "green";
          break;
      }
    }
  } catch (error) {}
  try {
    if (pole[i - 1][ii].cislo == 0) {
      pole[i - 1][ii].cislo = "O";
      odhaleniNuly(i - 1, ii);
    } else {
      switch (pole[i - 1][ii].cislo) {
        case 1:
          document.getElementById(i - 1 + "," + ii).innerHTML = "1";
          document.getElementById(i - 1 + "," + ii).style.color = "#4d91ff";
          break;
        case 2:
          document.getElementById(i - 1 + "," + ii).innerHTML = "2";
          document.getElementById(i - 1 + "," + ii).style.color = "red";
          break;
        case 3:
          document.getElementById(i - 1 + "," + ii).innerHTML = "3";
          document.getElementById(i - 1 + "," + ii).style.color = "yellow";
          break;
        case 4:
          document.getElementById(i - 1 + "," + ii).innerHTML = "4";
          document.getElementById(i - 1 + "," + ii).style.color = "green";
          break;
      }
    }
  } catch (error) {}
  try {
    if (pole[i - 1][ii - 1].cislo == 0) {
      pole[i - 1][ii - 1].cislo = "O";
      odhaleniNuly(i - 1, ii - 1);
    } else {
      switch (pole[i - 1][ii - 1].cislo) {
        case 1:
          document.getElementById(i - 1 + "," + ii - 1).innerHTML = "1";
          document.getElementById(i - 1 + "," + ii - 1).style.color = "#4d91ff";
          break;
        case 2:
          document.getElementById(i - 1 + "," + ii - 1).innerHTML = "2";
          document.getElementById(i - 1 + "," + ii - 1).style.color = "red";
          break;
        case 3:
          document.getElementById(i - 1 + "," + ii - 1).innerHTML = "3";
          document.getElementById(i - 1 + "," + ii - 1).style.color = "yellow";
          break;
        case 4:
          document.getElementById(i - 1 + "," + ii - 1).innerHTML = "4";
          document.getElementById(i - 1 + "," + ii - 1).style.color = "green";
          break;
      }
    }
  } catch (error) {}
  try {
    if (pole[i][ii - 1].cislo == 0) {
      pole[i][ii - 1].cislo = "O";
      odhaleniNuly(i, ii - 1);
    } else {
      switch (pole[i][ii - 1].cislo) {
        case 1:
          document.getElementById(i + "," + ii - 1).innerHTML = "1";
          document.getElementById(i + "," + ii - 1).style.color = "#4d91ff";
          break;
        case 2:
          document.getElementById(i + "," + ii - 1).innerHTML = "2";
          document.getElementById(i + "," + ii - 1).style.color = "red";
          break;
        case 3:
          document.getElementById(i + "," + ii - 1).innerHTML = "3";
          document.getElementById(i + "," + ii - 1).style.color = "yellow";
          break;
        case 4:
          document.getElementById(i + "," + ii - 1).innerHTML = "4";
          document.getElementById(i + "," + ii - 1).style.color = "green";
          break;
      }
    }
  } catch (error) {}
}

function generateTable() {
  vyska = document.forms["input"]["vyska"].value;
  sirka = document.forms["input"]["sirka"].value;
  pocetMin = document.forms["input"]["pocetMin"].value;
  pocetZivotu = document.forms["input"]["pocetZivotu"].value;
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
        " onclick=odhaleni(" +
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
    }
  }
  assignMines();
}

function assignMines() {
  for (var i = 0; i < vyska; i++) {
    for (var ii = 0; ii < sirka; ii++) {
      pole[i][ii].cislo = 0;
      pole[i][ii].flag = false;
      pole[i][ii].vyska = i;
      pole[i][ii].sirka = ii;
    }
  }

  for (var iii = 0; iii < pocetMin; iii++) {
    var v = Math.floor(Math.random() * vyska);
    var s = Math.floor(Math.random() * sirka);
    if (pole[v][s].cislo != "M") {
      pole[v][s].cislo = "M";
      poziceMin.push(pole[v][s]);
    } else {
      iii--;
    }
  }
  assignNumbers();
}

function assignNumbers() {
  for (var i = 0; i < vyska; i++) {
    for (var ii = 0; ii < sirka; ii++) {
      var iii = 0;
      if (pole[i][ii].cislo != "M") {
        try {
          if (pole[i + 1][ii - 1].cislo == "M") {
            iii++;
          }
        } catch (error) {}
        try {
          if (pole[i + 1][ii].cislo == "M") {
            iii++;
          }
        } catch (error) {}
        try {
          if (pole[i + 1][ii + 1].cislo == "M") {
            iii++;
          }
        } catch (error) {}
        try {
          if (pole[i][ii + 1].cislo == "M") {
            iii++;
          }
        } catch (error) {}
        try {
          if (pole[i - 1][ii + 1].cislo == "M") {
            iii++;
          }
        } catch (error) {}
        try {
          if (pole[i - 1][ii].cislo == "M") {
            iii++;
          }
        } catch (error) {}
        try {
          if (pole[i - 1][ii - 1].cislo == "M") {
            iii++;
          }
        } catch (error) {}
        try {
          if (pole[i][ii - 1].cislo == "M") {
            iii++;
          }
        } catch (error) {}
        pole[i][ii].cislo = iii;
      }
    }
  }
  gameRunning = true;
  minStart = new Date().getMinutes();
  secStart = new Date().getSeconds();
}

function updateTime() {
  if (gameRunning) {
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

var inc = 0;
var sec = 0;
var min = 0;

setInterval(updateTime, 1000);
