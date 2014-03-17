$(document).ready(function() {
        var carousel = $("#carousel").featureCarousel({
          autoPlay:             0,
		  trackerIndividual: false,
		  trackerSummation: false
        });
        $("#but_prev").click(function () {
          carousel.prev();
        });
        $("#but_next").click(function () {
          carousel.next();
        });
		$(".image:odd").addClass("odd");
        $('#header a').bind('click',function(event){
                    var $anchor = $(this);
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1000,'easeInOutExpo');
				event.preventDefault();
		});
           $('.index_text a').bind('click',function(event){
                    var $anchor = $(this);
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1000,'easeInOutExpo');
				event.preventDefault();
		});
           $('.footer_logo').bind('click',function(event){
                    var $anchor = $(this);
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1000,'easeInOutExpo');
				event.preventDefault();
		});
		$('#nav a').click(function(){  // при нажатии на ссылку ей присваивается класс 'active'
					$('.active').removeAttr("class");
					$(this).addClass("active");
					});	
		$('.logo').click(function(){  // при нажатии на ссылку ей присваивается класс 'active'
					$('.active').removeAttr("class");
					});	
		$('.logo2').click(function(){  // при нажатии на ссылку ей присваивается класс 'active'
					$('.active').removeAttr("class");
					});
		$('.footer_logo').click(function()
		{ 
			$('.active').removeAttr('class');$('#link1').addClass('active');
		});			
		$('#galery_block').wrap('<div id="galery"></div>')
		document.getElementById('galery').insertAdjacentHTML('afterBegin','<span id="carouselRight"></span>');
		document.getElementById('galery').insertAdjacentHTML('beforeEnd','<span id="carouselLeft"></span>');
		$("#galery_block").clickCarousel({margin: 20});
	  });
		// добавляем линии к заголовкам и кнопкам
	window.onload=function() {
			var s=document.getElementsByTagName('h1').length;
			$('h1').wrap('<div class="h1"></div>');
			$('h2').wrap('<div class="h2"></div>');
			$('.button').wrap('<div class="button_bg"></div>');	
		}		
