

var Bant = Class.extend({


	init: function( position, velocity ){

		this.pos = position;
		this.velocity = velocity;
		this.speed = 2;
		this.bounces = 0;
		this.radius = (Math.random() * 20)+3;
		this.velocity.rotate(Math.random()*32-Math.random()*32);

		this.color = Math.floor(Math.random()*16777215).toString(16);
		// this.color = '#ffffff';
		// this.gravity = Math.random();
		this.gravity = new Vector2( 0, 0.005 );
		this.dead = false;
	},


	calculate: function() {

		// For each of the lines, check for collisions etc
		for ( var i = 0; i < FUNK.verts.length; i++ ) {

		    this.D1 = Math.floor( FUNK.verts[i].start.minusNew( this.pos.plusNew( this.velocity ) ).reverse().dot(FUNK.verts[i].normal) );
		   	this.c1 = new Vector2( this.pos.x - FUNK.verts[i].start.x, this.pos.y - FUNK.verts[i].start.y);
		   	this.c2 = new Vector2( this.pos.x - FUNK.verts[i].end.x, this.pos.y - FUNK.verts[i].end.y);

			if ( (this.D1 > (-(this.radius*2))) && (this.D1 < (-(0))) && (FUNK.verts[i].line.dot( this.c1 ) > 0) && (FUNK.verts[i].line.dot( this.c2 ) < 0) ) {
				// FUNK.ctx.fillStyle = '#ff0000;';
				var tempnormal = FUNK.verts[i].normal.clone();
				var scalar = this.velocity.dot( FUNK.verts[i].normal ) * 2;
				this.velocity = tempnormal.multiplyNew( scalar ).reverse().plusNew( this.velocity );

			} else if ( (this.D1 < (this.radius*2)) && (this.D1 > (0)) && (FUNK.verts[i].line.dot( this.c1 ) > 0) && (FUNK.verts[i].line.dot( this.c2 ) < 0) ) {
				// FUNK.ctx.fillStyle = '#ff0000;';
				var tempnormal = FUNK.verts[i].normal.clone();
				var scalar = this.velocity.dot( FUNK.verts[i].normal ) * 2;
				this.velocity = tempnormal.multiplyNew( scalar ).reverse().plusNew( this.velocity );

			} else {
				FUNK.ctx.fillStyle = this.color;
				this.collision = false;
			}
		} // for

			if ( this.velocity > this.gravity ) this.velocity.plusEq( this.gravity );
			this.pos.plusEq( this.velocity );
	},

	draw: function() {
		
		this.calculate();

		FUNK.ctx.translate( this.pos.x, this.pos.y );
		FUNK.ctx.rotate( this.velocity.angle(true) );

		FUNK.ctx.beginPath();
      	FUNK.ctx.arc(0,0, this.radius*2, 0, 2 * Math.PI, false);
		FUNK.ctx.fill();
		FUNK.ctx.setTransform(1, 0, 0, 1, 0, 0);

		if ( (this.pos.x > FUNK.canvas.width) || (this.pos.y > FUNK.canvas.height) || (this.pos.x < -15) || (this.pos.y < -15) ) {
			this.dead = true;
		}
		
	},
});

