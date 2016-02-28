// ========= (c)2015 :: html & css & jquery coding :: Polyakov - http://polyakov.co.ua  =========

// =========================================================================  contact_form
$(function() {
	//Функция проверяет заполнено ли поле с телефоном
	function formValide() {			
		var str = $('#contact_form input[name=tel]').val();
		str = jQuery.trim(str);                
		if(str.length < 5){                
			alert ('Введите телефон');			
			return false;
		}	
		return true;
	}

	//при нажатии на кнопку button нужной формы запускаем функцию обработки данных
	$('#contact_form .button').live('click', function() {
		if (formValide()) {
			//если форма прошла проверку, выводим блок с текстом ожидания
			$('#contact_form').before('<h3 id="contact_form_info">Оформление заявки. Подождите...</h3>');
			$('#contact_form').hide();
			//берем путь php обработчика
			order_url = $('#contact_form').attr('action');
            form_data = $(this).closest('form').serialize();
			//посылаем асинхронный запрос на сервер и передаем все данные формы
			$.post(order_url, form_data, function(data) {
					//выводим возврашаемый сервером код html вместо содержимого формы
				$('#contact_form').html(data);
				$('#contact_form').show();
				$('#contact_form_info').remove();
			}, "html");			
		}
		return false;
	});
});

// =========================================================================  go_order
$(function() {
	//фкнкция вызова формы обратной связи
	$('#callback').click(function(){
		//появление окна обратной связи
		$('#popup').fadeIn();
		//добавляем к окну иконку закрытия
        $('#popup').append('<a id="popup_close"></a>');
		//расчитываем высоту и ширину всплывающего окна что бы вывести окно прямо по центру экрана
        q_width = $('#popup').outerWidth()/-2;
        q_height = $('#popup').outerHeight()/-2;
        $('#popup').css({
            'margin-left': q_width,
            'margin-top': q_height
        });
		//выводим затемение страницы и делаем полупрозрачным
        $('body').append('<div id="fade"></div>');
        $('#fade').css({'filter' : 'alpha(opacity=40)'}).fadeIn();
		return false;
	});
	//функция закрытия окна
	$('#popup_close, #fade').live('click', function() {
		$('#fade').fadeOut(function() {
			$('#fade').remove();			
            $('#popup_close').remove();
			$('#popup').fadeOut();
		});
	});
	
	//функция вызова всплывающего окна с видео-блоком
	 $('#video_btn').on('click', function() {
        $('#popup_video').fadeIn();
		$('#popup_video').append('<a id="popup_video_close"></a>');
            $('#popup_video_block').append('<iframe width="580" height="326" src="https://www.youtube.com/embed/wCc2v7izk8w?autoplay=1" frameborder="0" allowfullscreen></iframe>');
            q_width = $('#popup_video').outerWidth()/-2;
            q_height = $('#popup_video').outerHeight()/-2;
            $('#popup_video').css({
                'margin-left': q_width,
                'margin-top': q_height
            });
            $('body').append('<div id="fade"></div>');
            $('#fade').css({'filter' : 'alpha(opacity=40)'}).fadeIn();
    });
	
	$('body').on('click', '#fade, #popup_video_close', function() {
        $('#fade , #popup').fadeOut(function() {
			$('#popup_video_block').empty();
            $('#popup_video').fadeOut();
			$('#popup_video_close').remove();
            $('#fade').remove();
        });
    });

});