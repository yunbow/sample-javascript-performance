
function doAntiPattern(roopNum) {
	var stopwatch = new Stopwatch();
	stopwatch.start();

	function square(n) {
		return n * n;
	}
	var sum = 0;
	for (var i = 0; i < roopNum; i++) {
		sum += square(i);
	}

	stopwatch.stop();
	return stopwatch.getDiff();
}

function doPattern(roopNum) {
	var stopwatch = new Stopwatch();
	stopwatch.start();

	var sum = 0;
	for (var i = 0; i < roopNum; i++) {
		sum += i * i;
	}

	stopwatch.stop();
	return stopwatch.getDiff();
}

