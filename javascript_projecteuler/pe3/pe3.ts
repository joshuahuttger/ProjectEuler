'use strict'

import { isprime } from '../huttger_lib/primes';
let big:number = 600851475143;
let maxPrimeFactor:number = -1;
for(let i:number = 2; i*i <= big; i++){
    if(big % i == 0){
        if(isprime(i)){
            maxPrimeFactor = Math.max(maxPrimeFactor,i);
        }
        let otherFactor = big / i;
        if(isprime(otherFactor)){
            maxPrimeFactor = Math.max(maxPrimeFactor,otherFactor);
        }
    }
}
console.log(maxPrimeFactor);
