(function($) {
	'use strict';

	var project = {};

	project.init = function() {
		project.scroll();
		project.gallery();
		project.form();
	};


	project.gallery = function() {
		var $grid = $('.grid').masonry({
			columnWidth: '.grid-sizer',
			gutter: '.gutter-sizer',
			itemSelector: '.grid-item',
			percentPosition: true
		});
		$grid.imagesLoaded().progress(function() {
			$grid.masonry('layout');
		});
	};

	project.scroll = function() {
		$('.header a[href*="#"]:not([href="#"])').click(function() {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top - 80
					}, 1000);
					return false;
				}
			}
		});
	};

	project.form = function() {
		var emailRegex = /^[A-Z0-9._%+\-]+@[A-Z0-9.\-]+\.[A-Z]{2,4}$/i;

		var markError = function(elem, test) {
			if (test) {
				$(elem).closest('.input-container').andSelf().removeClass('error');
				if ($(elem).prop('id')) $('label[for="' + $(elem).prop('id') + '"]').removeClass('error');
				if ($(elem).is('select.selectBox')) $(elem).nextAll('.selectBox:not(select)').first().removeClass('error');
			} else {
				$(elem).closest('.input-container').andSelf().addClass('error');
				if ($(elem).prop('id')) $('label[for="' + $(elem).prop('id') + '"]').addClass('error');
				if ($(elem).is('select.selectBox')) $(elem).nextAll('.selectBox:not(select)').first().addClass('error');
			}
		};
		$('form.validate').each(function(i, form) {
			$('input.required, textarea.required', form).on('validate', function() {
				markError(this, $(this).val().length);
			});

			$('select.required', form).on('validate', function() {
				markError(this, $(this).val() != '-1');
			});

			$('input.required[type="email"]', form).off('validate').on('validate', function() {
				markError(this, emailRegex.test($(this).val()));
			});

			$('.required[data-confirm]', form).off('validate').on('validate', function() {
				target = $($(this).attr('data-confirm'));
				markError(this, target.length && $(this).val().length && $(this).val() == target.val());
			});

			$('input.required[type="checkbox"], input.required[type="radio"]', form).off('validate').on('validate', function() {
				markError(this, $(this).prop('checked'));
			});

			$('input, textarea, select', form).on('change blur', function() {
				if ($(this).is('[type=radio]') && $(this).prop('name')) {
					$('input[name="' + $(this).prop('name') + '"]', form).trigger('validate');
				} else {
					$(this).trigger('validate');
				}
			});

			/* standard submit
			$(form).on('submit', function(e){
			  $('input, select, textarea', this).trigger('validate');
			  if($('.error', this).length) e.preventDefault();
			});
			*/

			/*ajax submit (or other action)*/
			$(form).on('submit', function(e) {
				e.preventDefault();
				$('input, select, textarea', this).trigger('validate');
				if (!$('.error', this).length) {
					var url = '../mail.php';
					$.ajax({
						type: 'POST',
						url: url,
						data: $('form').serialize(),
						success: function() {
							$('form input[type="submit"]').fadeOut(300);
							setTimeout(function() {
								$('form .response').fadeIn(300);
							}, 301);
						},
						error: function() {
							alert('some error');
						}
					});

					return false;
				}
			});

		});
	};

	$(document).ready(project.init);
})(jQuery);
