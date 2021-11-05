const vehicle = {
	drive: function () {
		console.log("the car is driving");
	},
};

const car = {
	make: "Honda",
};


//setPrototypeOf adds the second parameter`s properties to the first, thus car is extended by having the drive function.
Object.setPrototypeOf(car, vehicle);
car.drive();