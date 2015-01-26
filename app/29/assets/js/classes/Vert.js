

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

		// Draw the line normal
		// FUNK.ctx.translate( this.start.x, this.start.y );
		// FUNK.ctx.beginPath();
		// FUNK.ctx.moveTo(this.normalstart.x, this.normalstart.y);
		// FUNK.ctx.lineTo(this.normalend.x, this.normalend.y);
		// FUNK.ctx.strokeStyle = '#bada55';
		// FUNK.ctx.stroke();

		FUNK.ctx.setTransform(1, 0, 0, 1, 0, 0);
	},
});

