
(function(win,doc) {
	
	var bants = {},
		width = Math.random() * 3,
		opacity = Math.random(),
		numlads = 0,
		loopnum = 0,
		config = {},
		cv = doc.getElementsByTagName('canvas')[0],
		cx = cv.getContext('2d'),
		$win = $(win),
		mousedown = false,
		ev = {
			pageX: $(window).innerwidth / 2,
			pageY: $(window).innerHeight / 2
		};
		
	bants.init = function () {
		
		config.width = $win.innerWidth();
		config.height = $win.innerHeight();

		cv.width = config.width;
		cv.height = config.height;

		cv.MSAAEnabled = true;
		cv.MSAASamples = 4;
	
		$(doc).on('mousedown', 'canvas', function(e){
			e.preventDefault();
			mousedown = true;
		});

		$(doc).on('mouseup', 'canvas', function(e){
			e.preventDefault();
			mousedown = false;
		});

		$(doc).on('mousemove', 'canvas', function(e){
			ev = e;
		});

		$(doc).on('touchstart', 'canvas', function(e){
			e.preventDefault();
			mousedown = true;
		});

		$(doc).on('touchend', 'canvas', function(e){
			e.preventDefault();
			mousedown = false;
		});

		$(doc).on('touchmove', 'canvas', function(e){
			e.preventDefault();
			ev = e.originalEvent.changedTouches[0];
		});

		$(doc).on('click', 'a.clear', bants.bg);

		bants.render();
	};

	bants.bg = function (e) {
		e.preventDefault();
		cx.fillStyle = '#ffffff';
		cx.fillRect(0, 0, config.width, config.height);
	};

	bants.render = function() {
		if ( mousedown ) {
		 	cx.beginPath();
		 	cx.fillStyle = 'rgba(249,103,45,' + Math.random() + ')';
	       	cx.arc(ev.pageX,ev.pageY, Math.random() * 7, 0, 2 * Math.PI, false);
		 	cx.fill();
		 	cx.setTransform(1, 0, 0, 1, 0, 0);
		}
		window.requestAnimationFrame( bants.render );
	};
	
	// Expose our bants to the window.
	window.bants = bants;

})(window,document);

$(bants.init);