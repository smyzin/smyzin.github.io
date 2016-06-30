$( document ).ready(function() {

	$(document).on("scroll", function() {
		if($(document).scrollTop()>150) {
			$(".header_card").css('opacity', '0');
			$(".menu--top").css('opacity', '1');
		} else {
			$(".header_card").css('opacity', '1');
			$(".menu--top").css('opacity', '0');
		}
	});

	var ishiddenclass = 'hide';
	function whenScrolling(e) {
	    var elements = document.querySelectorAll('.menu--top, .menu--bottom');
	    [].forEach.call(elements, itterate);
	    function itterate(element) {
	        if(e.deltaY < 0) {
				if (element.classList) {
					element.classList.remove(ishiddenclass);
				} else {
					element.className = element.className.replace(
						new RegExp('(^|\\b)'
						+ ishiddenclass
						.split(' ')
						.join('|')
						+ '(\\b|$)',
						'gi'),
						' ');
				}
			}
			if (e.deltaY > 0) {
				if (element.classList) {
					element.classList.add(ishiddenclass);
				} else {
					element.className += ' ' + ishiddenclass;
				}
			}
		};
	};

	var html = document.documentElement;

	if (html.addEventListener) {
		html.addEventListener("mousewheel", whenScrolling, false);
		html.addEventListener("DOMMouseScroll", whenScrolling, false);
		html.addEventListener("keydown", whenScrolling, false);
	} else html.attachEvent("onmousewheel", whenScrolling);

	$(function(){

		// Revisit page article
		if ($.cookie('liked') === "Yes" && $.cookie('post') === page) {
			$('.like--button').addClass('active');
		} else {$('.like--button').removeClass('active')};

		if($('.like--button').hasClass('active')){
			$('.like-svg > path').attr('d', 'M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z');
		} else {
			$('.like-svg > path').attr('d', 'M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z')
		};

		// Define number of Likes
		var nCount = $.cookie('likes') != undefined ? parseInt($.cookie('likes')) : 1;
		$('.like--number').text(nCount);
		// visit page article
		if ($('body').hasClass('post') && !$.cookie('post_url')) {
			$.cookie('post_url', 'article - ' + window.location.href + '', {expires: 120, path: '/'});
			console.log($.cookie('post_url'));
			var page = window.location.href;
		}

		// Liked post
		$('.like--button').click(function(){
			if($(this).hasClass('active')){
				$('.like--button').removeClass('active');
				$('.like-svg > path').attr('d', 'M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z');
				console.log('Click - Not Active');
				nCount--;
				console.log(nCount)
				$.cookie('likes', nCount, {expires: 120, path: '/'});
				$.cookie('liked', 'No', {expires: 120, path: '/'});
				console.log($.cookie('likes'));
				console.log($.cookie('liked'));
				$('.like--number').html(nCount);
			} else {
				$('.like--button').addClass('active');
				$('.like-svg > path').attr('d', 'M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z');
				console.log('Click - Active');
				nCount++;
				console.log(nCount);
				$.cookie('likes', nCount, {expires: 120, path: '/'});
				$.cookie('liked', 'Yes', {expires: 120, path: '/'});
				console.log($.cookie('likes'));
				console.log($.cookie('liked'));
				$('.like--number').html(nCount);
			}
		});
	});
	
	$(function(){
		$('.button-skills').click(function() {
			// e.preventDefault();
			$('.button-skills').removeClass('--active');
			$(this).addClass('--active');
			var bt = $(this).attr('title');
			$('.skill-container').addClass(bt);
			// ------
			$('.spinners').addClass('loaded');
			$('.preloader').addClass('loaded');
			setTimeout(function(){
				$('.spinners').removeClass('loaded');
				$('.preloader').removeClass('loaded');
			}, 1500);
			// if (bt == 'css3') {
			// 	$(this).addClass(bt);
			// };

		});
	});






});
