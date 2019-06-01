// hier komt je code
// console.log("Hallo wereld!");

let mijnParagraaf = document.querySelector("p");

window.addEventListener("mousemove", function(event) {
      mijnParagraaf.innerHTML = "Muiscoördinaten: X=" + event.pageX + "px, Y=" + event.pageY + "px";
      console.log("Positie: X=" + event.pageX + "px, Y=" + event.pageY + "px" );
});

$(document).mousemove(function(e) {
  $('.pointer').css({left:e.pageX, top:e.pageY})
} )
