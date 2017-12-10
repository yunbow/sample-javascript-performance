
function doAntiPattern(roopNum) {
	$('body').append('<div id="tempContentsId"><ul class="tempClassName"></ul></div>');
	var tempSelector = $('#tempContentsId');
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
	$('body').append('<div id="tempContentsId"><ul class="tempClassName"></ul></div>');
	var tempSelector = $('#tempContentsId');
	tempSelector.hide();

	var stopwatch = new Stopwatch();
	stopwatch.start();

	for (var i = 0; i < roopNum; i++) {
		$('#tempContentsId').find('.tempClassName').append('<li>' + i + '</li>');
	}

	stopwatch.stop();
	tempSelector.remove();
	
	return stopwatch.getDiff();
}

