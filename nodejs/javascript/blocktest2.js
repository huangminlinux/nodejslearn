function constfuncs(){
	var funcs = [];
	for(var i=0;i<10;i++){
		funcs[i]=function(){return i;}
	}
	return funcs;

}
var funcs1 = constfuncs();
console.log(funcs1[5]());
