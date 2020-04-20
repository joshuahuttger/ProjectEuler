'use strict'

export function isprime(num:number):boolean{
    if(num <= 1){
        return false;
    }else{
        for(let i:number = 2; i*i <= num; i++){
            if(num % i == 0){
                return false;
            }
        }
    }
    return true;
}
