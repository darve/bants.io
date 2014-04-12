

var Bant = Class.extend({

	init: function( position, vector ){
		this.pos = position;
		this.vector = vector;
		this.distance = 0;
	},

	calculate: function() {
		// this.direction = this.pos.minusNew(FUNK.vector).normalise().angle(true)-(Math.PI/2);
		this.distance = this.pos.minusNew(FUNK.vector).magnitude();

		this.direction = this.pos.minusNew(FUNK.vector).normalise().angle(true)-(Math.PI/2);
		

		if ( this.pos.isCloseTo( FUNK.vector, 70 ) ) {
			this.pos.plusEq( this.pos.minusNew(FUNK.vector).normalise().multiplyEq(this.vector.magnitude()*(this.distance/15)).reverse() );
		} else {
			this.pos.plusEq( new Vector2( (Math.random() * 2)-1, (Math.random() * 2)-1 ) );
		}
		FUNK.ctx.fillStyle = '#ffffff';
	},

	draw: function() {
		
		this.calculate();
		FUNK.ctx.translate( this.pos.x, this.pos.y );
		// FUNK.ctx.rotate( this.pos.minusNew(FUNK.vector).normalise().angle(true)-(Math.PI/2) );

		FUNK.ctx.beginPath();
		FUNK.ctx.arc( 3,3,3, 0, 2 * Math.PI, false);
		FUNK.ctx.fill();

		FUNK.ctx.setTransform(1, 0, 0, 1, 0, 0);
	},
});

