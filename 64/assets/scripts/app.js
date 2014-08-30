
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
		img,
		imgdata,
		ev = {
			pageX: $(window).innerwidth / 2,
			pageY: $(window).innerHeight / 2
		},

		posX = new Float32Array(2048),
		posY = new Float32Array(2048),

		dirX = new Float32Array(2048),
		dirY = new Float32Array(2048),

		actualX = new Float32Array(2048),
		actualY = new Float32Array(2048),

		speed = new Float32Array(2048),
		momentum = new Float32Array(2048),

		radius = 250,

		Position = new Vector2(0,0),
		
		Direction = new Vector2(0,0);

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

		$(doc).on('click', cv, function(e){
			ev.pageX = e.pageX;
			ev.pageY = e.pageY;
		});

		bants.create();
		bants.render();
	};

	bants.rand = function(max) {
		return Math.floor( Math.random() * (max || 254)) + 1 ;
	};

	bants.bg = function () {
		cx.fillStyle = '#ffffff';
		cx.fillRect(0, 0, config.width, config.height);
		cx.fillStyle = 'rgba(249,103,45,1)';
	};

	bants.create = function() {
		for ( var i = 0, l = 2000; i < l; i++ ) {
			posX[i] = (config.width/2) + radius;
			posY[i] = config.height/2;

			directionX[i] = 0;
			directionY[i] = -1;

			momentum[i] = 0;

		}
	};

	bants.render = function() {
		
		bants.bg();

		cx.translate( posX[i], posY[i] );
		cx.rotate( vec.angle(true) );

		cx.beginPath();
		cx.moveTo(0,0);
		cx.lineTo(-15,-3);
		cx.lineTo(-15,3);
		cx.lineTo(0,0);

		cx.fill();
		cx.setTransform(1, 0, 0, 1, 0, 0);

		window.requestAnimationFrame(bants.render);
	};
	
	window.bants = bants;

})(window,document);

$(bants.init);