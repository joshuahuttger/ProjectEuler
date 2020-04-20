'use strict';
exports.__esModule = true;
var ispalendrome_1 = require("../huttger_lib/ispalendrome");
var maxPal = 0;
for (var i = 100; i < 1000; i++) {
    for (var j = i + 1; j < 1000; j++) {
        if (ispalendrome_1.ispalendrome((i * j) + "")) {
            maxPal = Math.max(maxPal, i * j);
        }
    }
}
console.log(maxPal);
