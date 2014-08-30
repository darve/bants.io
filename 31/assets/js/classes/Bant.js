

var Bant = Class.extend({

	init: function( position, velocity ){

		this.pos = position;
		this.velocity = velocity;
		this.speed = 2;
		this.bounces = 0;
		this.radius = 10;
		this.velocity.rotate(Math.random()*32-Math.random()*32);
		// this.color = '#' + Math.floor(Math.random()*16777215).toString(16);
		this.color = '#ffffff';
		this.dead = false;
	},

	calculate: function() {

		this.velocity.plusEq( new Vector2( 0, .05) );
		this.pos.plusEq( this.velocity );
		
		FUNK.ctx.fillStyle = '#ffffff';

		for ( var i = 0; i < FUNK.verts.length; i++ ) {

	      	var D1 = FUNK.verts[i].start.minusNew( this.pos ).reverse().dot(FUNK.verts[i].normal);

			// var linestart = this.pos.clone(),
			// 	linefinish = this.pos.projectNew( this.velocity, D1  );

			if ( (D1 > (-(this.radius*2))) && (D1 < (-(0.01))) ) {
				FUNK.ctx.fillStyle = '#ff0000;';
			} else if ( (D1 < (this.radius*2)) && (D1 > (0.01)) ) {
				FUNK.ctx.fillStyle = '#ff0000;';
			} 

		}

		FUNK.ctx.translate( this.pos.x, this.pos.y );
		FUNK.ctx.rotate( this.velocity.angle(true) );

		FUNK.ctx.beginPath();
      	FUNK.ctx.arc(0,0, this.radius*2, 0, 2 * Math.PI, false);
		FUNK.ctx.fill();
		FUNK.ctx.setTransform(1, 0, 0, 1, 0, 0);

		if ( (this.pos.x > FUNK.canvas.width) || (this.pos.y > FUNK.canvas.height) || (this.pos.x < -15) || (this.pos.y < -15) ) {
			this.dead = true;
		}

		// FUNK.ctx.beginPath();
		// FUNK.ctx.moveTo( linestart.x, linestart.y );
		// FUNK.ctx.lineTo( linefinish.x, linefinish.y);
		// // FUNK.ctx.strokeStyle = '#ff00ff';
		// FUNK.ctx.strokeStyle = this.color;
		// FUNK.ctx.stroke();
		// FUNK.ctx.setTransform(1, 0, 0, 1, 0, 0);

	},

	draw: function() {
		
		this.calculate();
		
	},
});

