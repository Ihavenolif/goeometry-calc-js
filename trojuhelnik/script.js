var values = {};
var temp = {};
var temp2 = {};
cvs = document.getElementById("canv");
cvs.width = window.innerWidth / 2;
cvs.height = window.innerHeight;
ctx = cvs.getContext("2d");
ctx.fillStyle = "white";

function calc() {
  values.a = Number(document.forms["strany"]["A"].value);
  values.b = Number(document.forms["strany"]["B"].value);
  values.c = Number(document.forms["strany"]["C"].value);
  values.alpha = Number(document.forms["uhly"]["ALPHA"].value);
  values.beta = Number(document.forms["uhly"]["BETA"].value);
  values.gamma = Number(document.forms["uhly"]["GAMMA"].value);

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
    if (jsemkokot[i] != "") {
      knownVariables += 1;
    }
  }

  // DOPLŇOVÁNÍ STRAN

  if (knownVariables > 2) {
    var pokracovat = true;
    if (values.a != "" && values.b != "" && values.gamma != "" && pokracovat) {
      //A B GAMMA
      values.c = Math.sqrt(
        Math.pow(values.a, 2) +
          Math.pow(values.b, 2) -
          2 * values.a * values.b * Math.cos(toRadians(values.gamma))
      );
      values.alpha = toDegrees(
        Math.asin((values.a * Math.sin(toRadians(values.gamma))) / values.c)
      );
      values.beta = toDegrees(
        Math.asin((values.b * Math.sin(toRadians(values.gamma))) / values.c)
      );

      document.forms["strany"]["C"].value = values.c;
      document.forms["uhly"]["ALPHA"].value = values.alpha;
      document.forms["uhly"]["BETA"].value = values.beta;

      pokracovat = false;
    } else if (
      values.a != "" &&
      values.beta != "" &&
      values.c != "" &&
      pokracovat
    ) {
      //A BETA C
      values.b = Math.sqrt(
        Math.pow(values.a, 2) +
          Math.pow(values.c, 2) -
          2 * values.a * values.c * Math.cos(toRadians(values.gamma))
      );
      values.alpha = toDegrees(
        Math.asin((values.a * Math.sin(toRadians(values.gamma))) / values.c)
      );
      values.gamma = toDegrees(
        Math.asin((values.c * Math.sin(toRadians(values.gamma))) / values.b)
      );

      document.forms["strany"]["B"].value = values.b;
      document.forms["uhly"]["ALPHA"].value = values.alpha;
      document.forms["uhly"]["GAMMA"].value = values.gamma;

      pokracovat = false;
    } else if (
      values.a != "" &&
      values.beta != "" &&
      values.gamma != "" &&
      pokracovat
    ) {
      //A BETA GAMMA
      values.alpha = 180 - values.beta - values.gamma;
      values.b =
        (values.a * Math.sin(toRadians(values.beta))) /
        Math.sin(toRadians(values.alpha));
      values.c =
        (values.a * Math.sin(toRadians(values.gamma))) /
        Math.sin(toRadians(values.alpha));

      document.forms["strany"]["B"].value = values.b;
      document.forms["uhly"]["ALPHA"].value = values.alpha;
      document.forms["strany"]["C"].value = values.c;

      pokracovat = false;
    } else if (
      values.alpha != "" &&
      values.beta != "" &&
      values.c != "" &&
      pokracovat
    ) {
      //ALPHA BETA C
      values.gamma = 180 - values.beta - values.alpha;
      values.b =
        (values.c * Math.sin(toRadians(values.beta))) /
        Math.sin(toRadians(values.gamma));
      values.a =
        (values.c * Math.sin(toRadians(values.alpha))) /
        Math.sin(toRadians(values.gamma));

      document.forms["strany"]["B"].value = values.b;
      document.forms["uhly"]["GAMMA"].value = values.gamma;
      document.forms["strany"]["A"].value = values.a;

      pokracovat = false;
    } else if (
      values.alpha != "" &&
      values.b != "" &&
      values.gamma != "" &&
      pokracovat
    ) {
      //ALPHA B GAMMA
      values.beta = 180 - values.alpha - values.gamma;
      values.c =
        (values.b * Math.sin(toRadians(values.gamma))) /
        Math.sin(toRadians(values.beta));
      values.a =
        (values.b * Math.sin(toRadians(values.alpha))) /
        Math.sin(toRadians(values.beta));

      document.forms["strany"]["C"].value = values.c;
      document.forms["uhly"]["BETA"].value = values.beta;
      document.forms["strany"]["A"].value = values.a;

      pokracovat = false;
    } else if (
      values.alpha != "" &&
      values.b != "" &&
      values.c != "" &&
      pokracovat
    ) {
      //ALPHA B C
      values.a = Math.sqrt(
        Math.pow(values.a, 2) +
          Math.pow(values.c, 2) -
          2 * values.a * values.c * Math.cos(toRadians(values.gamma))
      );
      values.beta = toDegrees(
        Math.asin((Math.sin(toRadians(values.alpha)) * values.b) / values.a)
      );
      values.gamma = toDegrees(
        Math.asin((values.c * Math.sin(toRadians(values.beta))) / values.b)
      );

      document.forms["strany"]["A"].value = values.a;
      document.forms["uhly"]["BETA"].value = values.beta;
      document.forms["uhly"]["GAMMA"].value = values.gamma;

      pokracovat = false;
    }
    var skupinaA = values.a != "" && values.alpha != "" && pokracovat;
    if (skupinaA && values.b != "") {
      //A B
      values.beta = toDegrees(
        Math.asin((values.b * Math.sin(toRadians(values.alpha))) / values.a)
      );
      values.gamma = 180 - values.alpha - values.beta;
      values.c =
        (values.a * Math.sin(toRadians(values.gamma))) /
        Math.sin(toRadians(values.alpha));

      document.forms["strany"]["C"].value = values.c;
      document.forms["uhly"]["BETA"].value = values.beta;
      document.forms["uhly"]["GAMMA"].value = values.gamma;

      pokracovat = false;
    } else if (skupinaA && values.beta != "") {
      //A BETA
      values.b =
        (values.a * Math.sin(toRadians(values.beta))) /
        Math.sin(toRadians(values.alpha));
      values.gamma = 180 - values.alpha - values.beta;
      values.c =
        (values.a * Math.sin(toRadians(values.gamma))) /
        Math.sin(toRadians(values.alpha));

      document.forms["strany"]["B"].value = values.b;
      document.forms["strany"]["C"].value = values.c;
      document.forms["uhly"]["GAMMA"].value = values.gamma;

      pokracovat = false;
    } else if (skupinaA && values.c != "") {
      //A C
      values.gamma = toDegrees(
        Math.asin((values.c * Math.sin(toRadians(values.alpha))) / values.a)
      );
      values.beta = 180 - values.alpha - values.gamma;
      values.b =
        (values.a * Math.sin(toRadians(values.beta))) /
        Math.sin(toRadians(values.alpha));

      document.forms["uhly"]["BETA"].value = values.beta;
      document.forms["uhly"]["GAMMA"].value = values.gamma;
      document.forms["strany"]["B"].value = values.b;

      pokracovat = false;
    } else if (skupinaA && values.gamma != "") {
      // A GAMMA
      values.c =
        (values.a * Math.sin(toRadians(values.gamma))) /
        Math.sin(toRadians(values.alpha));
      values.beta = 180 - values.alpha - values.gamma;
      values.b =
        (values.a * Math.sin(toRadians(values.beta))) /
        Math.sin(toRadians(values.alpha));

      document.forms["strany"]["B"].value = values.b;
      document.forms["strany"]["C"].value = values.c;
      document.forms["uhly"]["BETA"].value = values.beta;

      pokracovat = false;
    }
    var skupinaB = values.b != "" && values.beta != "" && pokracovat;
    if (skupinaB && values.a != "") {
      // B A
      values.alpha = toDegrees(
        Math.asin((values.a * Math.sin(toRadians(values.beta))) / values.b)
      );
      values.gamma = 180 - values.alpha - values.beta;
      values.c =
        (values.a * Math.sin(toRadians(values.gamma))) /
        Math.sin(toRadians(values.alpha));

      document.forms["uhly"]["ALPHA"].value = values.alpha;
      document.forms["uhly"]["GAMMA"].value = values.gamma;
      document.forms["strany"]["C"].value = values.c;

      pokracovat = false;
    } else if (skupinaB && values.alpha != "") {
      // B ALPHA
      values.a = (values.b * Math.sin(toRadians(values.alpha))) / values.beta;
      values.gamma = 180 - values.alpha - values.beta;
      values.c =
        (values.a * Math.sin(toRadians(values.gamma))) /
        Math.sin(toRadians(values.alpha));

      document.forms["strany"]["A"].value = values.a;
      document.forms["strany"]["C"].value = values.c;
      document.forms["uhly"]["GAMMA"].value = values.gamma;

      pokracovat = false;
    } else if (skupinaB && values.c != "") {
      // B C
      values.gamma = toDegrees(
        Math.asin((values.c * Math.sin(toRadians(values.beta))) / values.b)
      );
      values.alpha = 180 - values.beta - values.gamma;
      values.a =
        (values.c * Math.sin(toRadians(values.alpha))) /
        Math.sin(toRadians(values.gamma));

      document.forms["uhly"]["ALPHA"].value = values.alpha;
      document.forms["uhly"]["GAMMA"].value = values.gamma;
      document.forms["strany"]["A"].value = values.a;

      pokracovat = false;
    } else if (skupinaB && values.gamma != "") {
      // B GAMMA
      values.c =
        (values.b * Math.sin(toRadians(values.gamma))) /
        Math.sin(toRadians(values.beta));
      values.beta = 180 - values.alpha - values.gamma;
      values.a =
        (values.c * Math.sin(toRadians(values.alpha))) /
        Math.sin(toRadians(values.gamma));

      document.forms["strany"]["C"].value = values.c;
      document.forms["strany"]["A"].value = values.a;
      document.forms["uhly"]["BETA"].value = values.beta;

      pokracovat = false;
    }
    var skupinaC = values.c != "" && values.gamma != "" && pokracovat;
    if (skupinaC && values.a != "") {
      // C A
      values.alpha = toDegrees(
        Math.asin((values.a * Math.sin(toRadians(values.gamma))) / values.c)
      );
      values.beta = 180 - values.alpha - values.gamma;
      values.b =
        (values.a * Math.sin(toRadians(values.beta))) /
        Math.sin(toRadians(values.alpha));

      document.forms["uhly"]["ALPHA"].value = values.alpha;
      document.forms["uhly"]["BETA"].value = values.beta;
      document.forms["strany"]["B"].value = values.b;
      pokracovat = false;
    } else if (skupinaC && values.alpha != "") {
      // C ALPHA
      values.a =
        (values.c * Math.sin(toRadians(values.alpha))) /
        Math.sin(toRadians(values.gamma));
      values.beta = 180 - values.alpha - values.gamma;
      values.b =
        (values.a * Math.sin(toRadians(values.beta))) /
        Math.sin(toRadians(values.alpha));

      document.forms["strany"]["A"].value = values.a;
      document.forms["strany"]["B"].value = values.b;
      document.forms["uhly"]["BETA"].value = values.beta;
      pokracovat = false;
    } else if (skupinaC && values.b != "") {
      // C B
      values.beta = toDegrees(
        Math.asin((values.b * Math.sin(toRadians(values.gamma))) / values.c)
      );
      values.alpha = 180 - values.gamma - values.beta;
      values.a =
        (values.c * Math.sin(toRadians(values.alpha))) /
        Math.sin(toRadians(values.gamma));

      document.forms["uhly"]["ALPHA"].value = values.alpha;
      document.forms["uhly"]["BETA"].value = values.beta;
      document.forms["strany"]["A"].value = values.a;
      pokracovat = false;
    } else if (skupinaC && values.beta != "") {
      // C BETA
      values.b =
        (values.c * Math.sin(toRadians(values.beta))) /
        Math.sin(toRadians(values.gamma));
      values.alpha = 180 - values.beta - values.gamma;
      values.a =
        (values.c * Math.sin(toRadians(values.alpha))) /
        Math.sin(toRadians(values.gamma));

      document.forms["strany"]["A"].value = values.a;
      document.forms["strany"]["B"].value = values.b;
      document.forms["uhly"]["ALPHA"].value = values.alpha;
      pokracovat = false;
    }
  }

  // VÝŠKY

  if (knownVariables > 2) {
    values.Va =
      (values.b * Math.sin(toRadians(values.gamma))) / Math.sin(toRadians(90));
    values.Vb =
      (values.c * Math.sin(toRadians(values.alpha))) / Math.sin(toRadians(90));
    values.Vc =
      (values.a * Math.sin(toRadians(values.beta))) / Math.sin(toRadians(90));
  }

  // OBVOD A OBSAH

  if (knownVariables > 2) {
    values.o = Number(values.a) + Number(values.b) + Number(values.c);
    document.getElementById("obvod").innerHTML = "Obvod = " + values.o;

    values.S = (values.a * values.Va) / 2;
    document.getElementById("obsah").innerHTML = "Obsah = " + values.S;
  }

  if (knownVariables > 2) draw();
}

function draw() {
  /*if (values.a > values.b && values.a > values.c)
    (temp2.a = values.a),
      (temp2.b = values.b),
      (temp2.c = values.c),
      (temp2.alpha = values.alpha),
      (temp2.beta = values.beta),
      (temp2.gamma = values.gamma),
      (temp2.Va = values.Va),
      (temp2.Vb = values.Vb),
      (temp2.Vc = values.Vc),
      (temp2.firstPoint = "A");
  else if (values.b > values.a && values.b > values.c)
    (temp2.a = values.b),
      (temp2.b = values.c),
      (temp2.c = values.a),
      (temp2.alpha = values.beta),
      (temp2.beta = values.gamma),
      (temp2.gamma = values.alpha),
      (temp2.Va = values.Vb),
      (temp2.Vb = values.Vc),
      (temp2.Vc = values.Va),
      (temp2.firstPoint = "B");
  else if (values.c > values.a && values.c > values.b)
    (temp2.a = values.c),
      (temp2.b = values.a),
      (temp2.c = values.b),
      (temp2.alpha = values.gamma),
      (temp2.beta = values.alpha),
      (temp2.gamma = values.beta),
      (temp2.Va = values.Vc),
      (temp2.Vb = values.Va),
      (temp2.Vc = values.Vb),
      (temp2.firstPoint = "C");
  else */temp2 = values;
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canv.width, canv.height);
  ctx.beginPath();
  ctx.moveTo((window.innerWidth * 0.2) / 2, window.innerHeight * 0.85);
  ctx.lineTo((window.innerWidth * 0.8) / 2, window.innerHeight * 0.85);
  ratio = (window.innerWidth * 0.3) / temp2.c;
  ctx.strokeStyle = "green";
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo((window.innerWidth * 0.8) / 2, window.innerHeight * 0.85);
  temp.a = (temp2.b * Math.sin(toRadians(temp2.alpha))) / temp2.beta;
  temp.gamma = 180 - temp2.alpha - temp2.beta;
  temp.c =
    (temp.a * Math.sin(toRadians(temp.gamma))) /
    Math.sin(toRadians(temp2.alpha));
  ctx.lineTo(
    window.innerWidth * 0.1 + temp.c * ratio,
    window.innerHeight * 0.65 - temp2.Vc * ratio
  );
  ctx.strokeStyle = "blue";
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(
    window.innerWidth * 0.1 + temp.c * ratio,
    window.innerHeight * 0.65 - temp2.Vc * ratio
  );
  ctx.lineTo((window.innerWidth * 0.2) / 2, window.innerHeight * 0.85);
  ctx.strokeStyle = "red";
  ctx.stroke();
  ctx.font = "20px Arial";
  ctx.fillStyle = "black";
  switch (temp2.firstPoint) {
    case "A":
      ctx.fillText(
        "A",
        (window.innerWidth * 0.2) / 2 - 10,
        window.innerHeight * 0.85 + 20
      );
      ctx.fillText(
        "B",
        (window.innerWidth * 0.8) / 2 + 10,
        window.innerHeight * 0.85 + 20
      );
      ctx.fillText(
        "C",
        window.innerWidth * 0.1 + temp.c * ratio - 10,
        window.innerHeight * 0.65 - temp2.Vc * ratio - 15
      );
      break;
    case "B":
      ctx.fillText(
        "B",
        (window.innerWidth * 0.2) / 2 - 10,
        window.innerHeight * 0.85 + 20
      );
      ctx.fillText(
        "C",
        (window.innerWidth * 0.8) / 2 + 10,
        window.innerHeight * 0.85 + 20
      );
      ctx.fillText(
        "A",
        window.innerWidth * 0.1 + temp.c * ratio - 10,
        window.innerHeight * 0.65 - temp2.Vc * ratio - 15
      );
    case "C":
      ctx.fillText(
        "C",
        (window.innerWidth * 0.2) / 2 - 10,
        window.innerHeight * 0.85 + 20
      );
      ctx.fillText(
        "A",
        (window.innerWidth * 0.8) / 2 + 10,
        window.innerHeight * 0.85 + 20
      );
      ctx.fillText(
        "B",
        window.innerWidth * 0.1 + temp.c * ratio - 10,
        window.innerHeight * 0.65 - temp2.Vc * ratio - 15
      );
  }
}

function toRadians(angle) {
  return angle * (Math.PI / 180);
}

function toDegrees(angle) {
  return angle * (180 / Math.PI);
}
