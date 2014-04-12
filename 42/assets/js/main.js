
var FUNK = {

	init: function(){
		
		FUNK.canvas = document.getElementById('canvas');
		FUNK.canvas.width = window.innerWidth;
		FUNK.canvas.height = window.innerHeight;
		FUNK.canvas.MSAAEnabled = true;
		FUNK.canvas.MSAASamples = 4;

		FUNK.ctx = FUNK.canvas.getContext('2d');
		FUNK.ctx.strokeStyle = '#ffffff';
		// FUNK.ctx.globalCompositeOperation = "darker";

		FUNK.bants = [];
		FUNK.blocks = [];
		FUNK.verts = [];
		FUNK.spacing = 25; 
		FUNK.framenum = 0;
		FUNK.mousedown = false;
		FUNK.rotation = 1;

		FUNK.flip = 0;
		
		FUNK.center = new Vector2( FUNK.canvas.width/2, FUNK.canvas.height/2);

		// FUNK.vector = new Vector2( FUNK.canvas.width/2, FUNK.canvas.height/2 );
		// FUNK.vector = new Vector2( 600 , 300 );

		$(document).on('mousedown', 'canvas', function(event){
			FUNK.mousedown = true;
		});

		$(document).on('mouseup', 'canvas', function(event){
			FUNK.mousedown = false;
			delete FUNK.vector;
			delete FUNK.lastvector;
		});

		$(document).on('mousemove', 'canvas', function(event){
			// if ( FUNK.mousedown === true ) {
				FUNK.daveX = event.pageX - event.currentTarget.offsetLeft;
				FUNK.daveY = event.pageY - event.currentTarget.offsetTop;
				FUNK.vector = new Vector2( FUNK.daveX, FUNK.daveY );
			// }
		});

		$(document).on('touchmove touchstart', 'canvas', function(event){
			event.preventDefault();
			FUNK.mousedown === true;
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
		requestAnimationFrame( FUNK.animate );
		FUNK.framenum++;
		// FUNK.ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
		FUNK.ctx.fillStyle = "rgba(43,44,47,0.1)";
		FUNK.ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
		FUNK.ctx.fillStyle = 'rgba(255,255,255,0.6)';

		// for ( var i = 0, j = FUNK.verts.length; i < j; i++ ) {
		// 	FUNK.verts[i].draw();
		// }

		if ( FUNK.lastvector && FUNK.vector ) {
			FUNK.drawLine( FUNK.vector, FUNK.lastvector, (0) );
			FUNK.drawLine( FUNK.vector, FUNK.lastvector, (5) );
			FUNK.drawLine( FUNK.vector, FUNK.lastvector, (10) );
			FUNK.drawLine( FUNK.vector, FUNK.lastvector, (15) );
			FUNK.drawLine( FUNK.vector, FUNK.lastvector, (20) );
			FUNK.drawLine( FUNK.vector, FUNK.lastvector, (25) );
			FUNK.drawLine( FUNK.vector, FUNK.lastvector, (30) );
			FUNK.drawLine( FUNK.vector, FUNK.lastvector, (35) );
			FUNK.drawLine( FUNK.vector, FUNK.lastvector, (40) );
			FUNK.drawLine( FUNK.vector, FUNK.lastvector, (45) );
			FUNK.drawLine( FUNK.vector, FUNK.lastvector, (50) );
			FUNK.drawLine( FUNK.vector, FUNK.lastvector, (-5) );
			FUNK.drawLine( FUNK.vector, FUNK.lastvector, (-10) );
			FUNK.drawLine( FUNK.vector, FUNK.lastvector, (-15) );
			FUNK.drawLine( FUNK.vector, FUNK.lastvector, (-20) );
			FUNK.drawLine( FUNK.vector, FUNK.lastvector, (-25) );
			FUNK.drawLine( FUNK.vector, FUNK.lastvector, (-30) );
			FUNK.drawLine( FUNK.vector, FUNK.lastvector, (-35) );
			FUNK.drawLine( FUNK.vector, FUNK.lastvector, (-40) );
			FUNK.drawLine( FUNK.vector, FUNK.lastvector, (-45) );
			FUNK.drawLine( FUNK.vector, FUNK.lastvector, (-50) );
		}

		if ( FUNK.vector ) {
			FUNK.lastvector = FUNK.vector;	
		}
		
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
