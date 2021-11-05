const person = {
	name: "Chaim",
	sayName: function () {
		console.log(this.name);
	},
};

//this sees the name from the scope of the object
//person.sayName();

//this refers to the global scope and thus "this" does not refer person name
// const localSayName = person.sayName;
// localSayName();

//bind solution to the upper problem - using bind and using the object name as a parameter, binds "this" to see the scope of the referenced (person) object
const boundSayName = person.sayName.bind(person);
boundSayName();