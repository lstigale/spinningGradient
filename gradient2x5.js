var deg =  Math.floor( Math.random() * 360); /*360*/
var r = Math.floor( Math.random() * 256);
var g = Math.floor( Math.random() * 256);
var b = Math.floor( Math.random() * 256);
var r2 = Math.floor( Math.random() * 256);
var g2 = Math.floor( Math.random() * 256);
var b2 = Math.floor( Math.random() * 256);
var counterR = true;
var counterG = true;
var counterB = true;
var counterR2 = true;
var counterG2 = true;
var counterB2 = true;

var color = [r, g, b, r2, g2, b2];
var counter = [counterR, counterG, counterB, counterR2, counterG2, counterB2];

function randomGradient() {

  if (deg == 360) {
    deg = 1;
  }
  else {
    deg = deg + 1;
  }

  for (var i = 0; i < color.length; i++ ) {
  if (counter[i] == true) {
    if (color[i] < 256) {
      color[i] = color[i] + Math.floor( Math.random() * 10);
    }
    else {
      counter[i] = false;
    }
  }
  else {
    if (color[i] > 0) {
      color[i] = color[i] - Math.floor( Math.random() * 10);
    }
    else {
      counter[i] = true;
    }
  }
}

  console.log(deg, r,g,b, r2,g2,b2);
document.body.style.background = "linear-gradient(" + deg + "deg, rgb("+ r + ", " + g + ", " + b + "), rgb("+ r2 + ", " + g2 + ", " + b2 + "))";
document.getElementById('colorNum').innerHTML = "linear-gradient(" + deg + "deg, rgb(" + r + ", " + g + ", " + b + "), rgb("+ r2 + ", " + g2 + ", " + b2 + "));";
}
