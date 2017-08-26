'use strict';

var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.grid-item',
  columnWidth: 300,
  gutter: 10,
  fitWidth: true,
  transitionDuration: 0
});

// // element argument can be a selector string
// //   for an individual element
// var msnry = new Masonry( '.grid', {
//   // options
// });

console.log('Masonry loaded');