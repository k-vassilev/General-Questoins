function Counter() {
	let count = 0;
	this.incrementCounter = function () {
		count++;
		console.log(count);
	};
	this.decrementCounter = function () {
		count--;
		console.log(count);
	};
}
let counter1 = new Counter();
let counter2 = new Counter();

counter1.incrementCounter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();

counter2.decrementCounter();
counter2.decrementCounter();
counter2.incrementCounter();
counter2.decrementCounter();

//count is encapsulated and only the functions can be called outside of the scope.
//Using new initiates a new instance of 