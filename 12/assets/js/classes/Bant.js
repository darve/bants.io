

var Bant = Class.extend({

	init: function( position, vector ){
		this.pos = position;
		this.vector = vector;
		// this.color = Math.floor(Math.random()*16777215).toString(16);
		this.rand = Math.floor( Math.random() * 100 );

		this.scale = Math.random();
		this.big = 15 * this.scale+.2;
		this.small = 3 * this.scale+.2;
	},

	calculate: function() {
		if ( this.pos.isCloseTo( FUNK.vector, 100 ) ) {
			this.pos.plusEq( this.pos.minusNew(FUNK.vector) );
			this.vector.rotate(Math.random()*4-Math.random()*4);
			this.pos.plusEq( this.vector.normalise().multiplyEq(3) );
		} else {
			this.vector.rotate(Math.random()*4-Math.random()*4);
			this.pos.plusEq( this.vector.normalise().multiplyEq(3) );
		}

	},

	draw: function() {
		
		this.calculate();
		FUNK.ctx.translate( this.pos.x, this.pos.y );
		FUNK.ctx.rotate( this.vector.angle(true) );

		FUNK.ctx.beginPath();

		this.tempbig = ( this.tempbig + this.pos.minusNew( FUNK.vector ).magnitude() );

		FUNK.ctx.moveTo(0,0);
		FUNK.ctx.lineTo(-(this.tempbig),-(this.small));
		FUNK.ctx.lineTo(-(this.big),this.small);
		FUNK.ctx.lineTo(0,0);

		

		FUNK.ctx.fillStyle = FUNK.shadeColor('#ff9900', this.pos.y/-10 );
		FUNK.ctx.strokeStyle = FUNK.shadeColor('#ff9900', this.pos.y/-10 );

		// FUNK.ctx.fillStyle = 'rgba(255,153,0,' + (FUNK.sine * this.rand) + ')';
		// FUNK.ctx.fillStyle = 'rgba(255.153,0,' + (FUNK.sine * this.rand) + ')';

		FUNK.ctx.fill();
		FUNK.ctx.stroke();

		FUNK.ctx.setTransform(1, 0, 0, 1, 0, 0);

		if ( (this.pos.x > FUNK.canvas.width) || (this.pos.y > FUNK.canvas.height) || (this.pos.x < -15) || (this.pos.y < -15) ) {
			this.dead = true;
		}
	},
});

