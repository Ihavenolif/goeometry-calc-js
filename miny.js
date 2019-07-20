var vyska;
var sirka;
var pocetMin;
var pocetZivotu;
var pole = [];

function gotoMain(){
    window.location = "../index.html";
}

function odhaleni(policko, i, ii){
    if(document.forms["mode"]["mode"].value == "Cursor"){
        switch(policko.cislo){
            case 0:
                odhaleniNuly(i, ii);
                break;
            case "M":
                document.getElementById(i + "," + ii).innerHTML = "M";
                if(pocetZivotu <= 1){
                    alert("Boom! You Lost!");
                }else{
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
    }else {
        policko.cislo = "F";
        document.getElementById(i + "," + ii).innerHTML = "F";
    }
}

function odhaleniNuly(i, ii){
    document.getElementById(i + "," + ii).style.backgroundColor = "white";
    try {
        if(pole[i+1][ii-1].cislo == 0){
            pole[i+1][ii-1].cislo = "O";
            odhaleniNuly(i+1, ii-1);
        }else{
            switch(pole[i+1][ii-1].cislo){
                case 1:
                    document.getElementById(i+1 + "," + ii-1).innerHTML = "1";
                    document.getElementById(i+1 + "," + ii-1).style.color = "#4d91ff";
                    break;
                case 2:
                    document.getElementById(i+1 + "," + ii-1).innerHTML = "2";
                    document.getElementById(i+1 + "," + ii-1).style.color = "red";
                    break;
                case 3:
                    document.getElementById(i+1 + "," + ii-1).innerHTML = "3";
                    document.getElementById(i+1 + "," + ii-1).style.color = "yellow";
                    break;
                case 4:
                    document.getElementById(i+1 + "," + ii-1).innerHTML = "4";
                    document.getElementById(i+1 + "," + ii-1).style.color = "green";
                    break;
            }            
        }
    } catch (error) {
        
    }
    try {
        if(pole[i+1][ii].cislo == 0){
            pole[i+1][ii].cislo = "O";
            odhaleniNuly(i+1,ii);
        }else{
            switch(pole[i+1][ii].cislo){
                case 1:
                    document.getElementById(i+1 + "," + ii).innerHTML = "1";
                    document.getElementById(i+1 + "," + ii).style.color = "#4d91ff";
                    break;
                case 2:
                    document.getElementById(i+1 + "," + ii).innerHTML = "2";
                    document.getElementById(i+1 + "," + ii).style.color = "red";
                    break;
                case 3:
                    document.getElementById(i+1 + "," + ii).innerHTML = "3";
                    document.getElementById(i+1 + "," + ii).style.color = "yellow";
                    break;
                case 4:
                    document.getElementById(i+1 + "," + ii).innerHTML = "4";
                    document.getElementById(i+1 + "," + ii).style.color = "green";
                    break;
            }         }
    } catch (error) {
        
    }
    try {
        if(pole[i+1][ii+1].cislo == 0){
            pole[i+1][ii+1].cislo = "O";
            odhaleniNuly(i+1,ii+1);
        }else{
            switch(pole[i+1][ii+1].cislo){
                case 1:
                    document.getElementById(i+1 + "," + ii+1).innerHTML = "1";
                    document.getElementById(i+1 + "," + ii+1).style.color = "#4d91ff";
                    break;
                case 2:
                    document.getElementById(i+1 + "," + ii+1).innerHTML = "2";
                    document.getElementById(i+1 + "," + ii+1).style.color = "red";
                    break;
                case 3:
                    document.getElementById(i+1 + "," + ii+1).innerHTML = "3";
                    document.getElementById(i+1 + "," + ii+1).style.color = "yellow";
                    break;
                case 4:
                    document.getElementById(i+1 + "," + ii+1).innerHTML = "4";
                    document.getElementById(i+1 + "," + ii+1).style.color = "green";
                    break;
            }         
        }
    } catch (error) {
        
    }
    try {
        if(pole[i][ii+1].cislo == 0){
            pole[i][ii+1].cislo = "O";
            odhaleniNuly(i,ii+1);
        }else{
            switch(pole[i][ii+1].cislo){
                case 1:
                    document.getElementById(i + "," + ii+1).innerHTML = "1";
                    document.getElementById(i + "," + ii+1).style.color = "#4d91ff";
                    break;
                case 2:
                    document.getElementById(i + "," + ii+1).innerHTML = "2";
                    document.getElementById(i + "," + ii+1).style.color = "red";
                    break;
                case 3:
                    document.getElementById(i + "," + ii+1).innerHTML = "3";
                    document.getElementById(i + "," + ii+1).style.color = "yellow";
                    break;
                case 4:
                    document.getElementById(i + "," + ii+1).innerHTML = "4";
                    document.getElementById(i + "," + ii+1).style.color = "green";
                    break;
            }             
        }
    } catch (error) {
        
    }
    try {
        if(pole[i-1][ii+1].cislo == 0){
            pole[i-1][ii+1].cislo = "O";
            odhaleniNuly(i-1,ii+1);
        }else{
            switch(pole[i-1][ii+1].cislo){
                case 1:
                    document.getElementById(i-1 + "," + ii+1).innerHTML = "1";
                    document.getElementById(i-1 + "," + ii+1).style.color = "#4d91ff";
                    break;
                case 2:
                    document.getElementById(i-1 + "," + ii+1).innerHTML = "2";
                    document.getElementById(i-1 + "," + ii+1).style.color = "red";
                    break;
                case 3:
                    document.getElementById(i-1 + "," + ii+1).innerHTML = "3";
                    document.getElementById(i-1 + "," + ii+1).style.color = "yellow";
                    break;
                case 4:
                    document.getElementById(i-1 + "," + ii+1).innerHTML = "4";
                    document.getElementById(i-1 + "," + ii+1).style.color = "green";
                    break;
            }         
        }
    } catch (error) {
        
    }
    try {
        if(pole[i-1][ii].cislo == 0){
            pole[i-1][ii].cislo = "O";
            odhaleniNuly(i-1,ii);
        }else{
            switch(pole[i-1][ii].cislo){
                case 1:
                    document.getElementById(i-1 + "," + ii).innerHTML = "1";
                    document.getElementById(i-1 + "," + ii).style.color = "#4d91ff";
                    break;
                case 2:
                    document.getElementById(i-1 + "," + ii).innerHTML = "2";
                    document.getElementById(i-1 + "," + ii).style.color = "red";
                    break;
                case 3:
                    document.getElementById(i-1 + "," + ii).innerHTML = "3";
                    document.getElementById(i-1 + "," + ii).style.color = "yellow";
                    break;
                case 4:
                    document.getElementById(i-1 + "," + ii).innerHTML = "4";
                    document.getElementById(i-1 + "," + ii).style.color = "green";
                    break;
            }         
        }
    } catch (error) {
        
    }
    try {
        if(pole[i-1][ii-1].cislo == 0){
            pole[i-1][ii-1].cislo = "O";
            odhaleniNuly(i-1,ii-1);
        } else{
            switch(pole[i-1][ii-1].cislo){
                case 1:
                    document.getElementById(i-1 + "," + ii-1).innerHTML = "1";
                    document.getElementById(i-1 + "," + ii-1).style.color = "#4d91ff";
                    break;
                case 2:
                    document.getElementById(i-1 + "," + ii-1).innerHTML = "2";
                    document.getElementById(i-1 + "," + ii-1).style.color = "red";
                    break;
                case 3:
                    document.getElementById(i-1 + "," + ii-1).innerHTML = "3";
                    document.getElementById(i-1 + "," + ii-1).style.color = "yellow";
                    break;
                case 4:
                    document.getElementById(i-1 + "," + ii-1).innerHTML = "4";
                    document.getElementById(i-1 + "," + ii-1).style.color = "green";
                    break;
            }        
        }   
    } catch (error) {

    }
    try {
        if(pole[i][ii-1].cislo == 0){
            pole[i][ii-1].cislo = "O";
            odhaleniNuly(i,ii-1);
        }else{
            switch(pole[i][ii-1].cislo){
                case 1:
                    document.getElementById(i + "," + ii-1).innerHTML = "1";
                    document.getElementById(i + "," + ii-1).style.color = "#4d91ff";
                    break;
                case 2:
                    document.getElementById(i + "," + ii-1).innerHTML = "2";
                    document.getElementById(i + "," + ii-1).style.color = "red";
                    break;
                case 3:
                    document.getElementById(i + "," + ii-1).innerHTML = "3";
                    document.getElementById(i + "," + ii-1).style.color = "yellow";
                    break;
                case 4:
                    document.getElementById(i + "," + ii-1).innerHTML = "4";
                    document.getElementById(i + "," + ii-1).style.color = "green";
                    break;
            }        
        }
    } catch (error) {
        
    }
}

function generateTable(){
    vyska = document.forms["input"]["vyska"].value;
    sirka = document.forms["input"]["sirka"].value;
    pocetMin = document.forms["input"]["pocetMin"].value;
    pocetZivotu = document.forms["input"]["pocetZivotu"].value;
    var table = document.getElementById("table");   
    table.innerHTML = "";
    for(var i=0;i<vyska;i++){
        pole[i] = [];
        var row = table.insertRow(i);
        for(var ii=0;ii<sirka;ii++){
            pole[i][ii] = row.insertCell(ii);
            pole[i][ii].innerHTML = "<div class=policko id=" + i + "," + ii + " onclick=odhaleni(" + "pole[" + i + "][" + ii + "]" +  "," + i + "," + ii + ")></div>";
        }
    }
    assignMines();
}

function assignMines(){
    for(var i=0;i<vyska;i++){
        for(var ii=0;ii<sirka;ii++){
            pole[i][ii].cislo = 0;
        }
    }

    for(var iii=0;iii<pocetMin;iii++){
        var v = Math.floor(Math.random() * vyska);
        var s = Math.floor(Math.random() * sirka);
        if(pole[v][s].cislo != "M"){
            pole[v][s].cislo = "M";
        } else{
            iii--;
        }
    }
    assignNumbers();
}

function assignNumbers(){
    for(var i=0;i<vyska;i++){
        for(var ii=0;ii<sirka;ii++){           
            var iii=0;
            if(pole[i][ii].cislo != "M"){
                try {
                    if(pole[i+1][ii-1].cislo == "M"){
                        iii++;
                    }
                } catch (error) {
                    
                }
                try {
                    if(pole[i+1][ii].cislo == "M"){
                        iii++;
                    }
                } catch (error) {
                    
                }
                try {
                    if(pole[i+1][ii+1].cislo == "M"){
                        iii++;
                    }
                } catch (error) {
                    
                }
                try {
                    if(pole[i][ii+1].cislo == "M"){
                        iii++;
                    }
                } catch (error) {
                    
                }
                try {
                    if(pole[i-1][ii+1].cislo == "M"){
                        iii++;
                    }
                } catch (error) {
                    
                }
                try {
                    if(pole[i-1][ii].cislo == "M"){
                        iii++;
                    }
                } catch (error) {
                    
                }
                try {
                    if(pole[i-1][ii-1].cislo == "M"){
                        iii++;
                    }    
                } catch (error) {

                }
                try {
                    if(pole[i][ii-1].cislo == "M"){
                        iii++;
                    }
                } catch (error) {
                    
                }
                pole[i][ii].cislo = iii;
            }
        }
    }

    
}