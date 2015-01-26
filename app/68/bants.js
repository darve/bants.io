

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

    function shadeColour(color, percent) {   
        var num = parseInt(color.slice(1),16), amt = Math.round(2.55 * percent), R = (num >> 16) + amt, B = (num >> 8 & 0x00FF) + amt, G = (num & 0x0000FF) + amt;
        return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (B<255?B<1?0:B:255)*0x100 + (G<255?G<1?0:G:255)).toString(16).slice(1);
    }

    function init() {
        c.width = width;
        c.height = height;
        
        num = width / spacing;
        num = num % 2 === 0 ? num : num-1;

        var odds = Math.floor(num/2);

        /*
            Work out the increment from the number of dots
            Check if the number of dots is even
            If it is then remove one
            then work out how many dots on either side of the central dot
            for each of them decrease the increment until the central one, then increase it again
         */

        for ( var i = 0, l = num; i < l; i++ ) {

            var inc,
                inverse = Math.abs(i-odds),
                outverse = Math.abs(odds-i);

            if ( i < odds ) {
                inc = ((inverse) / 300);
            } else if ( i >= odds ) {
                inc = ((outverse) / 300);
            }
            
            dots[i] = {
                x: w2 - ((num/2) * spacing) + ( i * spacing),
                y: h2,
                inc: inc,
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
        // cx.fillStyle = "#0e1117";
        cx.fillStyle = "rgba(14,17,23,0.3)";
        cx.fillRect(0, 0, width, height);

        for ( var i = 0, l = dots.length; i < l; i++ ) {
            // cx.fillStyle = "#ffffff";
            cx.fillStyle = shadeColour("#ffffff", (dots[i].y - h2) + 65);
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