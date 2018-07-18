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

function randomGradient() {

  if (deg == 360) {
    deg = 1;
  }
  else {
    deg = deg + 1;
  }

  if (counterR == true) {
    if (r < 256) {
      r = r + Math.floor( Math.random() * 10);
    }
    else {
      counterR = false;
    }
  }
  else {
    if (r > 0) {
      r = r - Math.floor( Math.random() * 10);
    }
    else {
      counterR = true;
    }
  }

  if (counterG == true) {
    if (g < 256) {
      g = g + Math.floor( Math.random() * 10);
    }
    else {
      counterG = false;
    }
  }
  else {
    if (g > 0) {
      g = g - Math.floor( Math.random() * 10);
    }
    else {
      counterG = true;
    }
  }

  if (counterB == true) {
    if (b < 256) {
      b = b + Math.floor( Math.random() * 10);
    }
    else {
      counterB = false;
    }
  }
  else {
    if (b > 0) {
      b = b - Math.floor( Math.random() * 10);
    }
    else {
      counterB = true;
    }
  }

  if (counterR2 == true) {
    if (r2 < 256) {
      r2 = r2 + Math.floor( Math.random() * 10);
    }
    else {
      counterR2 = false;
    }
  }
  else {
    if (r2 > 0) {
      r2 = r2 - Math.floor( Math.random() * 10);
    }
    else {
      counterR2 = true;
    }
  }

  if (counterG2 == true) {
    if (g2 < 256) {
      g2 = g2 + Math.floor( Math.random() * 10);
    }
    else {
      counterG2 = false;
    }
  }
  else {
    if (g2 > 0) {
      g2 = g2 - Math.floor( Math.random() * 10);
    }
    else {
      counterG2 = true;
    }
  }

  if (counterB2 == true) {
    if (b2 < 256) {
      b2 = b2 + Math.floor( Math.random() * 10);
    }
    else {
      counterB2 = false;
    }
  }
  else {
    if (b2 > 0) {
      b2 = b2 - Math.floor( Math.random() * 10);
    }
    else {
      counterB2 = true;
    }
  }
  console.log(deg, r,g,b, r2,g2,b2);
document.body.style.background = "linear-gradient(" + deg + "deg, rgb("+ r + ", " + g + ", " + b + "), rgb("+ r2 + ", " + g2 + ", " + b2 + "))";
document.getElementById('colorNum').innerHTML = "linear-gradient(" + deg + "deg, rgb(" + r + ", " + g + ", " + b + "), rgb("+ r2 + ", " + g2 + ", " + b2 + "));";
}
