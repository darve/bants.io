

var Vert = Class.extend({

	init: function( start, length ){
		this.start = start;
		this.end = this.start.plusNew( length );
		this.length = length;
	
		// Distance vector representing the line
		// this.line = new Vector2( this.end.x - start.x, this.end.y - start.y );
		// Not really sure what this does
		// this.leftnormal = this.line.rotate( Math.PI * -0.5, true );
	},


	calculate: function() {
		
		var dx = this.end.x - this.start.x,
				dy = this.end.y - this.start.y;
		
		this.normalstart = new Vector2( -dy, dx ).normalise().multiplyEq(10);
		this.normalend = new Vector2( dy, -dx ).normalise().multiplyEq(10);
		this.normal = this.normalstart.minusNew( this.normalend ).reverse().normalise();
	},


	draw: function() {

		this.calculate();

		// Draw the actual line
		FUNK.ctx.beginPath();
		FUNK.ctx.moveTo(this.start.x, this.start.y);
		FUNK.ctx.lineTo(this.end.x, this.end.y);
		FUNK.ctx.strokeStyle = '#ffffff';
		FUNK.ctx.stroke();

		// Draw the normal
		// FUNK.ctx.beginPath();
		// FUNK.ctx.moveTo(this.normalstart.x+100, this.normalstart.y+100);
		// FUNK.ctx.lineTo(this.normalend.x+100, this.normalend.y+100);
		// FUNK.ctx.strokeStyle = '#ffffff';
		// FUNK.ctx.stroke();

		// Get start point + middle point

		// var mag = this.start.minusNew( this.end ).magnitude();
		// var normalstart = this.start.plusNew( this.start.minusNew( this.end ).normaliseNew().multiplyNew( mag/2 ).reverse()  );
		// var normalend = normalstart.plusNew( this.normal );
		
		// FUNK.ctx.setTransform(1, 0, 0, 1, 0, 0);
		// // Draw the line normal
		// FUNK.ctx.beginPath();
		// FUNK.ctx.moveTo(normalstart.x, normalstart.x);
		// FUNK.ctx.lineTo(normalend.x, normalend.y);
		// FUNK.ctx.strokeStyle = '#ff00ff';
		// FUNK.ctx.stroke();

		FUNK.ctx.setTransform(1, 0, 0, 1, 0, 0);
	},
});

