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
      values.alpha = 180 - values.beta - values.gamma;
      values.b = (values.a * Math.sin(toRadians(values.beta)))/Math.sin(toRadians(values.alpha));
      values.c = (values.a * Math.sin(toRadians(values.gamma)))/Math.sin(toRadians(values.alpha));

      document.forms["strany"]["B"].value = values.b;
      document.forms["uhly"]["ALPHA"].value = values.alpha;
      document.forms["strany"]["C"].value = values.c;
    } else if(values.alpha != "" && values.beta != "" && values.c != ""){ //ALPHA BETA C
      values.gamma = 180 - values.beta - values.alpha;
      values.b = (values.c * Math.sin(toRadians(values.beta)))/Math.sin(toRadians(values.gamma));
      values.a = (values.c * Math.sin(toRadians(values.alpha)))/Math.sin(toRadians(values.gamma));

      document.forms["strany"]["B"].value = values.b;
      document.forms["uhly"]["GAMMA"].value = values.gamma;
      document.forms["strany"]["A"].value = values.a;
    } else if(values.alpha != "" && values.b != "" && values.gamma != ""){ //ALPHA B GAMMA
      values.beta = 180 - values.alpha - values.gamma;
      values.c = (values.b * Math.sin(toRadians(values.gamma)))/Math.sin(toRadians(values.beta));
      values.a = (values.b * Math.sin(toRadians(values.alpha)))/Math.sin(toRadians(values.beta));

      document.forms["strany"]["C"].value = values.c;
      document.forms["uhly"]["BETA"].value = values.beta;
      document.forms["strany"]["A"].value = values.a;
    } else if(values.alpha != "" && values.b != "" && values.c != ""){ //ALPHA B C
      values.a = Math.sqrt(Math.pow(values.a, 2)+Math.pow(values.c, 2)-2*values.a*values.c*Math.cos(toRadians(values.gamma)));
      values.beta = toDegrees(Math.asin((Math.sin(toRadians(values.alpha))*values.b)/values.a));
      values.gamma = toDegrees(Math.asin((values.c*Math.sin(toRadians(values.beta))/values.b)));

      document.forms["strany"]["A"].value = values.a;
      document.forms["uhly"]["BETA"].value = values.beta;
      document.forms["uhly"]["GAMMA"].value = values.gamma;
    }
    var skupinaA = values.a != "" && values.alpha != "";
    if(skupinaA && values.b != ""){

    } else if(skupinaA && values.beta != ""){

    } else if(skupinaA && values.c != ""){

    } else if(skupinaA && values.gamma != ""){

    }
    var skupinaB = values.b != "" && values.beta != "";
    if(skupinaB && values.a != ""){

    } else if(skupinaB && values.alpha != ""){

    } else if(skupinaB && values.c != ""){

    } else if(skupinaB && values.gamma != ""){

    }
    var skupinaC = values.c != "" && values.gamma != "";
    if(skupinaC && values.a != ""){

    } else if(skupinaC && values.alpha != ""){

    } else if(skupinaC && values.b != ""){

    } else if(skupinaC && values.beta != ""){

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