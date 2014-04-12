

var Bant = Class.extend({

	init: function( position, vector ){
		this.pos = position;
		this.vector = vector;

		this.speed = Math.floor( Math.random() * 8 ) + 2;
		this.color = Math.floor(Math.random()*16777215).toString(16);
	},

	calculate: function() {
		// this.vector.rotate((Math.random()*3)-1.5);

		if ( this.pos.isCloseTo( FUNK.vector, 1024 ) ) {
			// this.pos.plusEq( this.pos.minusNew(FUNK.vector).normalise().multiplyEq(this.vector.magnitude()*(this.distance/15)) );
			// this.pos.plusEq( FUNK.vector.normalise() ).plusEq( this.vector.normalise().multiplyEq(3) );
			// this.pos.minusEq(  );
			// this.vector.rotate(Math.random()*4-Math.random()*4);
			// this.vector.rotateAroundPoint( FUNK.vector, Math.PI/2, false );
			this.vector.rotate( this.pos.minusNew( FUNK.vector ).normalise().angle(true)-(Math.PI/2));
			// THIS IS THE RIGHT ONE this.pos.plusEq( this.vector.normalise().multiplyEq(this.speed) );
			// this.pos.plusEq( this.pos.minusNew( FUNK.vector ).normalise());
			this.pos.plusEq( this.pos.minusNew( FUNK.vector ).normalise().multiplyEq(this.speed).reverse() );
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

		// var currentColor = FUNK.shadeColor('#ff9900', this.pos.y/-15);
		// FUNK.ctx.fillStyle =  FUNK.shadeColor('#ff9900', this.pos.y/-15);
		// FUNK.ctx.strokeStyle =  FUNK.shadeColor('#ff9900', this.pos.y/-15);
		// FUNK.ctx.shadowColor =  FUNK.shadeColor('#ff9900', this.pos.y/-15);
		// FUNK.ctx.shadowBlur = .1;
		// FUNK.ctx.shadowOffsetX = .1;
		// FUNK.ctx.shadowOffsetY = .1;

		FUNK.ctx.fillStyle = '#ffffff';
		FUNK.ctx.fill();
		// FUNK.ctx.translate( 28, 0 );

		// FUNK.ctx.fillStyle = '#abdaec';
		// FUNK.ctx.fill();
		// FUNK.ctx.translate( -14, 0 );

		// FUNK.ctx.fillStyle = '#2b2c2f';
		// FUNK.ctx.fill();

		// FUNK.ctx.stroke();

		FUNK.ctx.setTransform(1, 0, 0, 1, 0, 0);

		if ( (this.pos.x > FUNK.canvas.width) || (this.pos.y > FUNK.canvas.height) || (this.pos.x < -15) || (this.pos.y < -15) ) {
			this.dead = true;
		}
	},
});

