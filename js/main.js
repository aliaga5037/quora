jQuery(document).ready(function($) {
	$('.search').click(
		function() {
			$('.z').css("z-index","9").fadeIn();
			$(this).css({
				"width": "600px",
				"marginRight": "20px",
				"backgroundColor": "white"
			})
			$(".askbtn").text("suali tesdiqle")
		$(".sag").css("display","none");
    });
    
    $(".btn").click(function(event) {
    	if($(".search").val().length == 0){
    		$(".search").val("?")
    	}
    	$('.z').css("z-index","9").fadeIn();
			$(".search").css({
				"width": "600px",
				"marginRight": "20px",
				"backgroundColor": "white"
			})
			$(".askbtn").text("suali tesdiqle")
		$(".sag").css("display","none");    });
   
	$('.z').click(function(e) {
		$(this).fadeOut(function() {
		});
		$('.search').css({
				"width": "30%",
				"marginRight": "0px",
				"backgroundColor": "lightgray"
			})
		$(".sag").css("display","block");
		 $(".askbtn").text("sual ver")
		
		

	});


});

    $(document).ready(function(){
        $("#back-top").hide();
        $(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 600) {
                    $('#back-top').fadeIn();

                } else {
                    $('#back-top').fadeOut();
                }
            });
            $('#back-top').click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 400);
                return false;
            });
        });
        $(".profil").hover(function(event) {
        	$(".prof").toggle()
        });
        $(".prof").hover(function(event) {
        	$(".prof").toggle()
        });
         $(window).scroll(function () {
                if ($(this).scrollTop() > 50) {
                    $('.head').addClass('fixed')

                } else {
                    $('.head').removeClass('fixed')
                }
            });
});