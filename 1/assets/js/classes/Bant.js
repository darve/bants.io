

var Bant = Class.extend({

	init: function( position, vector ){
		this.pos = position;
		this.vector = vector;
		this.distance = 0;
	},

	calculate: function() {
		this.direction = this.pos.minusNew(FUNK.vector).normalise().angle(true)-(Math.PI/2);
		this.distance = this.pos.minusNew(FUNK.vector).magnitude();
		FUNK.ctx.fillStyle = '#ffffff';
	},

	draw: function() {
		
		if ( FUNK.vector ) {
			this.calculate();
			FUNK.ctx.translate( this.pos.x, this.pos.y );
			FUNK.ctx.rotate( this.pos.minusNew(FUNK.vector).normalise().angle(true)-(Math.PI/2) );
			FUNK.ctx.fillRect( -10,-10,this.distance/75,this.distance/75 );
			FUNK.ctx.setTransform(1, 0, 0, 1, 0, 0);
		}
	},
});

