
/**
 * Smash targets below this line
 * -----------------------------
 */

(function(win, doc, c) {

    var cx = c.getContext('2d'),
        w = win.innerWidth,
        h = win.innerHeight,

        clicked = false,
        lastpos,
        col,

        detail = 32,
        angle = 360 / detail,
        // angle = 45,

        // Some rad colours, should we need any.
        colours = [
            '#ed5565',
            '#da4453',
            '#fc6e51',
            '#e9573f',
            '#ffce54',
            '#fcbb42',
            '#a0d468',
            '#8cc152',
            '#48cfad',
            '#37bc9b',
            '#4fc1e9',
            '#3bafda',
            '#5d9cec',
            '#4a89dc',
            '#ac92ec',
            '#967adc',
            '#ec87c0',
            '#d770ad',
            '#e6e9ed',
            '#ccd1d9',
            '#aab2bd',
            '#656d78',
            '#434a54'
        ];

    cx.lineWidth = 10;
    cx.fillStyle = 0x555555;
    cx.strokeStyle = 0x555555;

    cx.globalCompositeOperation = "lighter";

    function randomColour() {
        return colours[Math.floor(Math.random() * colours.length)];
    }

    function dot(x,y,r, c){
        cx.translate(x, y);
        cx.strokeStyle = c;
        cx.fillStyle = c;
        cx.beginPath();
        cx.arc(0, 0, r*2, 0, 2 * Math.PI, false);
        cx.closePath();
        cx.fill();
        cx.setTransform(1, 0, 0, 1, 0, 0);
    }

    function line(x1, y1, x2, y2, c) {
        cx.strokeStyle = c;
        cx.beginPath();
        cx.moveTo(x1, y1);
        cx.lineTo(x2, y2);
        cx.stroke();
    }

    function go(ev) {
        if ( clicked === true ) {
            window.requestAnimationFrame(function() {
                cx.lineWidth = 1;
                line(lastpos.x, lastpos.y, ev.pageX, ev.pageY, col);
                line((lastpos.x * -1) + w, lastpos.y, (ev.pageX * -1) + w, ev.pageY, col);
                line(lastpos.x, (lastpos.y * -1) + h, ev.pageX, (ev.pageY * -1) + h, col);
                line((lastpos.x * -1) + w, (lastpos.y * -1) + h, (ev.pageX * -1) + w, (ev.pageY * -1) + h, col);

                for ( var i = 0, l = detail; i < l; i++ ) {
                    cx.translate(w/2, h/2);
                    cx.rotate(angle*Math.PI/180);
                    cx.translate(-w/2, -h/2);

                    line(lastpos.x, lastpos.y, ev.pageX, ev.pageY, col);
                    line((lastpos.x * -1) + w, lastpos.y, (ev.pageX * -1) + w, ev.pageY, col);
                    line(lastpos.x, (lastpos.y * -1) + h, ev.pageX, (ev.pageY * -1) + h, col);
                    line((lastpos.x * -1) + w, (lastpos.y * -1) + h, (ev.pageX * -1) + w, (ev.pageY * -1) + h, col);
                }

                cx.setTransform(1, 0, 0, 1, 0, 0);

                lastpos.x = ev.pageX;
                lastpos.y = ev.pageY;
            });
        }
    }

    function init() {
        c.width = w;
        c.height = h;

        // cx.lineWidth = 10;
        // cx.fillStyle = 0x555555;
        // cx.strokeStyle = 0x555555;

        // cx.globalCompositeOperation = "lighter";

        // cx.fillStyle = "#2b2c2f";
        // cx.fillRect(0,0,w,h);

        col = randomColour();
        dot(w/2, h/2, 2, col);

        $(doc).on('mousedown', 'canvas', function(ev) {
            lastpos = new Vec(ev.pageX, ev.pageY);
            clicked = true;
        });

        $(doc).on('touchstart', 'canvas', function(ev) {
            var touch =  ev.originalEvent.touches[0] || ev.originalEvent.changedTouches[0];
            lastpos = new Vec(touch.pageX, touch.pageY);
            clicked = true;
        });

        $(doc).on('mouseup touchend', function(ev) {
            clicked = false;
        });

        $(doc).on('click', '.clear', function(ev) {
            ev.preventDefault
            cx.clearRect(0, 0, w, h);
            // cx.fillStyle = "#2b2c2f";
            // cx.fillRect(0,0,w,h);
            dot(w/2, h/2, 2, col);
        });

        $(doc).on('touchmove', function(ev) {
            console.log('here we go', ev);
            ev.preventDefault();
            var touch =  ev.originalEvent.touches[0] || ev.originalEvent.changedTouches[0];
            console.log(touch);
            go(touch);
        });

        $(doc).on('mousemove', go);;

        // window.requestAnimationFrame(render);
    }
    $(init);

})(window,document,document.querySelectorAll('canvas')[0]);