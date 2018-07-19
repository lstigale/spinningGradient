var deg =  Math.floor( Math.random() * 360); /*360*/

var color = [r = Math.floor( Math.random() * 256),
             g = Math.floor( Math.random() * 256),
             b = Math.floor( Math.random() * 256),
             r2 = Math.floor( Math.random() * 256),
             g2 = Math.floor( Math.random() * 256),
             b2 = Math.floor( Math.random() * 256)];
var counter = [counterR = true,
               counterG = true,
               counterB = true,
               counterR2 = true,
               counterG2 = true,
               counterB2 = true];


function randomGradient() {

  if (deg == 360) {
    deg = 1;
  }
  else {
    deg = deg + 1;
  }

  for (var i = 0; i < color.length; i++) {
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

  console.log(deg, color[0] ,color[1] ,color[2] , color[3] ,color[4] ,color[5] );
document.body.style.background = "linear-gradient(" + deg + "deg, rgb("+ color[0]  + ", " + color[1]  + ", " + color[2]  + "), rgb("+ color[3]  + ", " + color[4]  + ", " + color[5]  + "))";
document.getElementById('colorNum').innerHTML = "linear-gradient(" + deg + "deg, rgb(" + color[0]  + ", " + color[1]  + ", " + color[2]  + "), rgb("+ color[3]  + ", " + color[4]  + ", " + color[5]  + "));";
}
