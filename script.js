function fibonacci(num) {
// your code here
	if(num === 2 || num=== 1) return num-1;

	return fibonacci(num-2)+fibonacci(num-1);
}
// console.log(fibonacci(n));

module.exports = fibonacci;
