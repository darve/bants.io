

var Bant = Class.extend({

	init: function( position, velocity ){

		this.pos = position;
		this.velocity = velocity;
		this.speed = 2;
		this.bounces = 0;
		this.velocity.rotate(Math.random()*32-Math.random()*32);
		this.color = '#' + Math.floor(Math.random()*16777215).toString(16);
	},

	calculate: function() {


		this.pos.plusEq( this.velocity );

		this.velocity.plusEq( new Vector2( 0, .1) );

		if ( this.pos.y >= ( FUNK.canvas.height - 100 )) {
			this.bounces++;
			this.velocity = this.velocity.reverse();
		}
	},

	draw: function() {
		
		this.calculate();
		FUNK.ctx.translate( this.pos.x, this.pos.y );
		FUNK.ctx.rotate( this.velocity.angle(true) );
		// FUNK.ctx.rotate( this.velocity );

		FUNK.ctx.beginPath();

		// FUNK.ctx.moveTo(0,0);
		// FUNK.ctx.lineTo(-10,-1.5);
		// FUNK.ctx.lineTo(-10,1.5);
		// FUNK.ctx.lineTo(0,0);

      	FUNK.ctx.arc(0,0, 3 + ( this.pos.y / 40), 0, 2 * Math.PI, false);


		FUNK.ctx.fillStyle = this.color;
		FUNK.ctx.fill();
		FUNK.ctx.setTransform(1, 0, 0, 1, 0, 0);

		if ( (this.pos.x > FUNK.canvas.width) || (this.pos.y > FUNK.canvas.height) || (this.pos.x < -15) || (this.pos.y < -15) ) {
			this.dead = true;
		}
	},
});

