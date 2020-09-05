// class student {
// 	constructor (){
// 		this.id = 1;
// 		this.name = "Mahi";
// 	}
// }

// const student1 = new student ();
// const student2 = new student ();

// console.log(student1, student2);


class student {
	constructor (sID, sName){
		this.id = sID;
		this.name = sName;
	}
}

const student1 = new student (12, "Rajib");
const student2 = new student (23, "Koppa");
console.log(student1, student2);