
function doAntiPattern(roopNum) {
	$('body').append('<ul id="tempListsId"></ul>');
	var tempSelector = $('#tempListsId');
	tempSelector.hide();

	var stopwatch = new Stopwatch();
	stopwatch.start();

	for (var i = 0; i < roopNum; i++) {
		tempSelector.append('<li>' + i + '</li>');
	}

	stopwatch.stop();
	tempSelector.remove();
	
	return stopwatch.getDiff();
}

function doPattern(roopNum) {
	$('body').append('<ul id="tempListsId"></ul>');
	var tempSelector = $('#tempListsId');
	tempSelector.hide();

	var stopwatch = new Stopwatch();
	stopwatch.start();

	var html = Array(roopNum);
	for (var i = 0; i < roopNum; i++) {
		html.push('<li>' + i + '</li>');
	}
	tempSelector.append(html.join());

	stopwatch.stop();
	tempSelector.remove();

	return stopwatch.getDiff();
}

