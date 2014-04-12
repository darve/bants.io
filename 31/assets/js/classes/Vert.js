

var Vert = Class.extend({

	init: function( start, length ){
		this.start = start;
		this.end = this.start.plusNew( length );
		// this.end = FUNK.vector;
		this.length = length;
	
		// Draw the normal here in red
		// this.normal = new Vector2( FUNK.verts[0].end.x - FUNK.verts[0].start.x, FUNK.verts[0].end.y - FUNK.verts[0].start.y );
	},


	calculate: function() {
		
		var dx = this.end.x - this.start.x,
			dy = this.end.y - this.start.y;
		
		this.normalstart = new Vector2( -dy, dx ).normalise().multiplyEq(5);
		this.normalend = new Vector2( dy, -dx ).normalise().multiplyEq(5);
		this.normal = this.normalstart.minusNew( this.normalend ).reverse().normalise();
	},


	draw: function() {

		this.calculate();

		// this.length.rotate(.5);
		
		FUNK.ctx.beginPath();
		FUNK.ctx.moveTo(this.start.x, this.start.y);
		FUNK.ctx.lineTo(this.end.x, this.end.y);
		FUNK.ctx.strokeStyle = '#ffffff';
		FUNK.ctx.stroke();

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

