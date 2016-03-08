$(document).ready(function () {
	  $(".navbar-toggle").on("click", function () {
		    $(this).toggleClass("active");
	  });

	$('.navbar-nav li').hide();


	$(document).scroll(function() {
		var y = $(this).scrollTop();
		  if (y > 600) {
		    $('.navbar-nav li').fadeIn();
		  } else {
		    $('.navbar-nav li').fadeOut();
		  }
	});

	 $('.slide').click(function(){
        $('html, body').animate({
            scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
        }, 500);
        return false;
    });
});