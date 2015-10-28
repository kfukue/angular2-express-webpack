var path = require('path');
var glob = require('glob');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var config = require('../webpack.config.js');
var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');
var isDeveloping = process.env.NODE_ENV !== 'production';
var port = isDeveloping ? 3000 : process.env.PORT;
var app = express();
var router = express.Router();
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/public/index.html'));
});
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + '/__build__'));
app.use(express.static(path.join(__dirname, '../src/public')));
for (var _i = 0, _a = routeFiles(); _i < _a.length; _i++) {
    var route = _a[_i];
    app.use('/api', require(route));
}
app.use('/', router);
if (isDeveloping) {
    var compiler = webpack(config);
    app.use(webpackMiddleware(compiler, {
        publicPath: config.output.publicPath,
        contentBase: 'src',
        stats: {
            colors: true
        }
    }));
}
mongoose.connect('mongodb://localhost:27017/angular2');
app.listen(port, 'localhost', function (err) {
    if (err) {
        console.log(err);
    }
    console.info('==> 🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});
function routeFiles() {
    var files = glob.sync('server/routes/**/*.js');
    var output = [];
    files.forEach(function (file) {
        output.push(file.replace("server", "."));
    });
    return output;
}
