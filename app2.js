$(function(){
	$('.box1').on({
	  'click': function(){$('.box1').addClass('box1-ext');},
	  'mouseout': function(){$('.box1').removeClass('box1-ext');}
	});
});
