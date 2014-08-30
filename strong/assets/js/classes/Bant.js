

var Bant = Class.extend({

	init: function( position, vector ){
		this.pos = position;
		this.vector = vector;
		this.speed = (Math.random() * 10) + 4;
		this.color = '#' + Math.floor(Math.random()*16777215).toString(16);
	},

	calculate: function() {

		if ( this.pos.isCloseTo( FUNK.vector, 1024 ) ) {
			this.distance = this.pos.minusNew( FUNK.vector ).magnitude();
			this.angleVector = this.pos.minusNew( FUNK.vector).normalise();
			this.vector.minusEq( this.angleVector ).normalise();	
			this.pos.plusEq( this.vector.normalise().multiplyEq( this.distance/40+4 ) );
		} else {
			this.vector.rotate(Math.random()*4-Math.random()*4);
			this.pos.plusEq( this.vector.normalise().multiplyEq(this.speed) );
		}

	},

	draw: function() {
		
		this.calculate();
		FUNK.ctx.translate( this.pos.x, this.pos.y );
		FUNK.ctx.rotate( this.vector.angle(true) );

		FUNK.ctx.beginPath();

		FUNK.ctx.moveTo(0,0);
		FUNK.ctx.lineTo(-15,-3);
		FUNK.ctx.lineTo(-15,3);
		FUNK.ctx.lineTo(0,0);

		FUNK.ctx.fillStyle = this.color;
		FUNK.ctx.fill();
		FUNK.ctx.setTransform(1, 0, 0, 1, 0, 0);

		if ( (this.pos.x > FUNK.canvas.width) || (this.pos.y > FUNK.canvas.height) || (this.pos.x < -15) || (this.pos.y < -15) ) {
			this.dead = true;
		}
	},
});

