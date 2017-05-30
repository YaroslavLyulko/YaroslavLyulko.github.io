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
})

});