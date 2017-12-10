
function doAntiPattern(roopNum) {
	$('body').append('<ul class="tempClassName"></ul>');
	var tempSelector = $('.tempClassName');
	tempSelector.hide();

	var stopwatch = new Stopwatch();
	stopwatch.start();

	for (var i = 0; i < roopNum; i++) {
		$('.tempClassName').append('<li>' + i + '</li>');
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
		$('#tempListsId').append('<li>' + i + '</li>');
	}

	stopwatch.stop();
	tempSelector.remove();
	
	return stopwatch.getDiff();
}

