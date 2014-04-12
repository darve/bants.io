

var Bant = Class.extend({

	init: function( position, velocity ){

		this.pos = position;
		this.velocity = velocity;
		this.speed = 2;
		this.bounces = 0;
		this.radius = 5;
		this.velocity.rotate(Math.random()*32-Math.random()*32);
		// this.color = Math.floor(Math.random()*16777215).toString(16);
		this.color = '#ffffff';
		this.dead = false;
	},

	calculate: function() {

		this.pos.plusEq( this.velocity );
		this.velocity.plusEq( new Vector2( 0, .05) );


      	// for ( var i = 0, l = FUNK.verts.length; i < l; i++ ) {

      		var D1 = FUNK.verts[0].start.minusNew( this.pos ).reverse().dot(FUNK.verts[0].normal);
      		var magnitude = this.velocity.magnitude();

      		// Velocity vector
			// var V = FUNK.verts[0].start.minusNew( FUNK.bants[0].pos ).reverse();
			// var V = this.velocity;
			// var N = FUNK.verts[0].normal;
			// var U = N.multiplyNew( V.dot( N ) / N.dot( N ) );
			// var W = V.minusNew( U );

			if ( (D1 > (-(this.radius*2))) && (D1 < (-(0.01))) ) {
	      		FUNK.ctx.fillStyle = '#ff0000;';
	      		// this.velocity = FUNK.verts[0].normal.multiplyNew( magnitude );
	      		// this.velocity = W.multiplyNew( magnitude ).reverse;
	      		// this.velocity.reverse();
	      		// this.velocity.plusEq( FUNK.verts[i].normal.reverse().divideEq(2) );
	      		// this.velocity = FUNK.W.divideNew( 30 );
	      	} else if ( (D1 < (this.radius*2)) && (D1 > (0.01)) ) {
	      		FUNK.ctx.fillStyle = '#ff0000;';
	      		// this.velocity = FUNK.verts[0].normal.multiplyNew( magnitude );
	      		// this.velocity = W.multiplyNew( magnitude );
	      		// this.velocity.reverse();
	      		// this.velocity.plusEq( FUNK.verts[i].normal.divideEq(2) );
	      		// this.velocity = FUNK.W.divideNew( 30 );
	      	} else {
	    		FUNK.ctx.fillStyle = this.color;	  		
	      	}
      	// }

	},

	draw: function() {
		
		this.calculate();
		FUNK.ctx.translate( this.pos.x, this.pos.y );
		FUNK.ctx.rotate( this.velocity.angle(true) );

		FUNK.ctx.beginPath();

      	// FUNK.ctx.arc(0,0, 3 + ( this.pos.y / 40), 0, 2 * Math.PI, false);
      	FUNK.ctx.arc(0,0, this.radius*2, 0, 2 * Math.PI, false);
		
      
		FUNK.ctx.fill();
		FUNK.ctx.setTransform(1, 0, 0, 1, 0, 0);

		if ( (this.pos.x > FUNK.canvas.width) || (this.pos.y > FUNK.canvas.height) || (this.pos.x < -15) || (this.pos.y < -15) ) {
			this.dead = true;
		}
	},
});

