
function doAntiPattern(roopNum) {
	var stopwatch = new Stopwatch();
	stopwatch.start();

	for (var i = 0; i < roopNum; i++) {
		window.test = 'test';
	}

	stopwatch.stop();
	return stopwatch.getDiff();
}

function doPattern(roopNum) {
	var stopwatch = new Stopwatch();
	stopwatch.start();

	var winObj = window;
	for (var i = 0; i < roopNum; i++) {
		winObj.test = 'test';
	}

	stopwatch.stop();
	return stopwatch.getDiff();
}

