// (function() {
//   'use strict';

// var tabs = document.getElementsByClassName('tab');
// console.log(tabs.length);
// console.log(tabs[0]);
// console.log(tabs[1]);
// console.log(tabs[2]);
// var tabId;
// for (var i = 0; i < tabs.length; i++) {
//   tabId = 'tab' + (i+1);
//   tabs[i].addEventListener('click', function() {
//     this.classList.toggle("active");
//   });
// }   

// toggleDisplay

// })();

//jQuery
$(function () {

var $links = $('.tab');
$links.on('click', function() {
  $(this).addClass('active');
  $(this).siblings().removeClass('active');
  console.log($(this));
  var $idTabInfo = '#' + $(this).attr('id') + '-info';
  console.log($idTabInfo);
  $($idTabInfo).addClass('visible').removeClass('hidden');
  $($idTabInfo).siblings().addClass('hidden').removeClass('visible');
});

// $(".someField").tooltip({
//       position: {
//         my: "left top",
//         at: "right+5 top-5",
//         collision: "none"
//       }
//     });

var $inputs = $('.someField');
$inputs.on('click', function() {
  $(".sh").removeClass('sh-w');
  $(this).siblings(".sh").toggleClass("sh-w");
});

var $btn = $('.btnShowHelp');
$btn.on('click', function() {
  // $(".sh").removeClass('sh-w');
  // $(".sh").toggleClass("sh-w");

  if (!$("#tooltip1").hasClass("sh-w")
 & !$("#tooltip2").hasClass("sh-w")
 & !$("#tooltip3").hasClass("sh-w")) {
   $(".sh").addClass("sh-w");
 } else if ($("#tooltip1").hasClass("sh-w")
 & $("#tooltip2").hasClass("sh-w")
 & $("#tooltip3").hasClass("sh-w")) {
   $(".sh").removeClass("sh-w");
 } else {
   $(".sh").removeClass('sh-w');
   $(".sh").toggleClass("sh-w");
 }

});

});