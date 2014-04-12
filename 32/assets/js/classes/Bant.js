

var Bant = Class.extend({


	init: function( position, velocity ){

		this.pos = position;
		this.velocity = velocity;
		this.speed = 2;
		this.bounces = 0;
		this.radius = Math.floor( Math.random() * 10) + 4;
		this.velocity.rotate(Math.random()*32-Math.random()*32);

		this.color = Math.floor(Math.random()*16777215).toString(16);
		// this.color = '#ffffff';
		// this.gravity = Math.random();
		this.gravity = 0.2
		this.dead = false;
	},


	calculate: function() {

		// Apply gravity to our bant
		this.velocity.plusEq( new Vector2( 0, this.gravity) );
		this.pos.plusEq( this.velocity );

		// For each of the lines, check for collisions etc
		for ( var i = 0; i < FUNK.verts.length; i++ ) {

	    this.D1 = Math.floor( FUNK.verts[i].start.minusNew( this.pos ).reverse().dot(FUNK.verts[i].normal) );

			// FUNK.ctx.setTransform(1, 0, 0, 1, 0, 0);
			// FUNK.ctx.font = "bold 12px sans-serif";
			// FUNK.ctx.fillStyle = "#b4d455";
			// FUNK.ctx.fillText( 'this.D1 magnitude: ' + this.D1, 15, 20 );
			// FUNK.ctx.fillText( 'vert normalstart: ' + FUNK.verts[0].normalstart, 15, 40 );
			// FUNK.ctx.fillText( 'vert normalend: ' + FUNK.verts[0].normalend, 15, 60 );
			// FUNK.ctx.fillText( 'vert line: ' + FUNK.verts[0].line, 15, 80 );

			FUNK.ctx.beginPath();
			FUNK.ctx.moveTo( this.pos.x, this.pos.y );
			var dest = new Vector2( 0, 1 ).multiplyEq( this.D1 );
			dest = this.pos.plusNew( dest );
			// FUNK.ctx.lineTo( dest.x, dest.y );
			// FUNK.ctx.strokeStyle = '#ff00ff';
			// FUNK.ctx.stroke();
			// FUNK.ctx.setTransform(1, 0, 0, 1, 0, 0);

			// if ( this.collision != true ) {
				if ( (this.D1 > (-(this.radius*2))) && (this.D1 < (-(0))) ) {
					FUNK.ctx.fillStyle = '#ff0000;';
					this.collision = true;	
					// var vleftnormal2 = FUNK.verts[0].leftnormal.clone();
					// this.projection = this.velocity.minusNew( FUNK.verts[0].leftnormal );
					// this.velocity = this.velocity.plusNew( this.projection.multiply(2) );

					var tempnormal = FUNK.verts[0].normal.clone();
					var scalar = this.velocity.dot( FUNK.verts[0].normal ) * 2;
					this.velocity = tempnormal.multiplyNew( scalar ).reverse().plusNew( this.velocity );

				} else if ( (this.D1 < (this.radius*2)) && (this.D1 > (0)) ) {
					FUNK.ctx.fillStyle = '#ff0000;';
					this.collision = true;
					
					var tempnormal = FUNK.verts[0].normal.clone();
					var scalar = this.velocity.dot( FUNK.verts[0].normal ) * 2;
					this.velocity = tempnormal.multiplyNew( scalar ).reverse().plusNew( this.velocity );

				} else {
					FUNK.ctx.fillStyle = this.color;
					this.collision = false;
				}
			// }
		}
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

