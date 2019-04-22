$(function() {
// Easing and active link block start
$('.scroll').on('click', function () {
	var el = $(this).attr("href");

	if (el !== undefined && el !== '') {
		$('html, body').animate({
			scrollTop: $(el).offset().top
		}, 1500, 'easeInOutQuint');
	}
	return false;
});
// Easing and active link block end
// Light block start
lightbox.option({
	'resizeDuration': 500,
	'wrapAround': true,
	'showImageNumberLabel': false
})
// Light block end
//Slick slider start
$('.about-us-slider').slick({
  	infinite: true,
	arrows: true,
	slidesToShow: 1,
  	slidesToScroll: 1,
});
$('.slider-for').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: true,
	fade: true,
	asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	asNavFor: '.slider-for',
	arrows: true,
	focusOnSelect: true
  });
//Slick slider end

$('.header-link').on('click', function(){
	$(this).addClass('active').siblings().removeClass('active');
})

//Validation start
$('.reservation-btn').on('click', function(e){
	var nameRegExp = /[a-яA-я0-9]{5,50}/;
	var telRegExp = /^\+(?:[0-9]●?){6,14}[0-9]$/;
	var name = $('#user-name').val().match(nameRegExp);
	var tel = $('#telephone').val().match(telRegExp);
	var selectedOption = !$('option:eq(0)').prop('selected');
	if(name && tel && selectedOption){
		$('#user-name').removeClass('incorrect-input').addClass('correct-input');
		$('#telephone').removeClass('incorrect-input').addClass('correct-input');
		$('#yoga-class-type').removeClass('incorrect-input').addClass('correct-input');
		e.preventDefault();
		console.log(true);
	}else{
		if(!name){
			$('#user-name').removeClass('correct-input').addClass('incorrect-input');
		} else{
			$('#user-name').removeClass('incorrect-input').addClass('correct-input');
		}
		if(!tel){
			$('#telephone').removeClass('correct-input').addClass('incorrect-input');
		}else{
			$('#telephone').removeClass('incorrect-input').addClass('correct-input');
		}
		if(!selectedOption){
			$('#yoga-class-type').removeClass('correct-input').addClass('incorrect-input');
		}else{
			$('#yoga-class-type').removeClass('incorrect-input').addClass('correct-input');
		}
	e.preventDefault();
	console.log(false);
	}
})
//Validation end
//shop toggle start
$('.buy-btn').on('mouseover', function(){
	$(this).siblings('.price-per-month').children().toggleClass('highlight-block');
	$(this).toggleClass('highlight-block');
})
$('.buy-btn').on('mouseleave', function(){
	$(this).siblings('.price-per-month').children().toggleClass('highlight-block');
	$(this).toggleClass('highlight-block');
})
//Shop toggle end
//Img to backgroung start
$('.feature-program-img img').each(function(){           // Note: {.post-thumb img} is css selector of the image tag
    var t = $(this),
        s = 'url(' + t.attr('src') + ')',
        p = t.parent(),
        d = $('<div></div>');
    t.hide();
    p.append(d);
    d.css({
        'height'                : '100%',          // Note: You can change it for your needs
        'background-size'       : 'cover',
        'background-repeat'     : 'no-repeat',
        'background-position'   : 'center',
		'background-image'      : s,
	});
});
$('.gallery-img img').each(function(){           // Note: {.post-thumb img} is css selector of the image tag
    var t = $(this),
        s = 'url(' + t.attr('src') + ')',
        p = t.parent(),
        d = $('<div></div>');
    t.hide();
    p.append(d);
    d.css({
        'height'                : '100%',          // Note: You can change it for your needs
        'background-size'       : 'cover',
        'background-repeat'     : 'no-repeat',
        'background-position'   : 'center',
		'background-image'      : s,
	});
});
$('.about-us-slider img').each(function(){           // Note: {.post-thumb img} is css selector of the image tag
    var t = $(this),
        s = 'url(' + t.attr('src') + ')',
        p = t.parent(),
        d = $('<div></div>');
    t.hide();
    p.append(d);
    d.css({
        'height'                : 300,          // Note: You can change it for your needs
        'background-size'       : 'cover',
        'background-repeat'     : 'no-repeat',
        'background-position'   : 'center',
        'background-image'      : s
    });
});
$('.blog-img-container img').each(function(){           // Note: {.post-thumb img} is css selector of the image tag
    var t = $(this),
        s = 'url(' + t.attr('src') + ')',
        p = t.parent(),
        d = $('<div></div>');
    t.hide();
    p.append(d);
    d.css({
        'height'                : 125,          // Note: You can change it for your needs
        'background-size'       : 'cover',
        'background-repeat'     : 'no-repeat',
        'background-position'   : 'center',
		'background-image'      : s,
		'border-radius'			: '50%',
		'width'				: 125,
    });
});
$('.blog-nav-img-container img').each(function(){           // Note: {.post-thumb img} is css selector of the image tag
    var t = $(this),
        s = 'url(' + t.attr('src') + ')',
        p = t.parent(),
        d = $('<div></div>');
    t.hide();
    p.append(d);
    d.css({
        'height'                : 61,          // Note: You can change it for your needs
        'background-size'       : 'cover',
        'background-repeat'     : 'no-repeat',
        'background-position'   : 'center',
		'background-image'      : s,
		'border-radius'			: '50%',
		'width'					: 61,
		'border'				:'6px solid white',
    });
});
//Img to backgroung end
});

//Handlebars template start
var context = {gallery:[
	{
		path: 'img/gallery/img.jpg',
		'alt': 'Photo yoga pose One',
		srcpath: 'img/gallery/img1.png'
	},
	{
		path: 'img/gallery/img.jpg',
		'alt': 'Photo yoga pose Two',
		srcpath: 'img/gallery/img2.png'
	},
	{
		path: 'img/gallery/img.jpg',
		'alt': 'Photo yoga pose Three',
		srcpath: 'img/gallery/img3.png'
	},
	{
		path: 'img/gallery/img.jpg',
		'alt': 'Photo yoga pose Four',
		srcpath: 'img/gallery/img4.png'
	},
	{
		path: 'img/gallery/img.jpg',
		'alt': 'Photo yoga pose Five',
		srcpath: 'img/gallery/img5.png'
	},
	{
		path: 'img/gallery/img.jpg',
		'alt': 'Photo yoga pose Six',
		srcpath: 'img/gallery/img6.png'
	},
	{
		path: 'img/gallery/img.jpg',
		'alt': 'Photo yoga pose Seven',
		srcpath: 'img/gallery/img7.png'
	},
	{
		path: 'img/gallery/img.jpg',
		'alt': 'Photo yoga pose Eight',
		srcpath: 'img/gallery/img8.png'
	},
]
};

var sourceGallery   = document.getElementById("Handle-template-gallery").innerHTML;
var templateGallery = Handlebars.compile(sourceGallery);
var html   = templateGallery(context);
var displayGallery = document.getElementById('gallery-img-wrapper');
displayGallery.innerHTML = html;
//Handlebars template end