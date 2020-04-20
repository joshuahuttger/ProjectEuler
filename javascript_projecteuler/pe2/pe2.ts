'use strict'

let even_fib_sum:number = 0;
for(let fib1:number = 1,fib2:number=2; fib1 <= 4000000; [fib1,fib2] = [fib2,fib2+fib1]){
    if(fib1 % 2 == 0){
        even_fib_sum += fib1;
    }
}
console.log(even_fib_sum);