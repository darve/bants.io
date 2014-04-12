
/* ============================================ */
/*  BANTS
/*  Author: David Woollard
/*  Email: david@davidwoollard.com
/*  Website: davidwoollard.com
/* ============================================ */

(function(w,d) {

  var FUNK = {},
  		_ = {},
  		c = document.getElementById('canvas'),
  		ctx = c.getContext('2d'),
  		b2Vec2 = Box2D.Common.Math.b2Vec2,
			b2BodyDef = Box2D.Dynamics.b2BodyDef,
			b2Body = Box2D.Dynamics.b2Body,
			b2FixtureDef = Box2D.Dynamics.b2FixtureDef,
			b2Fixture = Box2D.Dynamics.b2Fixture,
			b2World = Box2D.Dynamics.b2World,
			b2MassData = Box2D.Collision.Shapes.b2MassData,
			b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape,
			b2CircleShape = Box2D.Collision.Shapes.b2CircleShape,
			b2DebugDraw = Box2D.Dynamics.b2DebugDraw;


	// Public vars
	FUNK.framenum = 0;

  /*  Core
  /* =========================================================== */

  FUNK.init = function() {
		
		c.width = window.innerWidth;
		c.height = window.innerHeight;
		c.MSAAEnabled = true;
		c.MSAASamples = 4;

		FUNK.world = new b2World( new b2Vec2(0, 10), true );
    FUNK.SCALE = 30;
     
   	var fixDef = new b2FixtureDef;
				fixDef.density = 1.0;
				fixDef.friction = 0.5;
				fixDef.restitution = 0.9;
     
    var bodyDef = new b2BodyDef;
     
       //create ground
       bodyDef.type = b2Body.b2_staticBody;
       
       // positions the center of the object (not upper left!)
       bodyDef.position.x = c.width / 2 / FUNK.SCALE;
       bodyDef.position.y = c.height / FUNK.SCALE;
       
       fixDef.shape = new b2PolygonShape;
       
       // half width, half height. eg actual height here is 1 unit
       fixDef.shape.SetAsBox((c.width / FUNK.SCALE) / 2, (10/FUNK.SCALE) / 2);
       FUNK.world.CreateBody(bodyDef).CreateFixture(fixDef);
     
       //create some objects
       bodyDef.type = b2Body.b2_dynamicBody;

       for(var i = 0; i < 50; ++i) {

					fixDef.shape = new b2CircleShape( 1
						// Math.random() + 0.1 //radius
					);

          bodyDef.position.x = Math.random() * 30 + 5;
          bodyDef.position.y = Math.random() * 10;
          FUNK.world.CreateBody(bodyDef).CreateFixture(fixDef);
       }
     
       //setup debug draw
    var debugDraw = new b2DebugDraw();
       debugDraw.SetSprite(ctx);
       debugDraw.SetDrawScale(FUNK.SCALE);
       debugDraw.SetFillAlpha(0.3);
       debugDraw.SetLineThickness(1.0);
       debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
       FUNK.world.SetDebugDraw(debugDraw);
		
		ctx.strokeStyle = '#ffffff';
		FUNK.animate();
  };

  FUNK.animate = function(){

		FUNK.framenum++;
		ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
		ctx.fillStyle = "#2b2c2f";
		ctx.fillRect(0,0,window.innerWidth,window.innerHeight);
		ctx.fillStyle = 'rgba(255,255,255,0.4)';

		FUNK.world.Step( 1 / 60 , 10 , 10 );
		FUNK.world.DrawDebugData();
		FUNK.world.ClearForces();

		requestAnimationFrame( FUNK.animate );
  }


  /*  Utilities!
  /* =========================================================== */


  $(function(){
  	
  	FUNK.init();

  	setTimeout(function() {
			try { window.scrollTo(0, 1); } catch(e) { }
		}, 0);

  });

  w.FUNK = FUNK;
})(window,document);



