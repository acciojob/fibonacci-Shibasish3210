function fibonacci(num) {
// your code here
	if(num === 2 || num=== 1) return num-1;

	return fibonacci(num-2)+fibonacci(num-1);
}
let a = prompt("Enter a number");
let ans = fibonacci(a);
alert("Your fib no. is "+ans);

module.exports = fibonacci;