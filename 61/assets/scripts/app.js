
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
		mousedown = false;
		
	bants.init = function () {
		
		config.width = $win.innerWidth();
		config.height = $win.innerHeight();

		cv.width = config.width;
		cv.height = config.height;

		cv.MSAAEnabled = true;
		cv.MSAASamples = 4;
	
		$(doc).on('mousedown', 'canvas', function(e){
			mousedown = true;
		});

		$(doc).on('mouseup', 'canvas', function(e){
			mousedown = false;
		});

		$(doc).on('mousemove', 'canvas', function(e){
			if ( mousedown ) {

			 	cx.beginPath();
			 	cx.fillStyle = 'rgba(249,103,45,' + Math.random() + ')';
		       	cx.arc(e.pageX,e.pageY, Math.random() * 7, 0, 2 * Math.PI, false);
			 	cx.fill();
			 	cx.setTransform(1, 0, 0, 1, 0, 0);
			}
		});

		// bants.render();
	};

	bants.bg = function () {
		cx.fillStyle = '#ffffff';
		cx.fillRect(0, 0, config.width, config.height);
	};
	
	// Expose our bants to the window.
	window.bants = bants;

})(window,document);

$(bants.init);