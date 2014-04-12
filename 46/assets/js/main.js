
var FUNK = {

	init: function(){
		
		FUNK.canvas = document.getElementById('canvas');
		if (typeof FlashCanvas == "object") {
			FlashCanvas.initElement(FUNK.canvas);
		}

		if ( window.innerwidth <= 320 ) {
			FUNK.canvas.width = 640;
			FUNK.canvas.height = 1172;
		} else {
			FUNK.canvas.width = $(window).innerWidth();
			FUNK.canvas.height = $(window).innerHeight();
		}

		FUNK.canvas.MSAAEnabled = true;
		FUNK.canvas.MSAASamples = 4;

		FUNK.ctx = FUNK.canvas.getContext('2d');
		FUNK.ctx.strokeStyle = '#ffffff';
		// FUNK.ctx.globalCompositeOperation = "darker";

		FUNK.bants = [];
		FUNK.bants2 = [];
		FUNK.bants3 = [];
		FUNK.bants4 = [];
		FUNK.bants5 = [];
		FUNK.bants6 = [];
		FUNK.bants7 = [];
		FUNK.bants8 = [];
		FUNK.bants9 = [];

		FUNK.blocks = [];
		FUNK.verts = [];
		FUNK.spacing = 25; 
		FUNK.framenum = 0;
		FUNK.mousedown = false;
		FUNK.rotation = 1;

		FUNK.flip = 0;
		
		FUNK.center = new Vector2( FUNK.canvas.width/2, FUNK.canvas.height/2);

		FUNK.bottle = new Image();
		FUNK.bottle.src = 'assets/img/bottle.png';

		FUNK.drop = new Image();
		FUNK.drop.src = 'assets/img/drop.png';

		FUNK.vector = new Vector2( FUNK.canvas.width/2, 150 );
		// FUNK.vector = new Vector2( 600 , 300 );

		$(document).on('mousedown', 'canvas', function(event){
			FUNK.mousedown = true;
			FUNK.vector = new Vector2( FUNK.daveX, FUNK.daveY );
		});

		$(document).on('mouseup', 'canvas', function(event){
			FUNK.mousedown = false;
		});

		$(document).on('mousemove', 'canvas', function(event){
			if ( FUNK.mousedown === true ) {
				FUNK.daveX = event.pageX - event.currentTarget.offsetLeft;
				FUNK.daveY = event.pageY - event.currentTarget.offsetTop;
				FUNK.vector = new Vector2( FUNK.daveX, FUNK.daveY );
			}
		});

		$(document).on('touchmove touchstart', 'canvas', function(event){
			event.preventDefault();
			FUNK.mousedown = true;
			var touch =  event.originalEvent.touches[0] || event.originalEvent.changedTouches[0]
			FUNK.daveX = touch.pageX;
			FUNK.daveY = touch.pageY;
			FUNK.vector = new Vector2( FUNK.daveX, FUNK.daveY );
		});

		$(document).on('touchend', 'canvas', function(event){
			event.preventDefault();
			FUNK.mousedown = false;
		});

		FUNK.animate();
	},

	animate: function(){

		FUNK.framenum++;
		// FUNK.ctx.fillStyle = "rgba(255,255,255,.01)";
		// FUNK.ctx.fillRect(0,0,window.innerWidth,window.innerHeight);

		var scale = FUNK.vector.y - FUNK.canvas.height;

		for ( var i = 0; i < FUNK.bants.length; i++ ) {
			FUNK.bants[i].draw();
			FUNK.bants2[i].draw();
			FUNK.bants3[i].draw();
			FUNK.bants4[i].draw();
			FUNK.bants5[i].draw();
			FUNK.bants6[i].draw();
			FUNK.bants7[i].draw();
			FUNK.bants8[i].draw();
			FUNK.bants9[i].draw();
		}	

		if ( FUNK.mousedown && FUNK.framenum % 6 === 0 ) {
			
			// FUNK.bants2.push( new Bant( FUNK.vector ) );
			// FUNK.bants3.push( new Bant( FUNK.vector ) );
			// FUNK.bants4.push( new Bant( FUNK.vector ) );
			// FUNK.bants5.push( new Bant( FUNK.vector ) );
			// FUNK.bants6.push( new Bant( FUNK.vector ) );
			// FUNK.bants7.push( new Bant( FUNK.vector ) );
			// FUNK.bants8.push( new Bant( FUNK.vector ) );
			// FUNK.bants9.push( new Bant( FUNK.vector ) );

			// FUNK.bants2.push( new Bant( new Vector2( FUNK.vector.x + 8, FUNK.vector.y + 2) ) );
			// FUNK.bants3.push( new Bant( new Vector2( FUNK.vector.x + 7, FUNK.vector.y + 2) ) );
			// FUNK.bants4.push( new Bant( new Vector2( FUNK.vector.x + 2, FUNK.vector.y + 1) ) );
			// FUNK.bants5.push( new Bant( new Vector2( FUNK.vector.x + 5, FUNK.vector.y + 2) ) );
			// FUNK.bants6.push( new Bant( new Vector2( FUNK.vector.x + 14, FUNK.vector.y + 1) ) );
			// FUNK.bants7.push( new Bant( new Vector2( FUNK.vector.x + 1, FUNK.vector.y + 2) ) );
			// FUNK.bants8.push( new Bant( new Vector2( FUNK.vector.x + 10, FUNK.vector.y + 3) ) );
			// FUNK.bants9.push( new Bant( new Vector2( FUNK.vector.x + 2, FUNK.vector.y + 2) ) );

			FUNK.bants.push( new Bant( FUNK.vector ) );
			FUNK.bants2.push( new Bant( new Vector2( FUNK.vector.x+Math.floor( Math.random() * 25 )-12.5, FUNK.vector.y+Math.floor( Math.random() * 25 )-12.5 ) ) );
			FUNK.bants3.push( new Bant( new Vector2( FUNK.vector.x+Math.floor( Math.random() * 25 )-12.5, FUNK.vector.y+Math.floor( Math.random() * 25 )-12.5 ) ) );
			FUNK.bants4.push( new Bant( new Vector2( FUNK.vector.x+Math.floor( Math.random() * 25 )-12.5, FUNK.vector.y+Math.floor( Math.random() * 25 )-12.5 ) ) );
			FUNK.bants5.push( new Bant( new Vector2( FUNK.vector.x+Math.floor( Math.random() * 25 )-12.5, FUNK.vector.y+Math.floor( Math.random() * 25 )-12.5 ) ) );
			FUNK.bants6.push( new Bant( new Vector2( FUNK.vector.x+Math.floor( Math.random() * 16 )-8, FUNK.vector.y+Math.floor( Math.random() * 16 )-8 ) ) );
			FUNK.bants7.push( new Bant( new Vector2( FUNK.vector.x+Math.floor( Math.random() * 16 )-8, FUNK.vector.y+Math.floor( Math.random() * 16 )-8 ) ) );
			FUNK.bants8.push( new Bant( new Vector2( FUNK.vector.x+Math.floor( Math.random() * 16 )-8, FUNK.vector.y+Math.floor( Math.random() * 16 )-8 ) ) );
			FUNK.bants9.push( new Bant( new Vector2( FUNK.vector.x+Math.floor( Math.random() * 16 )-8, FUNK.vector.y+Math.floor( Math.random() * 16 )-8 ) ) );
		}		

		if ( FUNK.bants.length > 2 ) { 
			
			var bants = [],
				bants2 = [],
				bants3 = [],
				bants4 = [],
				bants5 = [],
				bants6 = [],
				bants7 = [],
				bants8 = [],
				bants9 = [];

			for ( var i = 0; i < FUNK.bants.length; i++ ) {
				if ( FUNK.bants[i].counter < 100 ) {
					bants.push(FUNK.bants[i]);
				}
			}
			for ( var i = 0; i < FUNK.bants2.length; i++ ) {
				if ( FUNK.bants2[i].counter < 100 ) {
					bants2.push(FUNK.bants2[i]);
				}
			}
			for ( var i = 0; i < FUNK.bants3.length; i++ ) {
				if ( FUNK.bants3[i].counter < 100 ) {
					bants3.push(FUNK.bants3[i]);
				}
			}
			for ( var i = 0; i < FUNK.bants4.length; i++ ) {
				if ( FUNK.bants4[i].counter < 100 ) {
					bants4.push(FUNK.bants4[i]);
				}
			}
			for ( var i = 0; i < FUNK.bants5.length; i++ ) {
				if ( FUNK.bants5[i].counter < 100 ) {
					bants5.push(FUNK.bants5[i]);
				}
			}
			for ( var i = 0; i < FUNK.bants6.length; i++ ) {
				if ( FUNK.bants6[i].counter < 100 ) {
					bants6.push(FUNK.bants6[i]);
				}
			}
			for ( var i = 0; i < FUNK.bants7.length; i++ ) {
				if ( FUNK.bants7[i].counter < 100 ) {
					bants7.push(FUNK.bants7[i]);
				}
			}
			for ( var i = 0; i < FUNK.bants8.length; i++ ) {
				if ( FUNK.bants8[i].counter < 100 ) {
					bants8.push(FUNK.bants8[i]);
				}
			}
			for ( var i = 0; i < FUNK.bants9.length; i++ ) {
				if ( FUNK.bants9[i].counter < 100 ) {
					bants9.push(FUNK.bants9[i]);
				}
			}
			

			FUNK.ctx.lineWidth = 1;
			FUNK.ctx.strokeStyle = 'rgba(0,86,165,.06)';
			drawSpline( FUNK.ctx, bants, 0.33333, false );
			FUNK.ctx.lineWidth = 2;
			FUNK.ctx.strokeStyle = 'rgba(0,86,165,.01)';
			drawSpline( FUNK.ctx, bants2, 0.33333, false );
			FUNK.ctx.lineWidth = 1;
			FUNK.ctx.strokeStyle = 'rgba(0,86,165,.1)';
			drawSpline( FUNK.ctx, bants3, 0.33333, false );
			FUNK.ctx.lineWidth = 1;
			FUNK.ctx.strokeStyle = 'rgba(0,86,165,.08)';
			drawSpline( FUNK.ctx, bants4, 0.33333, false );
			FUNK.ctx.lineWidth = 1;
			FUNK.ctx.strokeStyle = 'rgba(0,86,165,.04)';
			drawSpline( FUNK.ctx, bants5, 0.33333, false );
			FUNK.ctx.lineWidth = 4;
			FUNK.ctx.strokeStyle = 'rgba(0,86,165,.06)';
			drawSpline( FUNK.ctx, bants6, 0.33333, false );
			FUNK.ctx.lineWidth = 1;
			FUNK.ctx.strokeStyle = 'rgba(0,86,165,.06)';
			drawSpline( FUNK.ctx, bants7, 0.33333, false );
			FUNK.ctx.lineWidth = 1;
			FUNK.ctx.strokeStyle = 'rgba(0,86,165,.06)';
			drawSpline( FUNK.ctx, bants8, 0.33333, false );
			FUNK.ctx.lineWidth = 3;
			FUNK.ctx.strokeStyle = 'rgba(0,86,165,.06)';
			drawSpline( FUNK.ctx, bants9, 0.33333, false );


			// drawSpline( FUNK.ctx, points2, 0.33333, false );
			// drawSpline( FUNK.ctx, points3, 0.33333, false );
			// drawSpline( FUNK.ctx, points4, 0.33333, false );
			// drawSpline( FUNK.ctx, points5, 0.33333, false );
			// drawSpline( FUNK.ctx, points6, 0.33333, false );
			// drawSpline( FUNK.ctx, points7, 0.33333, false );
			// drawSpline( FUNK.ctx, points8, 0.33333, false );
			// drawSpline( FUNK.ctx, points9, 0.33333, false );
		}


		requestAnimationFrame( FUNK.animate );
	},

	drawLine: function(start, end, m) {
		FUNK.ctx.beginPath();
		FUNK.ctx.moveTo(start.x+m,start.y+m);
		FUNK.ctx.lineTo(end.x+m, end.y+m);
		FUNK.ctx.strokeStyle = '#ffffff';
		FUNK.ctx.stroke();
	},

	shadeColor: function(color, percent) {   
	    var num = parseInt(color.slice(1),16), amt = Math.round(2.55 * percent), R = (num >> 16) + amt, B = (num >> 8 & 0x00FF) + amt, G = (num & 0x0000FF) + amt;
	    return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (B<255?B<1?0:B:255)*0x100 + (G<255?G<1?0:G:255)).toString(16).slice(1);
	},

	convertPath: function( path ) {
		var newPath = "";
		return newPath;
	},

	gfx: {
		circle: function( pos, radius ) {

		},

		line: function( start, stop ) {

		}, 

		rect: function( start, top ) {
			
		}
	}
}


$(function(){

	FUNK.init();
	
	setTimeout(function() {
		try { window.scrollTo(0, 1); } catch(e) { }
	}, 0);

});
