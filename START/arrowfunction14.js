//we have another way to write functions and its like this

var a = () => alert('here goes arrow function');
a();
/*
this is similier to 

function node()
{
  alert("here goes arrow function");
}
var a=node();
*/

var b = (c, d) => c + d;

b(2, 3);
