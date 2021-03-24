/** @format */

var light = document.getElementById("space");
var push = 0;

function toggle() {
  ++push;
  //console.log(push);
  if (push % 2 == 1) {
    //for toggling sliding button
    var s = document.getElementById("slide");
    s.style.marginLeft = "60%";
    s.style.backgroundColor = "silver";

    //for changing theme
    var scr = document.getElementById("display-container");
    scr.style.backgroundColor = "rgba(27, 173, 51, 0.836)";

    var si = document.getElementById("display");
    si.style.color = "rgb(109, 34, 34)";

    var e = document.getElementById("space");
    e.style.backgroundColor = "rgb(99, 69, 73)";

    var b = document.getElementById("buttons-container");
    b.style.backgroundColor = "#9c7070";

    // var d = document.body;
    // d.style.backgroundColor = "silver";

    var t = document.getElementById("calculator");
    t.style.backgroundColor = "#9c7070";
  } else {
    //for toggling sliding button
    var s = document.getElementById("slide");
    s.style.marginLeft = "1%";
    s.style.backgroundColor = "black";

    //for changing theme
    var scr = document.getElementById("display-container");
    scr.style.backgroundColor = "rgba(9, 75, 20, 0.836)";

    var si = document.getElementById("display");
    si.style.color = "rgba(255, 255, 255, 0.5)";

    var e = document.getElementById("space");
    e.style.backgroundColor = "rgba(127, 140, 69, 0.78)";

    // var d = document.body;
    // d.style.backgroundColor = "black";

    var b = document.getElementById("buttons-container");
    b.style.backgroundColor = "rgb(233, 62, 76, 0.836)";

    var t = document.getElementById("calculator");
    t.style.backgroundColor = "rgba(42, 12, 80, 0.966)";
  }
}

space.addEventListener("click", toggle);
