
function doAntiPattern(roopNum) {
	var array = new Array(roopNum)

	var stopwatch = new Stopwatch();
	stopwatch.start();

	for (var i = 0; i < array.length; i++) {
		array[i] = i;
	}

	stopwatch.stop();
	return stopwatch.getDiff();
}

function doPattern(roopNum) {
	var array = new Array(roopNum)

	var stopwatch = new Stopwatch();
	stopwatch.start();

	for (var i = 0, len = array.length; i < len; i++) {
		array[i] = i;
	}

	stopwatch.stop();
	return stopwatch.getDiff();
}

