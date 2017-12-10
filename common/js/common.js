var log = function (msg) {
    var dt = new Date();
    var now = '[' + formatNowTime(dt.getHours(), dt.getMinutes(), dt.getSeconds()) + ']';
    msg = now + ' ' + msg + "\n";
    console.log(msg);
    $("#log").append(msg);
    $("#log").scrollTop($("#log")[0].scrollHeight);
};

var formatNowTime = function (h, m, s) {
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }
    return h + ':' + m + ':' + s;
};

var Stopwatch = function () {
    this.start = function () {
        this.startDate = new Date();
    };
    this.stop = function () {
        this.endDate = new Date();
    };
    this.getDiff = function () {
        return this.endDate.getTime() - this.startDate.getTime();
    }
    return this;
};

$(function () {

    loadingSelector = $('.loading');
    loadingSelector.show();

    var counts = [1, 10, 100, 1000];
    var antiPatternResult = [];
    var patternResult = [];

    for (var i = 0; i < counts.length; i++) {
        var result1 = doAntiPattern(counts[i]);
        var result2 = doPattern(counts[i]);
        var rate = Math.floor(((result1 - result2) / result1) * 100);

        antiPatternResult.push(result1);
        patternResult.push(result2);

        console.log('Count=' + (i + 1), 'result1=' + result1 + ' ms', 'result2=' + result2 + ' ms', 'rate=' + rate + ' %');
    }
    loadingSelector.hide();

    // グラフ描画
    new Chart(document.getElementById("bar-chart-horizontal"), {
        type: 'horizontalBar',
        data: {
            labels: counts,
            datasets: [
                {
                    label: "Anti Pattern",
                    backgroundColor: "#F5A9A9",
                    data: antiPatternResult
                }, {
                    label: "Pattern",
                    backgroundColor: "#A9A9F5",
                    data: patternResult
                }
            ]
        },
        options: {
            responsive: true,
            legend: { display: true },
            scales: {
                xAxes: [
                    {
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Milliseconds'
                        }
                    }
                ],
                yAxes: [
                    {
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Count'
                        }
                    }
                ]
            },
        }
    });
});
