$(document).ready(function(){
		$('.bxslider').bxSlider({
			mode: 'horizontal',
			moveSlides: 1,
			slideMargin: 40,
			infiniteLoop: true,
			slideWidth: 660,
			minSlides: 3,
			maxSlides: 3,
			speed: 800,
		});

$('#myDropdown').ddslick({
    onSelected: function(selectedData){
        //callback function: do something with selectedData;
    }   
});

$('.n-input').each(function(){
    var self = $(this),
      label = self.next(),
      label_text = label.text();

    label.remove();
    self.iCheck({
      checkboxClass: 'icheckbox_line-blue',
      radioClass: 'iradio_line-blue',
      insert: '<div class="icheck_line-icon"></div>' + label_text
    });
  });

var $btn = $('.btnCheckAll');
$btn.on('click', function() {
$('.n-input').iCheck('check');
});

$(".submenu > li > a").hover(
function() {
	$(".subsubmenu li a").animate({
	backgroundColor:"#2489c5",
  }, 1000);
},
function() {
	$(".subsubmenu li a").queue("fx", []);
	$(".subsubmenu li a").animate({
	backgroundColor:"red",
  }, 10);
});

//test area
jQuery(".test1").hover(
  function () {
	  console.log("есть div .test1");
    jQuery(this).animate({
        backgroundColor:"#03C",
    }, 500 );
}, 
	function() {
    jQuery(this).animate({
        backgroundColor:"#0CF",
    }, 500 );
});

	});