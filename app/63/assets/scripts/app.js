
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

		reds = new Float32Array(128000),
		blues = new Float32Array(128000),
		greens = new Float32Array(128000),
		alphas = new Float32Array(128000),

		dotsX = new Float32Array(128000),
		dotsY = new Float32Array(128000),
		vecX = new Float32Array(128000),
		vecY = new Float32Array(128000),

		mVecX = new Float32Array(128000),
		mVecY = new Float32Array(128000),

		density = 8,
		scale = 1,
		c = 0,
		momentum = 100;
		
	var brightness = function (color) {
		// (R+R+B+G+G+G)/6
		return ( color[0] + color[0] + color[1] + color[2] + color[2] + color[2] ) / 6;
	};

	bants.init = function () {
		
		config.width = $win.innerWidth();
		config.height = $win.innerHeight();
		cv.width = config.width;
		cv.height = config.height;
		cv.MSAAEnabled = true;
		cv.MSAASamples = 4;
		// cx.globalCompositeOperation = 'darker';

		img = new Image();
		
		img.onload = function(e){
			cx.drawImage(this, 0, 0);
			imgdata = cx.getImageData(0,0,this.width,this.height);
			cx.clearRect(0,0,cv.width,cv.height);
			bants.buildImage();
		};

		img.src = 'festival-twats.png';
	
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
			// if ( mousedown == true ) {
			// 	bants.render();
			// }
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

		cv.ondragover = function(e) {
			e.preventDefault();
			// console.log(e);
		};

		cv.ondrop = function(e) {
			e.preventDefault();

			var reader = new FileReader();
			reader.onload = function(e) {
				reds = new Float32Array(190000),
				blues = new Float32Array(190000),
				greens = new Float32Array(190000),
				alphas = new Float32Array(190000),

				dotsX = new Float32Array(190000),
				dotsY = new Float32Array(190000),
				vecX = new Float32Array(190000),
				vecY = new Float32Array(190000),
				img.src = e.target.result;
			};
			reader.readAsDataURL(e.dataTransfer.files[0]);
		}

		bants.render();
	};

	bants.rand = function() {
		return Math.floor( Math.random() * 254) + 1 ;
	};

	bants.bg = function () {
		cx.fillStyle = '#ffffff';
		cx.fillRect(0, 0, config.width, config.height);
	};

	bants.buildImage = function() {
		
		var d = imgdata.data,
			p = 0;

		// x & y and eventual dimenions
		for ( var y = 0, yl = img.width; y < yl; y+=density ) {
			for ( var x = 0, xl = img.height; x < xl; x+=density ) {

				// Add colours to their arrays
				reds[c] = d[p];
				greens[c] = d[p+1];
				blues[c] = d[p+2];
				alphas[c] = d[p+3];

				// add positions
				dotsX[c] = ((config.width / 2)-(img.width/2))+x;
				dotsY[c] = ((config.height / 2)-(img.height/2))+y;

				vecX[c] = config.width/2;
				vecY[c] = config.height/2;

				mVecX = Math.random() - Math.random();
				mVecY = Math.random() - Math.random();

				p += (4 * density);
				c++;
			}
			p = (y * img.width) * 4;
		}
	};

	bants.render = function() {

		bants.bg();
		// Move the vec dots closer to their end positions
		for ( var i = 0, l = c; i < l; i++ ) {

			var to = new Vector2( dotsX[i], dotsY[i] ),
				from = new Vector2( vecX[i], vecY[i] ),
				distance = from.minusNew( to ).magnitude(),
				mouse = new Vector2( ev.pageX, ev.pageY );

			if ( from.isCloseTo( mouse, 60 ) ) {
				var angle = mouse.minusNew( from ).normalise();
				from.minusEq( angle.multiplyEq(10) );
				vecX[i] = from.x;
				vecY[i] = from.y;

			} else if ( !from.equals(to) ) {
				var angle = to.minusNew( from ).normalise();
				from.plusEq( angle.multiplyEq(distance/10) );

				if ( !from.isCloseTo( mouse, 60) ) {
					vecX[i] = from.x;
					vecY[i] = from.y;
				}
			}
		}

		// Draw the dots
		for ( var i = 0, l = c; i < l; i++ ) {
			cx.fillStyle = 'rgba(' + reds[i] + ',' + greens[i] + ',' + blues[i] + ',1)';
			cx.fillRect( vecX[i], vecY[i], density, density );
		}

		window.requestAnimationFrame(bants.render);
	};
	
	window.bants = bants;

})(window,document);

$(bants.init);