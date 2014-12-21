

(function(w,d,c){

    var cx = c.getContext('2d'),
        width = w.innerWidth,
        height = w.innerHeight,
        dots = [],
        num = 40,
        radius = 2,
        spacing = 25,
        speed = 100,
        increase = Math.PI / 100;

    function init() {
        c.width = width;
        c.height = height;
        
        num = width / spacing;

        for ( var i = 0, l = num; i < l; i++ ) {
            dots[i] = {
                x: (width/2) - ((num/2) * spacing) + ( i * spacing),
                y: height/2,
                inc: ((i+1) / 10) / 25,
                sine: 0
            }
        }

        window.dots = dots;
        window.requestAnimationFrame(render);
    }

    function render() {
        window.requestAnimationFrame(render);
        integrate();
        draw();
    }

    function integrate() {
        for ( var i = 0, l = dots.length; i < l; i++ ) {
            dots[i].y = (height/2) + (speed * Math.sin(dots[i].sine));
            dots[i].sine += dots[i].inc;
        }
    }

    function draw() {
        cx.fillStyle = "#0e1117";
        cx.fillRect(0, 0, width, height);
    
        cx.fillStyle = "#ffffff";
        for ( var i = 0, l = dots.length; i < l; i++ ) {
            cx.beginPath();
            cx.arc(dots[i].x, dots[i].y, radius, 0, 2 * Math.PI, false);
            cx.fill();
            cx.closePath();
        }
    }

    d.addEventListener('DOMContentLoaded', function(){
        init();
    });

})(window, document, document.getElementById('c'));