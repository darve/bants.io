
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
		});

		$(document).on('touchend', 'canvas', function(event){
			event.preventDefault();
			// FUNK.mousedown = false;
		});


		FUNK.animate();
	},

	animate: function(){
		requestAnimationFrame( FUNK.animate );
		FUNK.framenum++;
		FUNK.ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
		FUNK.ctx.fillStyle = "#2b2c2f";
		FUNK.ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
		FUNK.ctx.fillStyle = 'rgba(255,255,255,0.4)';

		for ( var i = 0; i < FUNK.bants.length; i++ ) {
			FUNK.bants[i].draw();
		}

		// for ( var i = 0; i < FUNK.blocks.length; i++ ) {
		// 	FUNK.blocks[i].draw();
		// }

		for ( var i = 0; i < FUNK.bants.length; i++ ) {
			if ( FUNK.bants[i].dead === true ) {
				FUNK.bants[i] = {};
				FUNK.bants.splice(i,1);
				// FUNK.bants[i].pos = new Vector2( Math.floor( Math.random() * FUNK.canvas.width ), FUNK.canvas.height );
				// FUNK.bants[i].vector = new Vector2( 0, -1);
				// FUNK.bants[i].dead = false;
				// FUNK.bants.push( new Bant( new Vector2( FUNK.canvas.width/2, FUNK.canvas.height), new Vector2(0, -1)));
			}
		}

		if ( FUNK.framenum % 2 === 0 ) {

			// if ( FUNK.framenum % 2 === 0 ) {
			// 	FUNK.bants.push( new Bant( new Vector2( 640, 351), new Vector2( 0, 0) ));		
			// 	FUNK.bants.push( new Bant( new Vector2( 640, 351), new Vector2( 1, -1) ));	
			// } else {
			// 	FUNK.bants.push( new Bant( new Vector2( 640, 351), new Vector2( -1, -1) ));	
			// 	FUNK.bants.push( new Bant( new Vector2( 640, 351), new Vector2( 0, -1) ));	
			// }

		FUNK.bants.push( new Bant( new Vector2( FUNK.canvas.width/2, FUNK.canvas.height), new Vector2( 0, -1) ));	
		// FUNK.bants.push( new Bant( new Vector2( FUNK.canvas.width/2, FUNK.canvas.height/2), new Vector2( 0, 0) ));	
		// FUNK.bants.push( new Bant( new Vector2( FUNK.canvas.width/2, FUNK.canvas.height/2), new Vector2( -1, 0) ));	

		// FUNK.bants.push( new Bant( new Vector2( FUNK.canvas.width/2, FUNK.canvas.height/2), new Vector2( 1, 1) ));	
		// FUNK.bants.push( new Bant( new Vector2( FUNK.canvas.width/2, FUNK.canvas.height/2), new Vector2( 0, 1) ));	
		// FUNK.bants.push( new Bant( new Vector2( FUNK.canvas.width/2, FUNK.canvas.height/2), new Vector2( -1, 1) ));	
			
		// FUNK.bants.push( new Bant( new Vector2( FUNK.canvas.width/2, FUNK.canvas.height/2), new Vector2( 1, -1) ));	
		// FUNK.bants.push( new Bant( new Vector2( FUNK.canvas.width/2, FUNK.canvas.height/2), new Vector2( 0, -1) ));	
		// FUNK.bants.push( new Bant( new Vector2( FUNK.canvas.width/2, FUNK.canvas.height/2), new Vector2( -1, -1) ));	
		}

		// FUNK.ctx.font = "bold 12px sans-serif";
		// FUNK.ctx.fillStyle = "#b4d455";
		// FUNK.ctx.fillText( 'FUNK.vector: ' + FUNK.vector.toString(), 15, 20 );
		// FUNK.ctx.fillText( 'Bant direction: ' + (FUNK.bants[0].pos.minusNew( FUNK.bants[0].vector.multiplyNew(100) ).normalise().angle(true)-(Math.PI/2)), 15, 20);

	},

	shadeColor: function(color, percent) {   
	    var num = parseInt(color.slice(1),16), amt = Math.round(2.55 * percent), R = (num >> 16) + amt, B = (num >> 8 & 0x00FF) + amt, G = (num & 0x0000FF) + amt;
	    return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (B<255?B<1?0:B:255)*0x100 + (G<255?G<1?0:G:255)).toString(16).slice(1);
	},

	convertPath: function( path ) {
		var newPath = "";
		return newPath;
	}
}


$(function(){

	FUNK.init();
	
	setTimeout(function() {
		try { window.scrollTo(0, 1); } catch(e) { }
	}, 0);

});
