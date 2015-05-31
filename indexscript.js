var main = function() {
    $('.wrapper').mouseenter(function() {
	$('.LargeText').animate({'font-size': '55px'}, 500)
    });

    $('.wrapper').mouseleave(function() {
	$('.LargeText').animate({'font-size': '50px'}, 500)
    });
};

$(document).ready(main);
