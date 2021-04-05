/** @format */

var light = document.getElementById("space");
var push = 1;

function toggle() {
  ++push;
  // console.log(push);
  if (push % 2 == 1) {
    //for toggling sliding button
    var s = document.getElementById("slide");
    s.style.marginLeft = "1%";
    s.style.backgroundColor = "black";

    //for changing theme
    var scr = document.getElementById("display-container");
    scr.style.backgroundColor = "rgba(9, 75, 20, 0.836)";

    var si = document.getElementById("display");
    si.style.color = "rgb(255, 255, 255)";

    var e = document.getElementById("space");
    e.style.backgroundColor = "rgba(127, 140, 69, 0.78)";

    var b = document.getElementById("buttons-container");
    b.style.backgroundColor = "rgb(233, 62, 76, 0.836)";

    var t = document.getElementById("calculator");
    t.style.backgroundColor = "rgba(16, 30, 54, 0.966)";
  } else {
    //for toggling sliding button
    var s = document.getElementById("slide");
    s.style.marginLeft = "60%";
    s.style.backgroundColor = "silver";

    //for changing theme
    var scr = document.getElementById("display-container");
    scr.style.backgroundColor = "rgba(27, 173, 51, 0.836)";

    var si = document.getElementById("display");
    si.style.color = "black";

    var e = document.getElementById("space");
    e.style.backgroundColor = "rgb(99, 69, 73)";

    var b = document.getElementById("buttons-container");
    b.style.backgroundColor = "#9c7070";

    var t = document.getElementById("calculator");
    t.style.backgroundColor = "#9c7070";
  }
}

space.addEventListener("click", toggle);
