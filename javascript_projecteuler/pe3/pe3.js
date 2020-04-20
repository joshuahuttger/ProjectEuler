'use strict';
exports.__esModule = true;
var primes_1 = require("../huttger_lib/primes");
var big = 600851475143;
var maxPrimeFactor = -1;
for (var i = 2; i * i <= big; i++) {
    if (big % i == 0) {
        if (primes_1.isprime(i)) {
            maxPrimeFactor = Math.max(maxPrimeFactor, i);
        }
        var otherFactor = big / i;
        if (primes_1.isprime(otherFactor)) {
            maxPrimeFactor = Math.max(maxPrimeFactor, otherFactor);
        }
    }
}
console.log(maxPrimeFactor);
