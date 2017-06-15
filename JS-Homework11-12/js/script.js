$(document).ready(function() {

$('.simple-carousel1').simpleCarousel();

   
var html = $('#item-tmpl').html();

console.log(html);

var data = {
    title: "Some title"
};

console.log(data.title);

var content = tmpl(html, data);

$('body').append(content);



});