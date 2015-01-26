
var FUNK = {

	init: function(){
		
		FUNK.canvas = document.getElementById('canvas');
		FUNK.canvas.width = window.innerWidth;
		FUNK.canvas.height = window.innerHeight;
		FUNK.canvas.MSAAEnabled = true;
		FUNK.canvas.MSAASamples = 4;
		FUNK.ctx = FUNK.canvas.getContext('2d');
		FUNK.ctx.strokeStyle = '#ffffff';

		FUNK.bants = [];
		FUNK.spacing = 25; 

		// for ( var i = 0; i < (window.innerHeight / FUNK.spacing)-1; i++ ) {
		// 	for ( var f = 0; f < (window.innerWidth / FUNK.spacing); f++ ) {
		// 		FUNK.bants.push( new Bant( new Vector2( f*FUNK.spacing , i*FUNK.spacing ), new Vector2( 0, 1 ) ) );	
		// 	}
		// }

		FUNK.vector = new Vector2( -1000, -1000 );

		$(document).on('mousemove', 'canvas', function(event){
			FUNK.daveX = event.pageX - event.currentTarget.offsetLeft;
			FUNK.daveY = event.pageY - event.currentTarget.offsetTop;
			FUNK.vector = new Vector2( FUNK.daveX, FUNK.daveY );
		});

		$(document).on('touchmove', 'canvas', function(event){
			event.preventDefault();
			var touch =  event.originalEvent.touches[0] || event.originalEvent.changedTouches[0]
			FUNK.daveX = touch.pageX;
			FUNK.daveY = touch.pageY;
			FUNK.vector = new Vector2( FUNK.daveX, FUNK.daveY );
		});

		$(document).on('touchend', 'canvas', function(event){
			event.preventDefault();
			FUNK.vector = new Vector2(-1000, -1000);
		});

		FUNK.animate();
	},

	animate: function(){
		requestAnimationFrame( FUNK.animate );
		FUNK.ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
		FUNK.ctx.fillStyle = "#000000";
		FUNK.ctx.fillRect(0,0,window.innerWidth,window.innerHeight);

		for ( var i = 0; i < FUNK.bants.length; i++ ) {
			FUNK.bants[i].draw();
		}

		for ( var i = 0; i < FUNK.bants.length; i++ ) {
			if ( FUNK.bants[i].dead === true ) {
				// FUNK.bants.splice(i,1);
				FUNK.bants[i].pos = new Vector2( FUNK.canvas.width/2, FUNK.canvas.height );
				FUNK.bants[i].vector = new Vector2( 0, -1);
				FUNK.bants[i].dead = false;
				// FUNK.bants.push( new Bant( new Vector2( FUNK.canvas.width/2, FUNK.canvas.height), new Vector2(0, -1)));
			}
		}

		if ( FUNK.bants.length < 150 ) {
			FUNK.bants.push( new Bant( new Vector2( FUNK.canvas.width/2, FUNK.canvas.height), new Vector2(0, -1)));
		}

	},

	shadeColor: function(color, percent) {   
	    var num = parseInt(color.slice(1),16), amt = Math.round(2.55 * percent), R = (num >> 16) + amt, B = (num >> 8 & 0x00FF) + amt, G = (num & 0x0000FF) + amt;
	    return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (B<255?B<1?0:B:255)*0x100 + (G<255?G<1?0:G:255)).toString(16).slice(1);
	}
}


$(function(){

	FUNK.init();
	
	setTimeout(function() {
		try { window.scrollTo(0, 1); } catch(e) { }
	}, 0);

});