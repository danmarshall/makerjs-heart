var makerjs = require('makerjs');
var Heart = require('./index.js');
console.log(makerjs.exporter.toSVG(new Heart(10, 90)));
