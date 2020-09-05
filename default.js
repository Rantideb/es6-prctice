function add (num1, num2) {
	num2 = num2 || 0;
	return num1 + num2 ;
	
}

console.log(add(17, 13));

// If a param isn't provided;


console.log(add(12));


// ES6 Way

function add (num1, num2 = 0) {
	
	return num1 + num2 ;
	
}

// 2nd param declaired
console.log(add(17, 13));

// Not declaired
console.log(add(17));