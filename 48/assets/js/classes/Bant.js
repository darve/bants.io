

var Bant = Class.extend({


	init: function( position, velocity ){
		this.pos = position;
		this.radius = 3
		// var roundy = Math.round( this.pos.y );
		// if ( roundy <=399 ) {
		// 	this.velocity = new Vector2( ( Math.random() >= .4 ? -.5 : .5 ) , 0 ).divideEq(Math.floor( Math.random() * 8 ) );
		// } else if ( roundy >= 200 && roundy <= 299 ) {
		// 	this.velocity = new Vector2( ( Math.random() >= .4 ? -.6 : .6 ) , 0 ).divideEq(Math.floor( Math.random() * 8 ) );
		// } else if ( roundy >= 300 && roundy <= 399 ) {
		// 	this.velocity = new Vector2( ( Math.random() >= .4 ? -.7 : .7 ) , 0 ).divideEq(Math.floor( Math.random() * 8 ) );
		// } else if ( roundy >= 400 && roundy <= 499 ) {
		// 	this.velocity = new Vector2( ( Math.random() >= .4 ? -.8 : .8 ) , 0 ).divideEq(Math.floor( Math.random() * 8 ) );
		// } else if ( roundy >= 500 && roundy <= 599 ) {
		// 	this.velocity = new Vector2( ( Math.random() >= .4 ? -.9 : .9 ) , 0 ).divideEq(Math.floor( Math.random() * 8 ) );
		// } else if ( roundy >= 600 ) {
		// 	this.velocity = new Vector2( ( Math.random() >= .4 ? -1 : 1 ) , 0 );
		// }

			
		// var x, y;
		// var roundy = Math.round( this.pos.y );
		// if ( roundy <=399 ) {
		// 	this.velocity = new Vector2( Math.random() >= .5 ? Math.floor(Math.random() * -.5) : Math.floor(Math.random() * .5) , 0 ).divideEq(6);
		// } else if ( roundy >= 200 && roundy <= 299 ) {
		// 	this.velocity = new Vector2( Math.random() >= .5 ? Math.floor(Math.random() * -1.5) : Math.floor(Math.random() * 1.5) , 0 ).divideEq(6);
		// } else if ( roundy >= 300 && roundy <= 399 ) {
		// 	this.velocity = new Vector2( Math.random() >= .5 ? Math.floor(Math.random() * -1.5) : Math.floor(Math.random() * 1.5) , 0 ).divideEq(6);
		// } else if ( roundy >= 400 && roundy <= 499 ) {
		// 	this.velocity = new Vector2( Math.random() >= .5 ? Math.floor(Math.random() * -1.5) : Math.floor(Math.random() * 1.5) , 0 ).divideEq(6);
		// } else if ( roundy >= 500 && roundy <= 599 ) {
		// 	this.velocity = new Vector2( Math.random() >= .5 ? Math.floor(Math.random() * -1.5) : Math.floor(Math.random() * 1.5) , 0 ).divideEq(6);
		// } else if ( roundy >= 600 ) {
		// 	this.velocity = new Vector2( Math.random() >= .5 ? Math.floor(Math.random() * -1.5) : Math.floor(Math.random() * 1.5) , 0 );
		// }

		// this.velocity = new Vector2( Math.random() > .5 ? Math.floor(Math.random() * -.5) : Math.floor(Math.random() * .5) , 0 ).divideEq(Math.abs( FUNK.canvas.height - Math.round(this.pos.y) ) / 1000 );
		this.velocity = new Vector2( Math.random() >= .5 ? Math.floor( Math.random() * -1) : Math.floor(Math.random() * 1.5) , Math.random() >= .5 ? Math.floor( Math.random() * -1) : Math.floor(Math.random() * 1.5) ).divideEq(8);
		
		// this.slow = this.velocity.normaliseNew().divideNew( 50 );
		this.color = '#ffffff';
		this.counter = 0;
	},


	calculate: function() {

		if ( this.counter < ( 200 ) ) {
			this.pos.plusEq( this.velocity );	
			this.counter++;
		}
 		
 		// if ( (this.velocity.x <= .5 && this.velocity.x >= -.5) || (this.velocity.y <= .5 && this.velocity.y >= -.5) ) {
 		// 	this.velocity = new Vector2( 0, 0);
 		// } else {
			// this.velocity = this.velocity.minusNew( this.slow );	
 		// }
 		
 		
	},

	draw: function() {
		
		this.calculate();

		// FUNK.ctx.translate( this.pos.x, this.pos.y );
		// // FUNK.ctx.rotate( this.velocity.angle(true) );
		// FUNK.ctx.fillStyle = this.color;
		// FUNK.ctx.beginPath();
  //   	FUNK.ctx.arc(0,0, this.radius, 0, 2 * Math.PI, false);
		// FUNK.ctx.fill();
		// FUNK.ctx.setTransform(1, 0, 0, 1, 0, 0);
		
	},
});

