'use strict';
exports.__esModule = true;
function ispalendrome(s) {
    return s === s.split("").reverse().join("");
}
exports.ispalendrome = ispalendrome;
