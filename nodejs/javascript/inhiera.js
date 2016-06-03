var a = {x:'ds',y:'dfs'};
var b = Object.create(a);
b.x = 'fuzai';
a.x = 'huangmin';
console.log(b.x);