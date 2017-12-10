
function doAntiPattern(roopNum) {
	var stopwatch = new Stopwatch();
	stopwatch.start();

	for (var i = 0; i < roopNum; i++) {
		var a = new Object();
	}

	stopwatch.stop();
	return stopwatch.getDiff();
}

function doPattern(roopNum) {
	var stopwatch = new Stopwatch();
	stopwatch.start();

	for (var i = 0; i < roopNum; i++) {
		var a = {};
	}

	stopwatch.stop();
	return stopwatch.getDiff();
}

