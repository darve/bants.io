var path     = require('path'),
    express  = require('express'),
    app      = express();

app.use(express.bodyParser());

// First looks for a static file: index.html, css, images, etc.
app.use("/", express.compress());
app.use("/", express.static(path.resolve(__dirname, "app")));
app.use("/", function(req, res, next) {
  res.send(404);
});

app.use(express.logger()); // Log requests to the console

app.all('/', function(req, res) {
  res.sendfile('index.html', { root: "app" });
});

var args = {};

process.argv.forEach(function (val, index, array) {
    if ( val.indexOf('=') !== -1 ) {
        args[val.split('=')[0]] = val.split('=')[1];
    }
});

app.listen(args.port || 3000);

console.log('Server listening on port ' + (args.port || 3000));
