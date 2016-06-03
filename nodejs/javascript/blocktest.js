

function f1(v) { //作为参数传入，  能够记录这集
	return function() { return v; };
}

function createarr() {
	var funcs = [];
	for (var i = 0; i < 10; i++) {
		funcs[i] = f1(i); // f1 
	}
	return funcs;
}

var farr = createarr();
console.log(farr[7]()); //7


function createArrInBolck() {
	var funcs = [];
	for (var i = 0; i < 10; i++) {
		funcs[i] = function() {return i;};

	}
	return funcs;
}

var farrb = createArrInBolck();
console.log(farrb[7]()); //10


var count = 6;
var bock = () => {count = 7;};
bock();

console.log(count);