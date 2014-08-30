

var Bant = Class.extend({

	init: function( position, velocity ){

		this.pos = position;
		this.velocity = velocity;
		this.speed = 2;
		this.bounces = 0;
		this.radius = 5;
		this.velocity.rotate(Math.random()*32-Math.random()*32);
		// this.color = '#' + Math.floor(Math.random()*16777215).toString(16);
		this.color = '#ffffff';
		this.dead = false;
	},

	calculate: function() {

		this.pos.plusEq( this.velocity );
		this.velocity.plusEq( new Vector2( 0, .05) );


      	// for ( var i = 0, l = FUNK.verts.length; i < l; i++ ) {



			// Vnew = -2*(V dot N)*N + V
			// where
			// V = Incoming Velocity Vector
			// N = The Normal Vector of the wall

			// var NV = FUNK.verts[0].normal.plusNew( this.velocity );
			// NV.multiplyEq( -2*this.velocity.dot( FUNK.verts[0].normal ) );
      		

			// Distance to line INT
      		var D1 = FUNK.verts[0].start.minusNew( this.pos ).reverse().dot(FUNK.verts[0].normal);
			
			var vel = this.velocity.clone();
      		var velend = vel.plusNew( vel.multiplyNew( 2 ) );

      		var mag = vel.magnitude();

      		var magsquared = vel.magnitudeSquared();

      		// var VD = this.velocity
      		

			FUNK.ctx.beginPath();
			FUNK.ctx.moveTo( this.pos.x, this.pos.y );
			FUNK.ctx.lineTo( velend.x, velend.y );
			FUNK.ctx.strokeStyle = '#ff00ff';
			FUNK.ctx.stroke();
			FUNK.ctx.setTransform(1, 0, 0, 1, 0, 0);

			// FUNK.ctx.beginPath();
			// FUNK.ctx.moveTo( FUNK.W.x, FUNK.W.y );
			// FUNK.ctx.lineTo( NV.x, NV.y );
			// FUNK.ctx.strokeStyle = '#ff00ff';
			// FUNK.ctx.stroke();
			// FUNK.ctx.setTransform(1, 0, 0, 1, 0, 0);


			// if ( (D1 > (-(this.radius*2))) && (D1 < (-(0.01))) ) {
	  //     		FUNK.ctx.fillStyle = '#ff0000;';
	  //     		// this.velocity = NV;
	  //     		// this.pos = new Vector2( 300, 300 );
	  //     	} else if ( (D1 < (this.radius*2)) && (D1 > (0.01)) ) {
	  //     		FUNK.ctx.fillStyle = '#ff0000;';
			// 	// this.velocity = NV;
			// 	// this.pos = new Vector2( 300, 300 );
	  //     	} else {
	    		FUNK.ctx.fillStyle = this.color;	  		
	  //     	}
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

