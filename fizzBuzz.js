/* Instructions 
 *
 */

var output = []; // empty array
var count = 1;

function fizzBuzz() {
	while (count <= 100) {
		if (count % 3 === 0 && count % 5 === 0) {
			output.push("FizzBuzz");
		} 
		else if (count % 3 === 0) {
			output.push("Fizz");
		} 
		else if (count % 5 === 0) {
			output.push("Buzz");
		} 
		else 
			output.push(count);
		count++;
	}
	console.log(output); // print out value of output on every run 
}

fizzBuzz(); // call the fizzBuzz function
