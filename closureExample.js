function outhermost(){
	var c = 20;
	function outer(b){
		function inner(){
			console.log(a,b,c);
		}
		let a = 10;
		return inner;
	}
	return outer;
}
// inner is in the scope of both outer and outhermost functions, so it has access to a,b and c.
// a is read because the "inner" function is returned after a is defined.
var close = outhermost()('hello world');
close();

