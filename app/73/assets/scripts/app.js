
/**
 * Smash targets below this line
 * -----------------------------
 */

(function(win, doc, c) {

    var cx = c.getContext('2d'),
        w = win.innerWidth,
        h = win.innerHeight,

        center = new Vec(w/2, h/2),

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
            '#f5f7fa',
            '#e6e9ed',
            '#ccd1d9',
            '#aab2bd',
            '#656d78',
            '#434a54'
        ],

        col;
        // lads = [{
        //     pos: new Vec(0, 0),
        //     distance: 200,
        //     sine: 1,
        //     inc: Math.PI / 60,
        // },{
        //     pos: new Vec(0, 0),
        //     distance: 300,
        //     sine: 1,
        //     inc: Math.PI / 33,
        // },{
        //     pos: new Vec(0, 0),
        //     distance: 400,
        //     sine: 1,
        //     inc: Math.PI / 16,
        // }];

    var lads = [];

    for ( i = 1, l = 3; i < l; i++ ) {
        lads.push({
            pos: new Vec(0, 0),
            distance: 30 * i,
            sine: 1,
            inc: Math.PI / ((120/i) + i)
        });
    }

    cx.lineWidth = 1;
    cx.fillStyle = 0x555555;
    cx.strokeStyle = 0x555555;

    function randomColour() {
        return colours[Math.floor(Math.random() * colours.length)];
    }

    function dot(v, r, c){
        cx.translate(v.x, v.y);
        cx.strokeStyle = c;
        cx.fillStyle = c;
        cx.beginPath();
        cx.arc(0, 0, r*2, 0, 2 * Math.PI, false);
        cx.closePath();
        cx.fill();
        cx.setTransform(1, 0, 0, 1, 0, 0);
    }

    function line(v1, v2, c) {
        cx.strokeStyle = c;
        cx.beginPath();
        cx.moveTo(v1.x, v1.y);
        cx.lineTo(v2.x, v2.y);
        cx.stroke();
    }

    function render(){
        // for ( var x = 0, y = 10; x < y; x++ ) {
            for ( var i in lads ) {
                var l = lads[i];
                l.pos.x = l.distance * Math.sin(l.sine) + w/2;
                l.pos.y = l.distance * -Math.cos(l.sine) + h/2;
                l.sine += i % 2 === 0 ? l.inc : -l.inc;
                l.distance += 0.1;
                // dot(l.pos, 2, 'rgba(255, 255, 255, 1)');
            }

            for ( var i = 0, l = lads.length-1; i < l; i++ ) {
                line(lads[i].pos, lads[i+1].pos, 'rgba(255, 255, 255, 0.05)');
            }    
        // }
        
        window.requestAnimationFrame(render);
    }

    function init() {
        c.width = w;
        c.height = h;

        // cx.globalCompositeOperation = 'lighter';

        col = randomColour();
        cx.fillStyle = colours[23];
        cx.fillRect(0, 0, w, h);
        window.requestAnimationFrame(render);
    }
    $(init);

})(window,document,document.querySelectorAll('canvas')[0]);