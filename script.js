function fibonacci(num) {
// your code here
	if(num === 1 || num===0) return num;

	return fibonacci(num-2)+fibonacci(num-1);
}
console.log(fibonacci(8));

module.exports = fibonacci;
