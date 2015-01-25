

(function(w,d,c){

    var cx = c.getContext('2d'),
        width = w.innerWidth,
        height = w.innerHeight,
        w2 = width/2,
        h2 = height/2,
        dots = [],
        num = 40,
        radius = 2,
        spacing = 12,
        speed = 150,
        increase = Math.PI / 1000;

    function init() {
        c.width = width;
        c.height = height;
        
        num = width / spacing;

        for ( var i = 0, l = num; i < l; i++ ) {
            dots[i] = {
                x: w2 - ((num/2) * spacing) + ( i * spacing),
                y: h2,
                inc: ((i+1) / 500),
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
            dots[i].y = h2 + (speed * Math.sin(dots[i].sine));
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