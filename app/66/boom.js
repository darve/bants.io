
(function(w,d,c) {

    var cx = c.getContext('2d'),
        w = c.width,
        h = c.height,
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
        density = 10,
        grid = {
            x: [],
            y: []
        };

    function randomColour() {
        return colours[Math.floor(Math.random() * colours.length)];
    }

    function dot(x,y,r){
        cx.translate(x, y);
        cx.fillStyle = this.color;
        cx.beginPath();
        cx.arc(0,0, r*2, 0, 2 * Math.PI, false);
        cx.fill();
        cx.setTransform(1, 0, 0, 1, 0, 0);
    }

    function render() {
        window.requestAnimationFrame(render);
        cx.clearRect(0,0,w,h);
    }

    function init() {
        for ( var i = 0; i < l; i++ ) {
            for ( var f = 0; f < w; i++ ) {
                grid.x[i] = Math.floor(Math.random() * w);
                grid.y[i] = Math.floor(Math.random() * h);                
            }
        }

        window.requestAnimationFrame(render);
    }

    document.addEventListener('DOMContentLoaded', function(){
        init();
    });

})(window,document,document.querySelectorAll('canvas')[0]);