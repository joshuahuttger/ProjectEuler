'use strict'
let total:number = 0;

for(let num = 3; num < 1000; num++){
	if(num % 3 == 0 || num % 5 == 0){
		total += num;
	}
}
console.log(total);

