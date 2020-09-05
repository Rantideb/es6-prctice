function doubleIt (num){
	return num * 2 
} 

console.log (doubleIt(43));


/** Function Expression, like variable **/ const doubleIt2 = /** function declaration */ function(num){
	return num * 2;
}

console.log(doubleIt2(23));


/** ES6 Way **/


const doubleItEs6 = num => /** Arrow Function */ num * 2;
console.log(doubleItEs6(123)); 


const add = (num1, num2) => num1 + num2;
console.log (add(17, 13));

/** Adding Long Function */
const doMath =  (x, y) => {
	const sum = x + y;
	const diff = x-y;
	const result = sum * diff;
	return result ;
}

console.log(doMath (23, 12));