

var Bant = Class.extend({


	init: function( position, velocity ){

		this.pos = position;
		this.velocity = new Vector2( 0, -4);
		this.speed = 2;
		this.radius = (Math.random() +.3)*10;
		this.rotation = Math.random();
		Math.random() > .5 ? this.rotation = -this.rotation : '';
		this.velocity.rotate(Math.random()*90-Math.random()*90);
		this.color = 'rgba(255,255,255,0.4)';
		FUNK.numbants++;
	},


	calculate: function() {

		this.distance = this.pos.minusNew( FUNK.center ).magnitude();
		this.velocity.rotate(this.rotation);
		this.pos.plusEq( this.velocity );
		
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

