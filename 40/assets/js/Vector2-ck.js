var Vector2=function(e,t){this.x=e||0;this.y=t||0};Vector2.prototype={reset:function(e,t){this.x=e;this.y=t;return this},projectNew:function(e,t){var n=new Vector2(this.x,this.y);e.clone();n.plusEq(e.normaliseNew().multiplyEq(t));return n},directionNew:function(e){return(new Vector2(this.x,this.y)).minusNew(e).normalise()},toString:function(e){e=e||3;var t=Math.pow(10,e);return"["+Math.round(this.x*t)/t+", "+Math.round(this.y*t)/t+"]"},clone:function(){return new Vector2(this.x,this.y)},copyTo:function(e){e.x=this.x;e.y=this.y},copyFrom:function(e){this.x=e.x;this.y=e.y},magnitude:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},magnitudeSquared:function(){return this.x*this.x+this.y*this.y},normalise:function(){var e=this.magnitude();this.x=this.x/e;this.y=this.y/e;return this},normaliseNew:function(){return(new Vector2(this.x,this.y)).normalise()},reverse:function(){this.x=-this.x;this.y=-this.y;return this},plusEq:function(e){this.x+=e.x;this.y+=e.y;return this},plusNew:function(e){return new Vector2(this.x+e.x,this.y+e.y)},minusEq:function(e){this.x-=e.x;this.y-=e.y;return this},minusNew:function(e){return new Vector2(this.x-e.x,this.y-e.y)},multiplyEq:function(e){this.x*=e;this.y*=e;return this},multiplyNew:function(e){var t=this.clone();return t.multiplyEq(e)},divideEq:function(e){this.x/=e;this.y/=e;return this},divideNew:function(e){var t=this.clone();return t.divideEq(e)},dot:function(e){return this.x*e.x+this.y*e.y},angle:function(e){return Math.atan2(this.y,this.x)*(e?1:Vector2Const.TO_DEGREES)},rotate:function(e,t){var n=Math.cos(e*(t?1:Vector2Const.TO_RADIANS)),r=Math.sin(e*(t?1:Vector2Const.TO_RADIANS));Vector2Const.temp.copyFrom(this);this.x=Vector2Const.temp.x*n-Vector2Const.temp.y*r;this.y=Vector2Const.temp.x*r+Vector2Const.temp.y*n;return this},equals:function(e){return this.x==e.x&&this.y==e.x},isCloseTo:function(e,t){if(this.equals(e))return!0;Vector2Const.temp.copyFrom(this);Vector2Const.temp.minusEq(e);return Vector2Const.temp.magnitudeSquared()<t*t},rotateAroundPoint:function(e,t,n){Vector2Const.temp.copyFrom(this);Vector2Const.temp.minusEq(e);Vector2Const.temp.rotate(t,n);Vector2Const.temp.plusEq(e);this.copyFrom(Vector2Const.temp)},isMagLessThan:function(e){return this.magnitudeSquared()<e*e},isMagGreaterThan:function(e){return this.magnitudeSquared()>e*e}};Vector2Const={TO_DEGREES:180/Math.PI,TO_RADIANS:Math.PI/180,temp:new Vector2};