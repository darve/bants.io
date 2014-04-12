
var FUNK = {

	init: function(){
		
		FUNK.canvas = document.getElementById('canvas');
		FUNK.canvas.width = window.innerWidth;
		FUNK.canvas.height = window.innerHeight;
		FUNK.canvas.MSAAEnabled = true;
		FUNK.canvas.MSAASamples = 4;

		FUNK.ctx = FUNK.canvas.getContext('2d');
		FUNK.ctx.strokeStyle = '#ffffff';
		FUNK.ctx.globalCompositeOperation = "lighter";

		FUNK.bants = [];
		FUNK.blocks = [];
		FUNK.verts = [];
		FUNK.spacing = 25; 
		FUNK.framenum = 0;
		FUNK.mousedown = false;
		FUNK.rotation = 1;

		FUNK.flip = 0;
		
		// FUNK.vector = new Vector2( FUNK.canvas.width/2, FUNK.canvas.height/2 );
		FUNK.vector = new Vector2( 600 , 300 );

		$(document).on('mousedown', 'canvas', function(event){
			// FUNK.mousedown = true;
		});

		$(document).on('mouseup', 'canvas', function(event){
			// FUNK.mousedown = false;
		});

		$(document).on('mousemove', 'canvas', function(event){
			FUNK.daveX = event.pageX - event.currentTarget.offsetLeft;
			FUNK.daveY = event.pageY - event.currentTarget.offsetTop;
			FUNK.vector = new Vector2( FUNK.daveX, FUNK.daveY );
		});

		$(document).on('touchmove touchstart', 'canvas', function(event){
			event.preventDefault();
			// FUNK.mousedown === true;
			var touch =  event.originalEvent.touches[0] || event.originalEvent.changedTouches[0]
			FUNK.daveX = touch.pageX;
			FUNK.daveY = touch.pageY;
			FUNK.vector = new Vector2( touch.pageX, touch.pageY );
			FUNK.bants.push( new Bant( FUNK.vector, new Vector2( 0.4, -1.4) ) );
		});

		$(document).on('touchend', 'canvas', function(event){
			event.preventDefault();
			// FUNK.mousedown = false;
		});

		FUNK.verts.push( new Vert( new Vector2( 0, 0), new Vector2(FUNK.canvas.width,FUNK.canvas.height) ) );
		FUNK.verts.push( new Vert( new Vector2( FUNK.canvas.width, 0), new Vector2(-FUNK.canvas.width,FUNK.canvas.height) ) );
		FUNK.verts.push( new Vert( new Vector2( 0, FUNK.canvas.height/2), new Vector2(FUNK.canvas.width,0) ) );

		FUNK.animate();
	},

	animate: function(){
		requestAnimationFrame( FUNK.animate );
		FUNK.framenum++;
		FUNK.ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
		FUNK.ctx.fillStyle = "#2b2c2f";
		FUNK.ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
		FUNK.ctx.fillStyle = 'rgba(255,255,255,0.4)';

		// if ( FUNK.bants[0] ) {		
		// 	FUNK.V = FUNK.verts[0].start.minusNew( FUNK.bants[0].pos ).reverse();
		// 	FUNK.N = FUNK.verts[0].normal;
		// 	FUNK.U = FUNK.N.multiplyNew( FUNK.V.dot( FUNK.N ) / FUNK.N.dot( FUNK.N ) );
		// 	// FUNK.U = FUNK.V.dot( FUNK.N );
		// 	FUNK.W = FUNK.V.minusNew( FUNK.U );
		// }

		for ( var i = 0, j = FUNK.bants.length; i < j; i++ ) {
			if ( typeof FUNK.bants[i].draw != 'undefined' ) FUNK.bants[i].draw();

			// FUNK.ctx.beginPath();
			// FUNK.ctx.moveTo( FUNK.bants[0].pos.x, FUNK.bants[0].pos.y );
			// FUNK.ctx.lineTo( FUNK.W.x, FUNK.W.y );
			// FUNK.ctx.strokeStyle = '#ff00ff';
			// FUNK.ctx.stroke();
			// FUNK.ctx.setTransform(1, 0, 0, 1, 0, 0);
		}

		for ( var i = 0, j = FUNK.verts.length; i < j; i++ ) {
			FUNK.verts[i].draw();
		}

		for ( var i = 0, j = FUNK.bants.length; i < j; i++ ) {
			if ( FUNK.bants[i].dead === true ) {
				FUNK.bants[i] = {};
			}
		}

		if ( FUNK.framenum % 30 === 0 ) {
			FUNK.bants.push( new Bant( new Vector2( FUNK.canvas.width/2, FUNK.canvas.height), new Vector2( 0, -7) ));	
		}
		
		// FUNK.ctx.setTransform(1, 0, 0, 1, 0, 0);
		// FUNK.ctx.font = "bold 12px sans-serif";
		// FUNK.ctx.fillStyle = "#b4d455";
		// FUNK.ctx.fillText( 'Vert normal: ' + FUNK.normal.normalise(), 15, 20 );		
		// if ( FUNK.bants[0] ) FUNK.ctx.fillText( 'D1Y: ' + FUNK.verts[0].start.minusNew( FUNK.bants[0].pos ).reverse().dot(FUNK.verts[0].normal), 15, 40 );
		// if ( FUNK.bants[0] ) FUNK.ctx.fillText( 'vert.start.pos: ' + FUNK.verts[0].start.toString(), 15, 40 );
		// if ( FUNK.bants[0] ) FUNK.ctx.fillText( 'bant.pos: ' + FUNK.bants[0].pos.toString(), 15, 60 );
		// if ( FUNK.bants[0] ) FUNK.ctx.fillText( 'vert.normal: ' + FUNK.verts[0].normal.toString(), 15, 80 );
		// if ( FUNK.bants[0] ) FUNK.ctx.fillText( 'P1C: ' + FUNK.verts[0].start.minusNew( FUNK.bants[0].pos ).reverse(), 15, 100 );
		// if ( FUNK.bants[0] ) FUNK.ctx.fillText( 'D1: ' + Math.abs(FUNK.verts[0].start.minusNew( FUNK.bants[0].pos ).reverse().dot(FUNK.verts[0].normal)), 15, 120 );
		// if ( FUNK.bants[0] ) FUNK.ctx.fillText( 'ANGLE TO PLANE: ' + FUNK.verts[0].normal.angle(), 15, 140 );
		// if ( FUNK.bants[0] ) FUNK.ctx.fillText( 'bant velocity magnitude: ' + FUNK.bants[0].velocity.magnitude(), 15, 160 );

		// if ( FUNK.bants[0] ) FUNK.ctx.fillText( 'V: ' + FUNK.V, 15, 20 );
		// if ( FUNK.bants[0] ) FUNK.ctx.fillText( 'U: ' + FUNK.U, 15, 40 );
		// if ( FUNK.bants[0] ) FUNK.ctx.fillText( 'W: ' + FUNK.W, 15, 60 );
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
