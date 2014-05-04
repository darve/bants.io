
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
		coloursc
		dotsX = new Uint32Array(300),
		dotsY = new Uint32Array(300);
		
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
		cx.globalCompositeOperation = 'lighter';

		img = new Image();
		
		img.onload = function(e){
			cx.drawImage(this, 0, 0)
			// var xstart = (cv.width - 300)/2, 
			// ystart = (cv.height - 300)/2;
			// imgdata = cx.getImageData(xstart, ystart, xstart+300, ystart+300);
			imgdata = cx.getImageData(0,0,300,300);
			cx.clearRect(0,0,cv.width,cv.height);
		};

		img.src = 'http://0.0.0.0:3000/62/darve.png';
	
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
			if ( mousedown == true ) {
				bants.render();
			}
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
			bants.render();
		});

		// bants.render();
	};

	bants.rand = function() {
		return Math.floor( Math.random() * 254) + 1 ;
	};

	bants.bg = function (e) {
		e.preventDefault();
		cx.fillStyle = '#ffffff';
		cx.fillRect(0, 0, config.width, config.height);
	};

	bants.render = function() {

			var d = imgdata.data;
			var p = 0;
			// for ( var i = 0; i < 1000; i+=4 ) {
			// 	// console.log(brightness([data[i],data[i],data[i+2],data[i+1],data[i+1]]));
			// 	var red = data[p];
			// 	var green = data[p+1];
			// 	var blue = data[p+2];
			// 	var alpha = data[p+3];
			// 	console.log(red,green,blue,alpha);
			// 	cx.fillStyle = 'rgba(' + red + ',' + blue + ',' + green + ',' + alpha + ')';
			// 	p+=4;
			// }

			// Data pointer
			// var p = 0;
			// cx.fillStyle = 'rgba(' + bants.rand() + ',' + bants.rand() + ',200,1)';
			// cx.fillStyle = 'rgba(0,0,0,.' + Math.floor(Math.random() * 10) +')';

			// cx.beginPath();
	  		// cx.arc((ev.pageX+x)-150, (ev.pageY+y)-150, 3, 0, 2 * Math.PI, false);
			// cx.fill();

			for ( var y = 0, yl = 600; y < yl; y+=2 ) {
				for ( var x = 0, xl = 600; x < xl; x+=2 ) {
					// var red = data[p];
					// var green = data[p+1];
					// var blue = data[p+2];
					// var alpha = data[p+3];
					// console.log(red,green,blue,alpha);
					// cx.fillStyle = 'rgba(' + red + ',' + blue + ',' + green + ',' + alpha + ')';
					cx.fillStyle = 'rgba(' + d[p] + ',' + d[p+1] + ',' + d[p+2] + ',.1)';
					//' + d[p+3] + ')';
					// cx.fillStyle = 'rgba(0,0,0,.0' + brightness([d[p],d[p],d[p+2],d[p+1],d[p+1]]) + ')';
 					cx.fillRect( (ev.pageX+x)-(xl/2), (ev.pageY+y)-(yl/2), 2, 2 );
					p+= 4;
				}
			}

		// cx.drawImage(img, 0, 0);
		// window.requestAnimationFrame( bants.render );
	};
	
	// Expose our bants to the window.
	window.bants = bants;

})(window,document);

$(bants.init);