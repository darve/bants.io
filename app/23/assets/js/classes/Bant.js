

var Bant = Class.extend({

	init: function( position, vector ){

		if ( typeof vector === 'string' ) {
			this.vector = new Vector2(0,-1);
			this.vector.rotate(FUNK.rotation);
			FUNK.rotation++;
			console.log('YAY');
		} else {
			this.vector = vector;
		}
		this.speed = Math.floor(Math.random() * 24)+4;
		// this.speed = ( Math.random() > 0.5 ) ? 10 : 5;
		// this.speed = 6;
		this.color = '#' + Math.floor(Math.random()*16777215).toString(16);
	},

	calculate: function() {


		if ( this.pos.isCloseTo( FUNK.vector, 1024 ) ) {
		// 	this.distance = this.pos.minusNew( FUNK.vector ).magnitude();

		// Rotate the bant to face a point, progressively
			// this.angleVector = this.pos.minusNew( FUNK.vector).normalise();
			// this.vector.minusEq( this.angleVector ).normalise();	

		// 	// Propel the bant, speed varying on the distance to the mouse
			this.pos.plusEq( this.vector.normalise().multiplyEq( this.distance/40+4 ) );
		} else {
			this.vector.rotate(Math.random()*4-Math.random()*4);
			// this.vector.rotate( Math.random() + 3 );
			this.pos.plusEq( this.vector.normalise().multiplyEq(this.speed) );
		}

	},

	draw: function() {
		
		this.calculate();
		FUNK.ctx.translate( this.pos.x, this.pos.y );
		FUNK.ctx.rotate( this.vector.angle(true) );
		// FUNK.ctx.rotate( this.vector );

		FUNK.ctx.beginPath();

		FUNK.ctx.moveTo(0,0);
		FUNK.ctx.lineTo(-15,-3);
		FUNK.ctx.lineTo(-15,3);
		FUNK.ctx.lineTo(0,0);


		FUNK.ctx.fillStyle = FUNK.shadeColor( this.color, this.pos.y/14)
		FUNK.ctx.fill();
		FUNK.ctx.setTransform(1, 0, 0, 1, 0, 0);

		// if ( (this.pos.x > FUNK.canvas.width) || (this.pos.y > FUNK.canvas.height) || (this.pos.x < -15) || (this.pos.y < -15) ) {
		// 	this.dead = true;
		// }
	},
});

