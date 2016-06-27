
var require,
    ug = require("uglify-js2"),
    fs = require('fs'),
    dir = './tmp',
    result;

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}