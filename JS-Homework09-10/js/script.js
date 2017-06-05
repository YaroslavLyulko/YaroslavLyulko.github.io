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

	});