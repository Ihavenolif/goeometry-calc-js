function calc() {
  values.a = document.forms["strany"]["A"].value;
  values.b = document.forms["strany"]["B"].value;
  values.c = document.forms["strany"]["C"].value;
  values.alpha = document.forms["uhly"]["ALPHA"].value;
  values.beta = document.forms["uhly"]["BETA"].value;
  values.gamma = document.forms["uhly"]["GAMMA"].value;

  var jsemkokot = [
    values.a,
    values.b,
    values.c,
    values.alpha,
    values.beta,
    values.gamma
  ];

  var knownVariables = 0;

  for (var i = 0; i < 6; i++) {
    if (jsemkokot[i]!= ""){
      knownVariables += 1;
    }
  }

  console.log(knownVariables);

  if(knownVariables>2){
    if(values.a != "" && values.b != "" && values.gamma != ""){ //A B GAMMA
      values.c = Math.sqrt(Math.pow(values.a,2)+Math.pow(values.b,2)-2*values.a*values.b*Math.cos(toRadians(values.gamma)));
      values.alpha = toDegrees(Math.asin((values.a*Math.sin(toRadians(values.gamma))/values.c)));
      values.beta = toDegrees(Math.asin((values.b*Math.sin(toRadians(values.gamma))/values.c)));

      document.forms["strany"]["C"].value = values.c;
      document.forms["uhly"]["ALPHA"].value = values.alpha;
      document.forms["uhly"]["BETA"].value = values.beta;
    } else if(values.a != "" && values.beta != "" && values.c != ""){ //A BETA C
      values.b = Math.sqrt(Math.pow(values.a,2)+Math.pow(values.c,2)-2*values.a*values.c*Math.cos(toRadians(values.gamma)));
      values.alpha = toDegrees(Math.asin((values.a*Math.sin(toRadians(values.gamma))/values.c)));
      values.gamma = toDegrees(Math.asin((values.c*Math.sin(toRadians(values.gamma))/values.b)));

      document.forms["strany"]["B"].value = values.b;
      document.forms["uhly"]["ALPHA"].value = values.alpha;
      document.forms["uhly"]["GAMMA"].value = values.gamma;
    } else if(values.a != "" && values.beta != "" && values.gamma != ""){ //A BETA GAMMA

    } else if(values.alpha != "" && values.beta != "" && values.c != ""){ //ALPHA BETA C

    } else if(values.alpha != "" && values.b != "" && values.gamma != ""){ //ALPHA B GAMMA

    } else if(values.alpha != "" && values.b != "" && values.c != ""){ //ALPHA B C

    }
  }
}

function toRadians (angle) {
  return angle * (Math.PI / 180);
}

function toDegrees (angle) {
  return angle * (180 / Math.PI);
}

var values = new Object();