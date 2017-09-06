$(document).ready(function() {
	
	$("body").css("display", "none");
    $("body").fadeIn(1500);


	$("#goUp-button, #aboutMeLink, #myWorkLink, #contactMeLink").click(function(e) {
		e.preventDefault();

		var target;

		if ($(this).get(0).id == "goUp-button") {
			target = $("#homeLink");
		} else if ($(this).get(0).id == "myWorkLink") {
			target = $("#mywork");
		} else if ($(this).get(0).id == "aboutMeLink") {
			target = $("#aboutme");
		} else if ($(this).get(0).id == "contactMeLink") {
			target = $("#contactme");
		} else if ($(this).get(0).id == "aboutMeLink") {
			target = $("#aboutme");
		} else {
			target = $("#contactMeLink");
		}

		$("html, body").stop().animate({
			scrollTop: target.offset().top
		}, 1000);

	});

	/*
	=============================
    ======== FADE EFFECTS =======
    =============================
    */

    function redirectPage() {
		window.location = linkLocation;
	}
	$("#quoteLink").click(function(event){
		event.prefentDefault();

		linkLocation = this.href;
		$("body").fadeOut(1000, redirectPage());
	});
	

});