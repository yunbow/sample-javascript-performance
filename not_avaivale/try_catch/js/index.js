
function doAntiPattern(roopNum) {
	var stopwatch = new Stopwatch();
	stopwatch.start();

	var a = 0;
	for (var i = 0; i < roopNum; i++) {
		try {
			a++;
		} catch (e) { }
	}

	stopwatch.stop();
	return stopwatch.getDiff();
}

function doPattern(roopNum) {
	var stopwatch = new Stopwatch();
	stopwatch.start();

	var a = 0;
	for (var i = 0; i < roopNum; i++) {
		a++;
	}

	stopwatch.stop();
	return stopwatch.getDiff();
}

