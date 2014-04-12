

var Bant = Class.extend({


	init: function( position, velocity ){
		this.pos = position;
		this.radius = 3
		this.color = '#ffffff';
	},


	calculate: function() {
 
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

