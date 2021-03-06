

var Vert = Class.extend({

	init: function( start, length ){
		this.start = start;
		this.end = this.start.plusNew( length );
		this.length = length;
		this.calculate();
	},

	calculate: function() {
		var dx = this.end.x - this.start.x,
			dy = this.end.y - this.start.y;
		
		this.normalstart = new Vector2( -dy, dx ).normalise().multiplyEq(10);
		this.normalend = new Vector2( dy, -dx ).normalise().multiplyEq(10);
		this.normal = this.normalstart.minusNew( this.normalend ).reverse().normalise();
	},


	draw: function() {
		
		FUNK.ctx.beginPath();
		FUNK.ctx.moveTo(this.start.x, this.start.y);
		FUNK.ctx.lineTo(this.end.x, this.end.y);
		FUNK.ctx.strokeStyle = '#ffffff';
		FUNK.ctx.stroke();
		FUNK.ctx.setTransform(1, 0, 0, 1, 0, 0);
	},
});

