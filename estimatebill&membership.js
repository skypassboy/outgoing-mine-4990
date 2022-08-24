// https://github.com/skypassboy/outgoing-mine-4990
//accordian
let toggling = document.querySelector(".btn-toggle-show")
let inner_content = document.querySelector(".inner-content")

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
