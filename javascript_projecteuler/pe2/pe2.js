'use strict';
var even_fib_sum = 0;
for (var fib1 = 1, fib2 = 2; fib1 <= 4000000; _a = [fib2, fib2 + fib1], fib1 = _a[0], fib2 = _a[1], _a) {
    if (fib1 % 2 == 0) {
        even_fib_sum += fib1;
    }
}
console.log(even_fib_sum);
var _a;
