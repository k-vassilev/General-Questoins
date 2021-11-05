//Callback example with timeout:

function getNumber(cb) {
	setTimeout(() => {
		cb(10);
	}, 100);
}

// getNumber((n) => {
// 	console.log(n);
// });


//Example with promise
function getNumberPromise(){
	return new Promise((resolve, reject) => {
		getNumber(resolve);
	});
}

const promise = getNumberPromise();

promise.then(n => console.log(n));