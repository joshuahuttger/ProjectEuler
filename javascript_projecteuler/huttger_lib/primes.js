'use strict';
exports.__esModule = true;
function isprime(num) {
    if (num <= 1) {
        return false;
    }
    else {
        for (var i = 2; i * i <= num; i++) {
            if (num % i == 0) {
                return false;
            }
        }
    }
    return true;
}
exports.isprime = isprime;
