$(document).ready(function() {
'use strict';
$('.simple-carousel').simpleCarousel();

   
// var html = $('#item-tmpl').html();

var userData = {
    title: "User list created using a template",
    items: [
      {
        name: 'Buck',
        surname: 'Animal',
        title: 'Actor',
        address: 'Earth',
        phoneNumber: '123-456-789',
        email: 'Animal@hotmail.com',
        photo: 'img/user1.jpg'
      },
      {
        name: 'Girl',
        surname: 'Hungry',
        title: 'Child',
        address: 'UK',
        phoneNumber: '123-456-789',
        email: 'Girl.bw@gb.com',
        photo: 'img/user2.jpg'
      },
      {
        name: 'Emerson',
        surname: 'Loustau',
        title: 'Front-end Developer',
        address: 'India',
        phoneNumber: '123-456-789',
        email: 'E.Loustau@fed.com',
        photo: 'img/user3.jpg'
      }
    ]
};
var parent = document.getElementById('container');
var html = document.getElementById('item-tmpl').textContent;
var hhh = _.template(html);

console.log(hhh(userData));
parent.innerHTML += hhh(userData);


// var content = tmpl(html, data);

// $('body').append(content1);

});