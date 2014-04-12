

var Bant = Class.extend({

	init: function( position, vector ){
		this.pos = position;
		this.vector = vector;

		this.color = Math.floor(Math.random()*16777215).toString(16);
	},

	calculate: function() {
		// this.vector.rotate((Math.random()*3)-1.5);
		this.vector.rotate(Math.random()*4-Math.random()*4);
		this.pos.plusEq( this.vector.normalise().multiplyEq(3) );
	},

	draw: function() {
		
		this.calculate();
		FUNK.ctx.translate( this.pos.x, this.pos.y );
		FUNK.ctx.rotate( this.vector.angle(true) );

		FUNK.ctx.beginPath();

		FUNK.ctx.moveTo(0,0);
		FUNK.ctx.lineTo(-20,-5);
		FUNK.ctx.lineTo(-20,5);
		FUNK.ctx.lineTo(0,0);

		FUNK.ctx.fillStyle = FUNK.shadeColor(this.color, this.pos.y/10 );
		FUNK.ctx.strokeStyle = FUNK.shadeColor(this.color, this.pos.y/10 );
		FUNK.ctx.fill();
		FUNK.ctx.stroke();

		FUNK.ctx.setTransform(1, 0, 0, 1, 0, 0);

		if ( (this.pos.x > FUNK.canvas.width) || (this.pos.y > FUNK.canvas.height) || (this.pos.x < -15) || (this.pos.y < -15) ) {
			this.dead = true;
		}
	},
});

