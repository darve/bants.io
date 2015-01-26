
var FUNK = {

	init: function(){
		FUNK.$canvas = $('canvas');
		FUNK.canvas = FUNK.$canvas[0];
		FUNK.canvas.width = FUNK.$canvas.width();
		FUNK.canvas.height = FUNK.$canvas.height();
		FUNK.canvas.MSAAEnabled = true;
		FUNK.canvas.MSAASamples = 4;

		FUNK.ctx = FUNK.canvas.getContext('2d');
		FUNK.ctx.strokeStyle = '#ffffff';

		FUNK.bants = [];
		FUNK.numbants = 0;
		FUNK.framenum = 0;
		
		FUNK.center = new Vector2( FUNK.canvas.width/2, FUNK.canvas.height/2+150 );

		$(window).resize(function(event){
			FUNK.canvas.width = FUNK.$canvas.width();
			FUNK.canvas.height = FUNK.$canvas.height();
			FUNK.center = new Vector2( FUNK.canvas.width/2, FUNK.canvas.height/2);
		});

		FUNK.animate();
	},

	animate: function(){
		console.log('INIT');
		FUNK.ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
		FUNK.ctx.fillStyle = "#f9672c";
		FUNK.ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
		FUNK.ctx.fillStyle = 'rgba(255,255,255,0.2)';

		for ( var i = 0, j = FUNK.bants.length; i < j; i++ ) {
			if ( typeof FUNK.bants[i].draw != 'undefined' ) FUNK.bants[i].draw();
		}

		for ( var i = 0, j = FUNK.bants.length; i < j; i++ ) {
			if ( FUNK.bants[i].dead === true ) {
				// FUNK.deadbants.push[i];
				FUNK.bants[i] = {};
				FUNK.numbants--;
				// FUNK.bants.splice(i,1);
			}
		}

		if ( FUNK.framenum % 6 === 0 && FUNK.numbants < 800 ) {
		// if ( FUNK.framenum % 3 === 0 ) {
			FUNK.bants.push( new Bant( FUNK.center.clone() ) );	
			console.log( FUNK.bants[0].pos );
		}	
		
		FUNK.framenum++;
		requestAnimationFrame( FUNK.animate );
	}
}


$(function(){

	FUNK.init();
	
	setTimeout(function() {
		try { window.scrollTo(0, 1); } catch(e) { }
	}, 0);

});
