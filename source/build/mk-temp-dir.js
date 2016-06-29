
var require,
    ug = require("uglify-js2"),
    fs = require('fs'),
    dir = './min',
    result;

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}