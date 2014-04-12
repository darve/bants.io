

var Block = Class.extend({

	init: function( position ){
		this.pos = position;
	},

	calculate: function() {

	},

	draw: function() {
		
		this.calculate();
		FUNK.ctx.translate( this.pos.x, this.pos.y );

		FUNK.ctx.beginPath();
		FUNK.ctx.moveTo(0,0);
		FUNK.ctx.lineTo(-15,0);
		FUNK.ctx.lineTo(-15,15);
		FUNK.ctx.lineTo(0,15);
		FUNK.ctx.lineTo(0,0);

		FUNK.ctx.fillStyle = '#ffffff';
		FUNK.ctx.fill();

		FUNK.ctx.setTransform(1, 0, 0, 1, 0, 0);
	},
});

