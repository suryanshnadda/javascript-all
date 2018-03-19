// so we can wrap up everything inside a function
//function to check that number is even or not.
function even() {
	var a = prompt('enter any number', 0);
	if (a % 2 === 0) {
		alert('yes number is even');
	} else {
		alert('no number is not even');
	}
}
function name() {
	var a = prompt('enter your name', 'nody');
	if (isNaN(a)) {
		console.log(a);
	} else {
		alert('invalid format');
	}
}
even();
name();
