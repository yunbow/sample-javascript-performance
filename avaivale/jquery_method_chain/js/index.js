
function doAntiPattern(roopNum) {
	$('body').append('<ul id="tempListsId"></ul>');
	var tempSelector = $('#tempListsId');
	tempSelector.hide();

	var stopwatch = new Stopwatch();
	stopwatch.start();

	for (var i = 0; i < roopNum; i++) {
		tempSelector.append('<li>' + i + '</li>');
		tempSelector.append('<li>' + i + '</li>');
		tempSelector.append('<li>' + i + '</li>');
		tempSelector.append('<li>' + i + '</li>');
		tempSelector.append('<li>' + i + '</li>');
		tempSelector.append('<li>' + i + '</li>');
		tempSelector.append('<li>' + i + '</li>');
		tempSelector.append('<li>' + i + '</li>');
		tempSelector.append('<li>' + i + '</li>');
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

	for (var i = 0; i < roopNum; i++) {
		tempSelector.append('<li>' + i + '</li>').append('<li>' + i + '</li>').append('<li>' + i + '</li>').append('<li>' + i + '</li>').append('<li>' + i + '</li>').append('<li>' + i + '</li>').append('<li>' + i + '</li>').append('<li>' + i + '</li>').append('<li>' + i + '</li>').append('<li>' + i + '</li>');
	}

	stopwatch.stop();
	tempSelector.remove();
	
	return stopwatch.getDiff();
}

