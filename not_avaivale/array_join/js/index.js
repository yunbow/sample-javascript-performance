
function doAntiPattern(roopNum) {
	var stopwatch = new Stopwatch();
	stopwatch.start();

	var html = '';
	for (var i = 0; i < roopNum; i++) {
		html += '<div></div>';
	}

	stopwatch.stop();	
	return stopwatch.getDiff();
}

function doPattern(roopNum) {
	var stopwatch = new Stopwatch();
	stopwatch.start();

	var html = '';
	var htmlArray = new Array(roopNum);
	for (var i = 0; i < roopNum; i++) {
		htmlArray.push('<div></div>');
	}
	html = htmlArray.join('');

	stopwatch.stop();
	return stopwatch.getDiff();
}

