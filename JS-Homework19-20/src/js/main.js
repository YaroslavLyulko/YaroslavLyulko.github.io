
// $(document).ready(function() {
'use strict';

var acc = document.getElementsByClassName("accordion-panel__btn");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
      console.log("asdasdsad");
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}

// });