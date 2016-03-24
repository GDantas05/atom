$(function() {
	//DESLIZA O MENU
	$('.main_menu a[class!="special"]').click(function() {
		var goto = $('.'+$(this).attr('href').replace('#', '')).position().top;
		$('html, body').animate({scrollTop:goto - $('.main_header').outerHeight()},1000)

		return false;
	});

	//SUPENDE O MENU
	$(window).scroll(function() {
		if ($(this).scrollTop() > $('.main_header').outerHeight() + 150) {
			$('body').css('padding-top', $('.main_header').outerHeight());
			$('.main_header').addClass('main_header_fixed');
			$('.j_back').fadeIn(500);
		} else {
			$('body').css('padding-top', '0');
			$('.main_header').removeClass('main_header_fixed');
			$('.j_back').fadeOut(500);
		}
	});

	$('.j_back').click(function() {
		$('html, body').animate({scrollTop:0},1000)
	});

	$('.j_formcontact').submit(function() {
		var dados = $(this).serialize();
		$.ajax({
			url: 'email.php',
			data: dados,
			type: 'POST',
			dataType: 'json',
			beforeSend: function() {
				$('.form_load').fadeIn();
			},
			success: function(data) {
				$('.form_load').fadeOut();
				alert('Obrigado por entrar em contato '+data.nome+'. Assim que possível responderemos');
			},
		});
		return false;
	});
});