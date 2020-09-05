class Parent {
	constructor (){
		this.fatherName = "Chandragupto the King"
	}
}

class Child extends Parent{
	constructor (name){
		super ()
		this.name = name;
	}
	/**Declaring a Function (It call's Method) */
	getFullName(){
		return this.name + " " + this.fatherName; 
	}
}

const baby = new Child ("Chandragupto");
console.log (baby.getFullName());