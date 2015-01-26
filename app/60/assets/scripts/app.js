
(function(win,doc) {
	
	var bants = {},
		lads_x = new Float32Array(2048),
		lads_y = new Float32Array(2048),
		lads_size = new Float32Array(2048),
		lads_opacity = new Float32Array(2048),
		numlads = 0,
		loopnum = 0,
		config = {},
		cv = doc.getElementsByTagName('canvas')[0],
		cx = cv.getContext('2d'),
		$win = $(win);
		
	bants.init = function () {
		
		config.width = $win.innerWidth();
		config.height = $win.innerHeight();

		cv.width = config.width;
		cv.height = config.height;

		cv.MSAAEnabled = true;
		cv.MSAASamples = 4;
	
		bants.render();
	};

	bants.bg = function () {
		cx.fillStyle = '#ffffff';
		cx.fillRect(0, 0, config.width, config.height);
	};

	bants.lad = function () {

	};

	bants.addlad = function ( index ) {
		lads_x[index || numlads] = Math.floor(Math.random() * config.width) - 50;
		lads_y[index || numlads] = Math.floor(Math.random() * config.height) - 50;
		lads_size[index || numlads] = Math.random() * 2;
		lads_opacity[index || numlads] = Math.random();
		numlads++;
	};

	bants.movelads = function () {
		for ( var i = 0; i < numlads; i++ ) {
			lads_x[i] += ( Math.random() );
			lads_y[i] += ( Math.random() );
		}
	};

	bants.render = function () {

		// bants.bg();
		loopnum++;

		for ( var i = 0; i < numlads; i++ ) {
			cx.beginPath();
			cx.fillStyle = 'rgba(249,103,45,' + lads_opacity[i] + ')';
	      	cx.arc(lads_x[i],lads_y[i], Math.random() * 2, 0, 2 * Math.PI, false);
			cx.fill();
			cx.setTransform(1, 0, 0, 1, 0, 0);
		}

		bants.movelads();

		if ( loopnum % 5 === 0 && numlads < 2048 ) {
			bants.addlad();
		}

		if ( loopnum % 20 === 0 ) {
			cx.fillStyle = 'rgba(255,255,255,0.1)';
			cx.fillRect(0, 0, config.width, config.height);
		}

		window.requestAnimationFrame( bants.render );
	};
	
	// Expose our bants to the window.
	window.bants = bants;

})(window,document);

$(bants.init);