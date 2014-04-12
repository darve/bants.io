

var Bant = Class.extend({


	init: function( position, velocity ){
		this.pos = position;
		this.radius = 3
		this.velocity = new Vector2( Math.random() > .5 ? Math.floor(Math.random() * -1.5) : Math.floor(Math.random() * 1.5) , 0 ).divideEq(6);
		// this.slow = this.velocity.normaliseNew().divideNew( 50 );
		this.color = '#ffffff';
		this.counter = 0;
	},


	calculate: function() {

		if ( this.counter < (100 ) ) {
			this.pos.plusEq( this.velocity );	
			this.counter++;
		}
 		
 		// if ( (this.velocity.x <= .5 && this.velocity.x >= -.5) || (this.velocity.y <= .5 && this.velocity.y >= -.5) ) {
 		// 	this.velocity = new Vector2( 0, 0);
 		// } else {
			// this.velocity = this.velocity.minusNew( this.slow );	
 		// }
 		
 		
	},

	draw: function() {
		
		this.calculate();

		// FUNK.ctx.translate( this.pos.x, this.pos.y );
		// // FUNK.ctx.rotate( this.velocity.angle(true) );
		// FUNK.ctx.fillStyle = this.color;
		// FUNK.ctx.beginPath();
  //   	FUNK.ctx.arc(0,0, this.radius, 0, 2 * Math.PI, false);
		// FUNK.ctx.fill();
		// FUNK.ctx.setTransform(1, 0, 0, 1, 0, 0);
		
	},
});

