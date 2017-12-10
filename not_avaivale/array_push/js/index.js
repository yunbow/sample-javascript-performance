
function doAntiPattern(roopNum) {
	var stopwatch = new Stopwatch();
	stopwatch.start();

	var html = new Array(roopNum);
	for (var i = 0; i < roopNum; i++) {
		html.push('<div></div>');
	}

	stopwatch.stop();
	return stopwatch.getDiff();
}

function doPattern(roopNum) {
	var stopwatch = new Stopwatch();
	stopwatch.start();

	var html = new Array(roopNum);
	for (var i = 0; i < roopNum; i++) {
		html[i] = '<div></div>';
	}

	stopwatch.stop();
	return stopwatch.getDiff();
}

