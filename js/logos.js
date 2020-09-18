$(function () {
	// vars for clients list carousel
	// http://stackoverflow.com/questions/6759494/jquery-function-definition-in-a-carousel-script
	// https://stackoverflow.com/questions/27430490/continuous-logo-carousel

	var $clientcarousel = $('#clients-list')
	var clients = $clientcarousel.children().length
	console.log(clients)
	var wLogo = 180
	var hLogo = parseInt(wLogo * 0.8)
	console.log(wLogo)
	var clientwidth = clients * wLogo
	$('#clients-list > li').css('width', wLogo)
	$('#clients-list > li').css('height', hLogo)
	$clientcarousel.css('width', clientwidth)

	var rotating = true
	var clientspeed = 5000
	var seeclients = setInterval(rotateClients, 0)

	$(document).on(
		{
			mouseenter: function () {
				rotating = false // turn off rotation when hovering
			},
			mouseleave: function () {
				rotating = true
			},
		},
		'li' //'#clients'
	)

	function rotateClients() {
		if (rotating != false) {
			//_ $('#clients').width($('#clients').parent().width() - 50)
			$('#clients').width($(window).width() - 600)   //todo Melhorar para mobile
			var $first = $('#clients-list li:first')
			let offX = '-' + $('#clients-list li').css('width')
			$first.animate(
				{ 'margin-left': offX },
				clientspeed,
				'linear',
				function () {
					$first.remove().css({ 'margin-left': '0px' })
					$('#clients-list li:last').after($first)
				}
			)
		}
	}
})
