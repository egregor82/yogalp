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
$('.slick-slider').slick({
  	infinite: true,
	arrows: true,
	slidesToShow: 1,
  	slidesToScroll: 1,
});
//Slick slider end
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
const displayGallery = document.getElementById('gallery-img-wrapper');
displayGallery.innerHTML = html;
//Handlebars template end