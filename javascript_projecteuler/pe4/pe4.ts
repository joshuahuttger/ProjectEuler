'use strict'
import { ispalendrome } from '../huttger_lib/ispalendrome';
let maxPal:number = 0;
for(let i:number = 100; i < 1000; i++){
    for(let j:number = i+1; j < 1000; j++){
        if(ispalendrome((i*j)+"")){
            maxPal = Math.max(maxPal,i*j);
        }
    }
}
console.log(maxPal);