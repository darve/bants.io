

var Bant = Class.extend({


	init: function( position, velocity ){

		this.pos = position;
		this.velocity = new Vector2( Math.round( Math.random() * 3 ) - 1 , Math.round( Math.random() * 3 ) - 1 );
		this.velocity.normalise().multiplyEq(2);
		this.speed = 2;
		this.bounces = 0;
		this.radius = (Math.random() +.3)*2;
		this.velocity.rotate(Math.random()*32-Math.random()*32);
		// this.color = Math.floor(Math.random()*16777215).toString(16);
		this.color = '#ffffff';
		this.dead = false;
		this.pos.plusEq(this.velocity);
	},


	calculate: function() {
 
		// this.velocity.plusEq( this.gravity );

		this.distance = this.pos.minusNew( FUNK.center ).magnitude();
		// this.velocity.rotate(.8);
		
		if ( this.distance <= 250) {
			this.pos.plusEq( this.velocity.normalise().multiplyNew( this.distance/60 ) );	
		} 
		else {
			this.pos.plusEq( this.velocity.normalise().divideNew( this.distance*40 ) );	
			// this.pos.plusEq( this.velocity );
		}
		
	},

	draw: function() {
		
		this.calculate();

		FUNK.ctx.translate( this.pos.x, this.pos.y );
		FUNK.ctx.rotate( this.velocity.angle(true) );
		FUNK.ctx.fillStyle = this.color;
		FUNK.ctx.beginPath();
    FUNK.ctx.arc(0,0, this.radius*2, 0, 2 * Math.PI, false);
		FUNK.ctx.fill();
		FUNK.ctx.setTransform(1, 0, 0, 1, 0, 0);

		if ( this.distance >= FUNK.canvas.width ) {
			this.dead = true;
		}
		
	},
});

